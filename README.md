# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eunsookim1/lotide`

**Require it:**

`const _ = require('@eunsookim1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: the function returns the first value from the array but returns undefined if the array is empty.

* `tail()`: the function returns last element of the array but returns an empty array if the array has one or less item.

* `middle()`: the function returns an array with only the middle elements of the provided array. If Arrays with one or two elements, there is no    middle, return an empty array.

* `countLetters()`: the function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `countOnly()`: this function should take in a collection of items and return counts for a specific subset of those items.

* `findKey()`: function that takes in an object and callback and returns the first key that meets the criteria specified in callback.

* `findKeyByValue()`: function that takes in an object and a value and returns the first key that corresponds to that value.

* `flatten()`: function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

* `letterPositions()`: function that takes in a string and returns all indices of letter positions in the string.

* `map()`: function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.

* `takeUntil()`: function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

* `without()`: function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.