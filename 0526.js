/**
 * JSONP原理 虽然XMLHttpRequest对象遵循同源政策但是script标签不一样
 * 它可以通过src填上目标地址从而发出GET请求，实现跨域请求并拿到响应。
 * 
 */
// 客户端封装的 jsonp
const jsonp = ({url,params,callbackName}) => {
  const generateURL = () => {
    let dataStr = '';
    for(let key in params) {
      dataStr += `{${key} = ${params[key]}&}`;
    }
    dataStr += `callback=${callbackName}`;
    return `${url}?${dataStr}`;
  };
  return new Promise((resolve,reject) => {
    // 初始化回调函数名称
    callbackName = callbackName || Math.random().toString.replace(',','');
    // 创建script 元素并添加到当前文档中
    let scriptEle = document.createElement('script');
    scriptEle.src = generateURL();
    document.body.appendChild(scriptEle);
    //绑定到window上，为了后面调用
    window[callbackName] = (data) => {
      resolve(data);
      document.body.removeChild(scriptEle);
    }
  })
}

// 服务端的设置 以express 为例

let express = require('express');
let app = express()
app.get('/',function(req,res){
  let {a,b,callback} = req.query
  console.log(a);
  console.log(b);
  res.end(`${callback}('数据包')`)
})
app.listen(3000);

// 前端调用

jsonp({
  url:'http://localhost:3000',
  params:{
    a:1,
    b:2
  }
}).then(data => {
  console.log(data);
})