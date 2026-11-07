export function greeting(name) {
  const normalized = name.trim();
  return normalized ? `Hello, ${normalized}!` : 'Hello!';
}
