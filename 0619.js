Array.prototype.filter = function(callbackfn,thisArg) {
  // 处理数组类型异常
  if(this === null || this === undefined) {
    throw new TypeError("cannot read property 'filter' of null or undefined ")
  }
  // 处理回调类型异常
  if(Object.prototype.toString.call(callbackfn) != "[object Function]") {
    throw new TypeError(callbackfn + 'is not a function')
  }
  console.log(this);
  console.log(callbackfn);
  console.log(thisArg)
  let O = Object(this);
  let len = O.length >>> 0;
  let resLen = 0;
  let res = [];
  for(let i=0;i<len;i++) {
    if(i in O) {
      let element = O[i];
      if (callbackfn.call(thisArg,O[i],i,O)) {
        res[resLen++] = element;
      }
    }
  }
  return res;
}

function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);