const computedPropertyName = ['buaToi']

const buaAn = {
  buaSang: 'xoi',
  buaTrua: 'pho',
  [computedPropertyName]: 'bun'
}

console.log(buaAn)

const buaAnKhac = {
  buaSang: 'xoi',
  buaTrua: 'pho',
  [computedPropertyName + 'HomNay']: 'bun'
}

console.log(buaAnKhac)

// Dat bien ten = 'Ten'
// Tao object nguoi:
// quocTich: ...
// Computed Property Name: hoVaTen trong do 'Ten' lay tu bien ten
// Khong dung '+' de noi ma dung Template Literal (co dau ` va $)
// console.log()
// Tao object nguoiKhac:
// Spread cua nguoi
// Thay hoVaTen
// Them tuoi
// console.log()

const ten = 'Ten'
const nguoi = {
  quocTich: 'Viet Nam',
  // ['hoVa' + ten]: 'Henry'
  [`hoVa${ten}`]: 'Henry'
}
console.log(nguoi)

const nguoiKhac = {
  ...nguoi,
  hoVaTen: 'Nguyen Thi Teo',
  tuoi: 23
}

console.log(nguoiKhac)
