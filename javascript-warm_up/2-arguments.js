#!/usr/bin/node
// If no arguments are passed to the script, print 'No argument'
if (process.argv.length === 2) {
  console.log('No argument');
} else if (process.argv.length === 3) {
  // If only one argument is passed to the script, print 'Argument found'
  console.log('Argument found');
} else {
  // Otherwise, print 'Arguments found'
  console.log('Arguments found');
}
