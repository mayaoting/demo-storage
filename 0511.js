// 双重循环去重

function unique(array) {
  var res = [];
  for(var i=0,arrlen = array.length; i<arrlen;i++) {
    for(var j=0,reslen = res.length;j<reslen;j++) {
      if(array[i] === res[j]) {
        break;
      }
    }
    if(j === reslen) {
      res.push(array[i]);
    }
  }
  return res;
}

var k = unique([1,4,5,6,7,8,2,3,4,5])
console.log(k);
/**
 * 迭代器： 所谓迭代器就是 一个具有 next()对象的方法每次调用next()都会返回一个结果对象
 * 该对象结果有两个属性 ， value表示当前值 done表示遍历是否结束。
 * 下面是一个 ES5 实现迭代器的原理
 */

 function createrIterator(items) {
   var i=0;
   return {
     next:function() {
       var done = i >= items.length;
       var value =  !done ? items[i++] : undefined;
       return {
         value:value,
         done:done,
       }
     }
   }
 }
 var iterator = createrIterator([1,2,3]);
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())
 console.log(iterator.next())

/**
* 原生具备 Iterator 接口的数据结构有 
*  Array Map Set String TypedArray 函数的 arguments 对象 NodeList 对象  
* 即不需要任何处理  就可以被 for ... of 循环遍历
* 
* 模拟实现 for of 
* 基本就是通过Symbol.iterator属性获取迭代器对象，然后使用 while遍历一下
*/

function forOf(obj,cb) {
  let iterable,result;
  if(typeof obj[Symbol.iterator] !== 'function')
    throw new TypeError(result + 'is not iterator');
  if(typeof cb !== 'function') throw new TypeError('cb must be callable');
  iterable = obj[Symbol.iterator]();
  result = iterable.next();
  while(!result.done) {
    cb(result.value);
    result = iterable.next();
  } 
}


