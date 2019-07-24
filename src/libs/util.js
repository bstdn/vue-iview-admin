export const localRead = (key) => {
  return localStorage.getItem(key) || ''
}
