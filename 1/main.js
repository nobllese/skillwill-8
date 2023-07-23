function expo(number, xarisxi, cb) {
    if (typeof number === 'number' && typeof xarisxi === 'number') {
      const result = number ** xarisxi; 
      cb(result); 
  }
}
newNum = result => console.log(result)
expo(5, 5, newNum)

