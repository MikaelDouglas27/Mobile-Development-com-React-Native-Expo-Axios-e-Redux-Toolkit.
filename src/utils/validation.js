export function validateLogin(email, password) {
  const errors = {};
  if (!email.trim()) errors.email = 'Campo obrigatório';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Informe um e-mail válido.';
  if (!password) errors.password = 'Campo obrigatório';
  else if (password.length < 6) errors.password = 'A senha precisa ter pelo menos 6 caracteres.';
  return errors;
}
