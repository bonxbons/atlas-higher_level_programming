#!/usr/bin/node
// If at least two arguments are passed to the script, print two arguments passed to it, in the format: ' is '
if (process.argv.length >= 4) {
  console.log(process.argv[2] + ' is ' + process.argv[3]);
} else if (process.argv.length === 3) { // If only one argument is passed to the script, print the first argument followed by " is undefined"
  console.log(process.argv[2] + ' is undefined');
} else { // If no arguments are passed to the script, print "undefined is undefined"
  console.log('undefined is undefined');
}
