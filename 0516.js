/**
 * 实现一个normalize 函数 能将输入的特定字符串转换为特定的结构化数据
 * demo: 'abc' => {value:'abc'}
 *        '[abc,[ncb[efd]]]' => {value:'abc',children:{value:'ncb',children:{value:'efd'}}};
 */
function normalize( str) {
  let result = {};
  let c;
  let arr = str.split(/[\[\]]/g).filter(Boolean);
  arr.forEach((item,index) => {
    if(index != 0) {
      c.children = {};
      c.children.value = item;
      c = c.children;
    } else {
      result.value = item;
      c = result;
    }
  })
  return result;
}
let k = normalize('[abc[ncb[efd]]]')
console.log(k);

const normalize2 = (str) => {
  var result = {};
  // reduce(function (total,currentValue, currentIndex,arr),initialValue)
  // total 必需，初始值，或者计算结束后的返回值 currentValue  必需 当前元素 currentIndex ,可选当前元素索引
  //arr 可选 当前元素所属的数组对象 ， initialValue 可选 传递给函数的初始值
  str.split(/[\[\]]/g).filter(Boolean).reduce((obj,item,index,a) => {
    // a = ['abc','ncb','efd']
    obj.value = item;
    // 当 index 的值不等于 数组的长度-1时 添加 children
    if( index!== a.length -1) {
      return obj.children = {}
    }
  }, result)
  return result;
}
let g = normalize2('[abc[ncb[efd]]]')
console.log(g);

