export function saliwon<T>(mgaItem: T[]): T[] {
  const kopya = [...mgaItem];
  for (let i = kopya.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tem = kopya[i];
    kopya[i] = kopya[j];
    kopya[j] = tem;
  }
  return kopya;
}
