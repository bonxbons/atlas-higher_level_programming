#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};

const updatedObject = { ...myObject, value: 89 };

console.log(myObject);
console.log(updatedObject);

