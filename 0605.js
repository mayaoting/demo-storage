// function foo() {
//   var a = 2;
//   function baz(){
//     console.log(a);
//   }
//   bar(baz);
// }
// function bar(fn) {
//   fn();
// }
// 闭包
// var fn;
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   fn = baz;
// }
// function bar() {
//   fn();
// }

// foo();
// bar();
/**
 * 模块模式
 * 通过模块实例的内部保留对公共API对象的内部引用，可以从内部
 * 对模块实例进行修改，包括添加和删除方法和属性，以及修改
 * 他们的值
 */
// var foo = (function CoolModule(id) {
//   function change() {
//     publicAPI.identify = identify2;
//   }
//   function add() {
//     publicAPI['name'] = 'hahhah';
//     // publicAPI.age = '12'
// console.log(publicAPI)

//   }
//   function identify1() {
//     console.log(id);
//   }
//   function identify2() {
//     console.log(id.toUpperCase());
//   }
//   var publicAPI = {
//     change:change,
//     identify:identify1,
//     add
//   }

//   return publicAPI;
// })('foo module');

// foo.identify();
// foo.change();
// foo.identify();
// foo.add();
// console.log(publicAPI)

/**
 * 事实上，javascript 并不具有动态作用域，它只有动态作用域
 */
// function foo(){
//   console.log(this.a);
// }

// function bar() {
//   var a = 3;
//   foo();
// }
// var a  =2;
// bar()

function foo(num) {
  var a = 2;
  bar();
}
function bar() {
  console.log(this.a)  // undefined
}
foo();
/**
 * this 是在运行时绑定的，并不是子编写时绑定，this 上下文取决于函数调用时的
 * 各种条件，this 的绑定和函数声明的位置没有任何关系，只取决于哈市农户的调用
 * 方式
 * 当一个函数被调用时，会创建一个执行上下文，
 */
