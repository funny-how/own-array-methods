function MyArray(...arg) {
  for (let i = 0; i < arg.length; i++) {
    this[i] = arg[i];
  }

  Object.defineProperty(this, "length", {
    get: function () {
      return Object.keys(this).length;
    },
  });
}

MyArray.prototype.push = function (...arg) {
  if (arg) {
    for (let i = 0; i < arg.length; i++) {
      this[this.length] = arg[i];
    }
    return this.length;
  }
};
