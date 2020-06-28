/**
 * new 被调用后做了三件事情
 * 1、让实例可以访问到私有属性
 * 2、让实例可以访问构造函数原型(constructor.prototype)所在原型链上的属性
 * 3、如果构造函数返回的结果不是引用数据类型
 * 
 * 
 * 
 * 新生成了一个对象
链接到原型
绑定 this
返回新对象
根据以上几个过程，我们也可以试着来自己实现一个 new

function create() {
  let obj = {}
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}
 */
function newFactory(ctor, ...args) {
  if(typeof ctor !== 'function') {
    throw 'newOperator function the first param must be a function';
  }
  let obj  = new Object();
  obj.__proto__ = Object.create(ctor.prototype);
  let res = ctor.apply(obj, ...args);
  let isObject = typeof res === 'object' && typeof res !== null;
  let isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;
};