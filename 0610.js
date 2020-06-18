function Parent1() {
  this.name = 'parent1';
}
function Child1() {
  Parent1.call(this);
  this.type = 'child';
}
console.log( new Child1)