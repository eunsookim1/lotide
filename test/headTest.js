const {assertEqual} = require('../assertEqual');
const head = require('../head');

const importedFunctions = require('../assertEqual');
const assertEqual1 = importedFunctions.assertEqual;



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([]), 5);
assertEqual1(head([]), 5);