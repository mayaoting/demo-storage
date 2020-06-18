const arr = [
  {
  name:'tom',
  age:15
  },
  {
  name:'jack',
  age:18
  },
     {
  name:'tom',
  age:10
     }];
var hash = {};
const newarr =  arr.reduce(function(item, next) {
  hash[next.name] ? '' : hash[next.name] = true && item.push(next);
  return item
}, []);
console.log(newarr)