function num(str, v) {
  let arr = str.split('');
  let k=0;
  for(let i=0;i<arr.length;i++) {
    if(arr[i] === v){
      k++;
    }
  }
  return k;
}

console.log(num('aswer234454','4'));


var str=readline();
var t=readline();
function fun(str, v) {
  let arr = str.toLowerCase().split('');
  let k=0;
  for(let i=0;i<arr.length;i++) {
    if(arr[i] === v.toLowerCase()){
      k++;
    }
  }
  return k;
}
console.log(fun(str,t))