let obj = { one: 1, two: 2 };
for (let [k, v] of Object.entries(obj)) {
  if(typeof v === 'number') {
    obj[k] = v+2;
  }
}

console.log(obj)
let k = Object.entries(obj)
console.log(k)