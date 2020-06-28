// addListener, removeLitener,once,removeListener,emit

function EventEmitter() {
  this.events = new Map();

}
//  once参数表示是否只触发一次
const wrapCallback = (fn,once = false) => ({
  callback:fn,once
});

EventEmitter.prototype.addListener = function (type,fn,once = false) {
  let handler = this.events.get(type);
  if(!handler) {
    // 为type事件绑定回调
    this.events.set(type,wrapCallback(fn,once));
  } else if (handler && typeof handler.callback === 'function') {
    // 目前 type 事件只有一个回调
    this.events.set(type,[handler,wrapCallback(fn,once)]);
  } else {
    // 目前type回调数 >= 2
    handler.push(wrapCallback(fn,once));
  }
}

EventEmitter.prototype.removeListener = function (type,listener) {
  let handler = this.events.get(type);
  if(!handler) return;
  if(!Array.isArray(handler)) {
    if(handler.callback === listener.callback) this.events.delete(type);
    else return;
  }
  for (let i=0;i<handler.length;i++) {
    let item = handler[i];
    if(item.callback === listener.callback) {
      // 删除该回调，注意数组的塌陷问题，既后面的元素会往前挪一位，i要 --
      handler.splice(i,1);
      i--;
      if(handler.length === 1) {
        // 长度为1就不用数组存了
        this.events.set(type,handler[0]);
      }
    }
  }
}

/**
 * once 实现思路，先调用addListener 添加once 标记的回调对象，然后在emit的时候
 * 遍历回调列表，将标记了once:true的项remove掉即可
 */
EventEmitter.prototype.once = function (type,fn) {
  this.addListener(type, fn, true);
}

EventEmitter.prototype.emit = function(type, ...args) {
  let handler = this.events.get(type);
  if(!handler) return;
  if(Array.isArray(handler)) {
    handler.map(item => {
      item.callback.apply(this, args);
      // 标记的once:true的项直接移除
      if(item.once) this.removeListener(type, item);
    })
  } else {
    //只有一个回调函数则直接执行
    handler.callback.apply(this, args);
  }
  return true;
}

EventEmitter.prototype.removeAllListener = function(type) {
  let handler = this.events.get(type)
  if(!handler) return;
  else this.events.delete(type);
}

let e = new EventEmitter();
e.addListener('type',() => {
  console.log('type事件触发！');
})
e.addListener('type',() => {
  console.log('!! type 事件又触发了');
})
function f() {
  console.log('type 事件我只触发一次');
}
e.once('type',f);
e.emit('type');
e.emit('type');
e.removeAllListener('type');
e.emit('type');