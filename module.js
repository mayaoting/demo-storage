var MyModule = (function Manage(){
  var module = {};
  function define(name,deps,impl) {
    for(var i=0;i<deps.length;i++) {
      deps[i] = module[deps[i]];
    }
    module[name] = impl.apply(impl,deps);
  }
  function get(name) {
    return module[name];
  }
  return {
    define:define,
    get:get
  }
})();
MyModule.define('bar',[],function() {
  function hello(who){
    return 'let me introduce: ' + who;
  }
  return {
    hello:hello
  }
});
MyModule.define("foo",["bar"],function(bar) {
  var hungry = 'hippo';
  function awesome() {
    console.log(bar.hello(hungry).toUpperCase());
  }
  return {
    awesome:awesome
  };
});

var bar = MyModule.get('bar');
var foo = MyModule.get('foo');
console.log(bar.hello('hippo'));
foo.awesome();
