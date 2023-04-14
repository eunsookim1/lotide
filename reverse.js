/**
 * Write a program that takes any number of command line arguments, all strings
 * and reverses them before outputting them one at a time to the console.
 
*/

const reverse = function(array) {
  let word = "";
  for (let i = array.length - 1; i >= 0; i--) {
    word += array[i];
  }
  // console.log(word);
  return word;
};


let args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
  reverse(args[i]);
}


module.exports = reverse;