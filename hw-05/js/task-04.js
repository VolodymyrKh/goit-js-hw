"use strict";

class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value = `${this._value}${str}`;
    // this._value += str; - тоже работает
  }

  prepend(str) {
    this._value = `${str}${this._value}`;
  }

  pad(str, callAfter, callBefore) {
    // this._value = `${str}${this._value}${str}`; - если так, то pad(str) и вызов builder.pad("="), console.log(builder.value);
    callAfter(str);
    callBefore(str);
  }
}

const builder = new StringBuilder(".");

console.log(builder.value);
// console.log(builder._value);

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=", builder.append.bind(builder), builder.prepend.bind(builder));
console.log(builder.value); // '=^.^='
