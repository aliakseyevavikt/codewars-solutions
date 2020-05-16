/*
https://www.codewars.com/kata/545a4c5a61aa4c6916000755/javascript

Description:
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of
the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
 */
var gimme = function (arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min && arr[i] !== max) return i;
    }
};

//version 2
var gimme = function (arr) {
    return arr.indexOf(+(arr.reduce((acc, el) => acc + el, 0)
        - Math.max(...arr) - Math.min(...arr)).toFixed(1));
};