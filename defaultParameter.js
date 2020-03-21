/* function congHaiSo(x, y) {
  if (y === undefined) y = 2
  return x + y
} */

const congHaiSo = (x, y = 2) => x + y

console.log(congHaiSo(5))