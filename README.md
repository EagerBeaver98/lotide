# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eagerbeaver98/lotide`

**Require it:**

`const _ = require('@eagerbeaver98/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: compares 2 arrays and returns if they are the same
* `assertEqual`: compares 2 values and returns if they are the same
* `assertObjectsEqual`: compares 2 objects and returns if key value pairs are the same
* `countLetters`: returns the number of letters in a string
* `countOnly` counts number of specific letters defined by user in a string
* `eqArrays`: uesed by assertArraysEqual
* `eqObjects`: used by assertObjectsEqual
* `findKey`: returns keys of object
* `findKeyByValue`: return key of specific value in an object
* `flatten`: returns a single array of values from an array with 1 layer of subarrays
* `head`: returns first value in an array
* `letterPositions`: returns a string as an object with the letters and their indexes as key-value pairs
* `map`: returns new array of true values based on callback
* `middle`: returns middle value of an array, if even numbered array returns 2 values
* `tail`: returns array without index[0]
* `takeUntil`: returns array until callback is true
* `without`: removes values from array