// function myInstanceof(left,right) {
//   if(typeof left !== 'object' || left === null) return false;
//   let proto = Object.getPrototypeOf(left);
//   while(true) {
//     //查找到尽头，还没找到
//     if (proto == null) return false;
//     // 找到相同的原型对象
//     if(proto == right.prototype) return true;
//     proto = Object.getPrototypeOf(proto);
//   }
// }
// console.log(myInstanceof(new String(111),String));


var a = {
  value:0,
  valueOf:function() {
    this.value++;
    return this.value;
  }
}

console.log(a == 1 && a==2)