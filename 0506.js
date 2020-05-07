var funcs = [];
var object = {a:1,b:2,c:3};
for (let key in object) {
  funcs.push(function() {
    console.log(key);
  });
}
funcs[0]();   // 当使用 let 的时候输出 a 当使用 var 的时候输出的是 c  当使用 const 的
// 时候也是a  这是因为在for in 循环中 每次迭代不会修改已有的绑定，而是会创建一个新的绑定

/***
 * ES6 的let 和 const 
 * 变量作用域的提升，闭包的使用。
 * 
 * babel 编译
 */


/**
 * 模板字符串
 */

//  let arr = [{value:1},{value:2}];
//  let message = `
//   <ul>
//     ${arr.map((item) => {
//       return `
//       <li>${item.value}</li>
//       `
//     }).join('')}
//   </ul>
//  `;
//  console.log(message);
let x = 'Hi', y = 'Kevin';
var res = message`${x}, I am ${y}`;
console.log(res);

function message(literals,...values) {
  let result = '';
  for (let i=0;i < values.length;i++) {
    result += literals[i];
    result += values[i];
  }
  result += literals[literals.length -1];
  console.log(literals,values)
  return result;
}

// console.log(message(['','i m ','']),'likl','liuchao');