/*
https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript

Description:
In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that
 the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.
 */

function solve(arr) {
    const res = [];
    arr = arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length / 2 - 1; i++) {
        res.push(arr[i]);
        res.push(arr[arr.length - 1 - i]);
    }
    arr.length % 2 !== 0 ? res.push(arr[Math.trunc(arr.length / 2)]) : res.push(arr[arr.length / 2 - 1], arr[arr.length / 2]);
    return res;
};