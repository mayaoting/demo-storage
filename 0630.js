

// 使用Promise实现Ajax操作 对XMLHttpRequest 对象封装
// const getJSON = function(url) {
//   const promise = new Promise(function (resolve,reject){
//     const handler = function() {
//       if(this.readyState !== 4) {
//         return;
//       }
//       if(this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open('GET',url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept","application/json");
//     client.send();
//   });
//   return promise;
// }
// getJSON('D:/doExercise/demo-storage/posts.json').then(function(json) {
//   console.log('Contents:' + json)
// },function(error) {
//   console.error('出错了',error)
// })
// const p1 = new Promise(function(resolve,reject) {
//   setTimeout(() => reject(new Error('fail')),3000);
// })

// const p2 = new Promise(function(resolve,reject){
//   setTimeout(() => resolve(p1),1000);
// })

// p2.then(result => console.log(result))
//   .catch(error => console.log(error));

// Promise.prototype.finally = function (callback) {
//   let P = this.constructor;
//   return this.then(
//     value => P.resolve(callback()).then(() => value),
//     reason => P.resolve(callback()).then(() => {throw reason})
//   );
// };



// /**
//  * 将现有对象转为Promise对象 Promise.resolve()就起到了这个作用
// */


// // Generator 函数与Promised的结合 
// function getFoo() {
//   return new Promise(function (resolve,reject) {
//     resolve('foo');
//   });
// }

// const g = function * () {
//   try {
//     const foo = yield getFoo();
//     console.log(foo);
//   } catch(e) {
//     console.log(e);
//   }
// }

// function run (generator) {
//   const it = generator();
//   function go(result) {
//     if(result.done) return result.value;
//     return result.value.then(function(value) {
//       return go(it.next(value));
//     },function(error) {
//       return go(it.throw(error));
//     });
//   }
//   go(it.next());
// }

// run(g);
/**
 * 上面代码的Generator函数g 之中，有一个异步操作getFoo,它返回的就是一个Promise
 * 对象。函数run 来处理这个Promise对象，并调用下一个next方法
 */

 const f = () => console.log('now');
 (async () => f())();
 console.log('next');

//  const f = () => console.log('now');
// (async () => f())();
// console.log('next');

