/**
 *1、一下哪个会输出 ‘hello world’ 
 */
const myMap = new Map()
const myFunc = () => 'greeting'
myMap.set(myFunc,'hello world!')  
console.log(myMap.get('greeting')) // undefined
console.log(myMap.get(myFunc))   // hello world
console.log(myMap.get(() => 'greeting'))  //undefined
// 选项  A:1 B:2 C:2and3 D:Allofthem

/**
 * 解析：当通过 set方法添加一个键值对，第一个传递给set方法的参数将会是函数名，
 * 第二个参数将会是值，在这个case里面，键名为函数 ()=>'greeting',值为'hello word!'
 * myMap 现在就是{()=>'greeting'=>'hello world!}.
 * 1是错误的，因为键名不是'greeting' 而是()=>'greeting',3是错误的因为我们给get方法传递了一个新的函数，
 * 对象受引用影响。函数也是对象，因此两个函数严格上不等价，尽管他们相同，但是有两个不同的内存引用地址。
 * 
 */

 /*
  2、以下哪个操作会对对象person有副作用
 */

 const person = {
   name:'lydia hallie',
   address:{
     street:'100 Main st'
   }
 }

 Object.freeze(person)
 // 选项  A: person.name = 'Evan Bacon' B: delete person.address 
 //      C:person.address.street='101 Main st'  D:person.pet={name:'Mara'}

 /**
  * 解析：使用Object.freeze() 对一个对象进行冻结，不能对对象进行添加，修改，删除。
  * 然而，它近对对象进行浅冻结，意味着只有对象中的直接属性被冻结，如果是另一个Object,像case 中的 address
  * 中的属性没有冻结，仍然可以被修改
  */

  /**
   *3、 以下代码输出的是什么
   */

   const obj = {1:'a',2:'b',3:'c'}
   const set = new Set([1,2,3,4,5]);
   obj.hasOwnProperty('1');   // true
   obj.hasOwnProperty(1),    // true
   set.has('1')              // false
   set.has(1)                // true

/**
* 所有对象键(不包括Symbols)都会被存储为字符串，即使你没有给定字符串类型的键
* 这就是为什么 obj.hasOwnProperty('1') 也返回true
* 而上面的说法不适用于Set
*/

/**
 * 4、下面代码输出的是什么
 */

  const obj = {a:'one',b:'two',a:'three'}
  console.log(obj)  // {a:'three',b:'two'}

/**
* 解析：如果对象具有两个相同名称的键，则将前面的键代替。他仍将处于第一个位置，但具有最后指定的值
*/

/**
 * 5、函数参数变量的输出
 */

function sayHi(name) {
  return `Hi there,${name}`
}

console.log(sayHi())  // Hi there undefined
/**
 * 解析： 默认情况下，如果不给函数传参，参数的值将是 undefined 
 * 在ES6中我们可以使用默认参数覆盖此默认的undefined 例如
 * function sayHi(name:'lydia'){...}
*/

/**
* 6、下列输出什么
*/

function nums(a,b){
  if (a>b)
  console.log('a is bigger')
  else 
  console.log('b is bigger')
  return 
  a+b
}

console.log(nums(4,2))  //a is bigger undefined
/**
 * 解析： 自动分号插入
 * JavaScript 引擎会自动在return 后面插入； 所以不会执行到 a + b 返回 undefined
*/

function getAge(...args) {
  console.log(typeof args)    // 'object'
}
getAge(21)

/**
 * 解析： 扩展运算符{...args} 返回一个带参数的数组，数组是一个对象，因此 typeof args 返回Object
*/

/**
 * JavaScript 全局执行上下文为创建两个东西，；全局对象和this关键字
 */





