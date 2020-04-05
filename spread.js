const buaAn = {
  buaSang: 'xoi',
  buaTrua: 'pho',
  buaToi: 'com'
}

const buaAn1 = { ...buaAn, buaChieu: 'che' }

console.log(buaAn1)

const buaAn2 = {
  ...buaAn,
  buaTrua: 'bun',
  buaToi: 'chao'
}

console.log(buaAn2)

const tapHopSo = [1, 2, 3]

const tapHopSo1 = [...tapHopSo, 4]

console.log(tapHopSo1)

// Object sinhVien:
// ten: ...
// nam: 1, 2...
// sinhVienSapTotNghiep lay cac phan tu cua sinhVien
// nam: 4
// sapTotNghiep: true
// console.log()
