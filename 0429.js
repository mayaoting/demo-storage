// 将数组扁平化，并去除其中的重复数据，最终得到一个升序且不重复的数组

// 测试用例  a = [[1,2,3],[3,4,5,5],[6,7,8,9,[11,12[12,13[14]]]],10]

//第一种方法
var a =  [[1,2,3],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10];
var arr = Array.from (new Set(a.toString().split(',').sort((a,b)=> {return a -b})));
console.log(arr);
// 第二种方法 数组的扁平化使用 flat() 方法 

var arr = Array.from(new Set(a.flat(Infinity).sort((a,b) => a -b )));


/***
 * 解析 ： 数组扁平化，先将数组使用 toString() 方法转为字符串， 然后使用 split(',')将字符串分割为一维数组,
 * 使用sort((a,b)=> a-b) 将数组从小到大排序， 然后使用 new Set() 将排序后的数组进行去重，得到的是对象，我们
 * 需要使用 Array.from() 将对象转化为数组。
 * flat() 方法会按照一个指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
 */

 /**
  * 什么是防抖和节流，有什么趋区别，怎么实现
  */


/**
 * 防抖： 动作绑定事件，动作发生后一定时间触发事件，在这段时间内，如果该动作又发生，则重新等待一定时间
 * 再触发事件。
 * 高频触发的事件，在指定的单位时间内，只响应最后一次，如果在指定时间再次触发，则重新计算时间
 */

function debounce(func,wait) {
  let timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func && func()
      // func.apply(this,argument)
    },wait);
  }
}
// 调用
document.querySelector('.btn').onclick = debounce(function() {
  console.log('-debounce-')
},1000);

/**
 * 节流： 动作绑定事件，动作发生后一段时间后触发事件，在这段时间内，如果动作又发生，
 * 则无视动作，直到事件执行完后，才能重新触发
 * 
 * 高频触发的事件，在指定的单位时间内只响应第一次，
 */

 function throttle(func,delay) {
   let timer = null;
   let startTime = Date.now();
   return function(...args) {
     const curTime = Date.now();
     const remaining = delay - (curTime - startTime);
     const context = this;
     clearTimeout(timer);
     if (remaining <=0 ) {
       func.apply(context,args);
       startTime = Date.now();
     } else {
       timer = setTimeout(func,remaining);
     }
   };
 }

 function thro(func,time) {
   let activeTime = 0;
   return () => {
     const current = Date.now();
     if (current - activeTime > time) {
       func.apply(this,arguments);
       activeTime = Date.now();
     }
   }
 }

 //调用 
 document.onscroll = thro(function() {
   console.log('-throttle-')
 },1000)

 /**
  * 获取屏幕或视口宽高
  */

function getViewportSize () {
  return {
    width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
  }
}

