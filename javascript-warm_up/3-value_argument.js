#!/usr/bin/node
// Check if any arguments are passed to the script
if (process.argv[2] === undefined) {
  // If no arguments are passed, print 'No argument'
  console.log('No argument');
} else {
  // If arguments are passed, print the first argument
  console.log(process.argv[2]);
}
