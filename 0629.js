// 定义三种状态

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
  let self = this; // 缓存当前实例
  self.value = null;
  self.error = null;
  self.status = PENDING;
  self.onFulfilledCallback = [];   // 成功的回调
  self.onRejectedCallback = [];  // 失败的回调

  const resolve = (value) => {
    if(self.status !== PENDING) return;
    setTimeout(() =>{
      self.status = FULFILLED;
      self.value = value;
      self.onFulfilledCallback.forEach((callback) => callback(self.value))  // resolve时执行成功回调
    });
  };

  const reject = (error) => {
    if(self.status !== PENDING) return;
    setTimeout(() => {
      self.status = REJECTED;
      self.error = error;
      self.onRejectedCallback.forEach((callback) => callback(self.error)); // reject时执行的回调
    });
  };
  executor(resolve,reject);
}

function resolvePromise(bridgePromise, x, resolve, reject) {
  // 如果 x 是一个promise
  if(x instanceof MyPromise) {
    // 拆解这个promise 直到返回值不为promise为止
    if(x.status === PENDING) {
      x.then(y => {
        resolvePromise(bridgePromise, y, resolve, reject);
      },error => {
        reject(error);
      });
    } else {
      x.then(resolve,reject);
    }
  } else {
    // 非Promise 的话直接resolve 即可
    resolve(x);
  }
}
MyPromise.prototype.then = function(onFulfilled,onRejected) {
  let bridgePromise;
  let self = this;
  if(this.status === PENDING) {
    return bridgePromise = new MyPromise((resolve,reject) => {
      self.onFulfilledCallback.push((value) => {
        try {
          onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
          let x = onFulfilled(value);
          resolvePromise(bridgePromise, x, resolve, reject);
        } catch(e) {
          reject(e)
        }
      });
      self.onRejectedCallback.push((error) => {
        try {
          onRejected = typeof onRejected === "function" ? onRejected : error => { throw error };
          let x = onRejected(error);
          resolvePromise(bridgePromise, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      })
    })
  } else if (this.status === FULFILLED) {
    // 如果状态是fulfilled 直接执行成功回调，并将成功值传入
    return bridgePromise = new MyPromise((resolve, reject) => {
      try {
        // 状态变为成功，会有相应的 self.value
        let x = onFulfilled(self.value);
        // 暂时可以理解为 resolve(x)，后面具体实现中有拆解的过程
        resolvePromise(bridgePromise, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    })
  } else {
    // 如果状态是rejected 直接执行失败回调，并将失败原因传入
    return bridgePromise = new MyPromise((resolve, reject) => {
      try {
        // 状态变为失败，会有相应的 self.error
        let x = onRejected(self.error);
        resolvePromise(bridgePromise, x, resolve, reject);
      } catch (e) {
        reject(e);
      }
    });
  }
}
/**
 *  错误分析和冒泡处理 Promise.prototype.catch() 方法是.then(null,rejection)或.then(undefined,rejection)
 * 用于指定发生错误时的回调函数
*/
MyPromise.prototype.catch = function(onRejected) {
  return this.then(null,onRejected)
}

let fs = require('fs');
let readFilePromise = (filename) => {
  return new MyPromise((resolve,reject) => {
    fs.readFile(filename, (err,data) => {
      if(!err) {
        resolve(data);
      } else {
        reject(err);
      }
    })
  })
}

readFilePromise('D:/doExercise/demo-storage/txt.js').then(data => {
  console.log(data.toString());
  return readFilePromise('D:/doExercise/demo-storage/002.js');
}).then(data => {
  console.log(data.toString());
}).catch(err => console.log(err));