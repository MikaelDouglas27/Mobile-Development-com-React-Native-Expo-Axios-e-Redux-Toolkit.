// Convenção didática: valores apresentados em reais, sem conversão cambial.
export const formatPrice = value => `R$ ${Number(value).toFixed(2).replace('.', ',')}`;
export const formatDiscount = value => `${Number(value || 0).toFixed(2).replace('.', ',')}%`;

export function discountedPrice(price, percentage) {
  const discount = Math.max(0, Math.min(100, Number(percentage) || 0));
  return Math.round((Number(price) * (1 - discount / 100) + Number.EPSILON) * 100) / 100;
}
