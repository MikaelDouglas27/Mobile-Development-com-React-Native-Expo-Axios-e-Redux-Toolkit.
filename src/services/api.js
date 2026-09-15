import axios from 'axios';
import { groups } from '../constants/categories';
export const api = axios.create({ baseURL: 'https://dummyjson.com', timeout: 15000 });
export async function getProducts(group, signal) {
  // As categorias são independentes: buscamos em paralelo. limit=0 evita truncamento.
  const responses = await Promise.all(groups[group].categories.map(category =>
    api.get(`/products/category/${category}`, { params: { limit: 0 }, signal })
  ));
  const products = responses.flatMap(({ data }) => {
    if (!Array.isArray(data.products)) throw new Error('Resposta inesperada da API.');
    return data.products;
  });
  return [...new Map(products.map(product => [product.id, product])).values()];
}
export async function getProduct(id, signal) {
  if (!/^\d+$/.test(String(id))) throw new Error('Produto inválido.');
  const { data } = await api.get(`/products/${id}`, { signal });
  if (!data?.id || !data?.title) throw new Error('Resposta inesperada da API.');
  return data;
}
export function getErrorMessage(error) {
  if (error.response?.status === 404) return 'Produto não encontrado.';
  if (error.code === 'ECONNABORTED') return 'A consulta demorou demais. Tente novamente.';
  return 'Não foi possível carregar os produtos. Verifique sua conexão e tente novamente.';
}
