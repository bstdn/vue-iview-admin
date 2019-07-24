export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  const len = arr.length
  while (++i < len) {
    const item = arr[i]
    fn(item, i, arr)
  }
}

export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}

export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}
