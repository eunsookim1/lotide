// FUNCGION IMPLEMENTAION


const assertEqual = function(actual, expected) {

  let assertion = '';
  
  if (actual === expected) {
    assertion = "✅✅✅Assertion Passed: " + actual + " === " + expected;
     
  } else if (actual !== expected) {
    assertion = "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;
    
  }
  console.log(assertion);
  return assertion;
  
  
};



// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);



// If the values match, it should print (consol.elog) the following:
// Assertion Passed: [actual] === [expected] (but with the values filled in)

// Otherwise it should print (console.log) the following:
// Assertion Failed: [actual] !== [expected]