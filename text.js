// name is called "parameter", or "argument"

const sayHello(name) {
  console.log(`Hello ${name}`);
}

const direBonjour = function(name) {
  console.log(`Bonjour ${name}`);
};


const functions = [];
const params = [];
functions.push(sayHello);
functions.push(direBonjour);

console.log(functions);

// 