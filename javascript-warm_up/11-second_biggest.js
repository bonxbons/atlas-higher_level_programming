#!/usr/bin/node

const numbers = process.argv.slice(2).map(Number).sort((a, b) => b - a);

if (numbers.length <= 1) {
  console.log(0);
} else {
  console.log(numbers[1]);
}

