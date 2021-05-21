export const getDate = (date) => {
  if (!data || typeof data !== 'string') return '';

  const value = new Date(date);
  const yyyy = value.getFullYear();
  const mm = value.getMonth().padStart(2, 0);
  const dd = value.getDate().padStart(2, 0);

  return `${yyyy}.${mm}.${dd}`;
};
