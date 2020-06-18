// 手写数组map 方法
Array.prototype.map = function(callbackFn,thisArg) {
  // 处理数组类型异常
  if(this === null || this === undefined) {
    throw new TypeError("cannot read property 'map' of null or undefined")
  }
  // 处理回调类型异常
  if(Object.prototype.toString.call(callbackFn) != "[object Function]") {
    throw new TypeError(callbackFn + 'is not a function')
  }
  // 先转换为对象
  let O = Object(this);
  let T = thisArg;
  // 保证len 为数字 且为整数
  let len = O.length >>> 0;
  let A = new Array(len);
  for(let k =0; k < len;k++) {
    // in 表示在原型链中查找
    // 如果用 hasOwnProperty 是有问题的，它只能找私有属性
    if(k in O) {
      let kValue = O[k];
      // 依次传入this,当前项，当前索引，整个数组
      let mappedValue = callbackFn.call(T,kValue,k,O);
      A[k] = mappedValue;
    }
  }
  return A;
}

let arr = [1,2,3]
let result = arr.map((ele,index,array) => {
  array.push(4);
  return ele * 2;
})
console.log(result)

Array.prototype.filter = function(callbackFn,thisArg) {
  if(this === null || this === undefined) {
    throw new TypeError("cannot read property 'filter' of null or undefined");
  }
  if (typeof callbackFn !== 'function') {
    throw new TypeError(callbackFn+"is not a function");
  }
}