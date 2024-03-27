#!/usr/bin/node
// If no arguments are passed to the script, print “No argument”
if (process.argv.length === 2) {
  console.log("No argument");
}
// Otherwise, print the first argument passed to the script
else {
  console.log(process.argv[2]);
}
