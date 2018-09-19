const Stack = function(initialValue) {
  this.storage = {};
  this.count = 0;
  if(initialValue) this.storage[this.count++] = initialValue;
};

Stack.prototype.size = function() {
  return this.count;
};

Stack.prototype.peek = function() {
  return this.storage[this.count - 1] ? this.storage[this.count - 1] : null;
};

Stack.prototype.push = function(...args) {
  args.forEach(value => {
    this.storage[this.count++] = value;
  });
  return this.storage[this.count - 1];
};

Stack.prototype.pop = function() {
  let popped = null;
  if(this.count) {
    popped = this.storage[--this.count];
    delete this.storage[this.count];
  }
  return popped;
};