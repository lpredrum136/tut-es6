const buaAn = {
  buaSang: 'xoi',
  buaTrua: 'pho',
  buaToi: 'com'
}

const traiCay = ['cam', 'quyt', 'mit', 'dua']

/* console.log(`Sang nay toi an ${buaAn.buaSang}`)
console.log(`Trua nay toi an ${buaAn.buaTrua}`)
console.log(`Toi nay toi an ${buaAn.buaToi}`) 

console.log(`Qua so 0 la qua ${traiCay[0]}`)
console.log(`Qua so 1 la qua ${traiCay[1]}`)
console.log(`Qua so 2 la qua ${traiCay[2]}`)
console.log(`Qua so 3 la qua ${traiCay[3]}`)
*/

const { buaSang, buaTrua, buaToi } = buaAn

console.log(`Sang nay toi an ${buaSang}`)
console.log(`Trua nay toi an ${buaTrua}`)
console.log(`Toi nay toi an ${buaToi}`)

const [quaCam, quaQuyt, quaMit, quaDua] = traiCay

console.log('==========')

console.log(`Qua so 0 la ${quaCam}`)
console.log(`Qua so 0 la ${quaQuyt}`)
console.log(`Qua so 0 la ${quaMit}`)
console.log(`Qua so 0 la ${quaDua}`)

// Tao object sinhVien
// ten
// tuoi
// lay ten va tuoi tu sinh vien ra, gan vao bien tenCuaToi, tuoiCuaToi
// In: 'Toi ten la tenCuaToi - tuoiCuaToi tuoi'. Dung Template Literal.
