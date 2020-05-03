/*
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

Description:
Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([2, 1, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).
 */

function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1];
    }
    return sum;
}

//version 2

function sumOfDifferences2(arr2) {
    return arr2.length > 1 ? Math.max(...arr2) - Math.min(...arr2) : 0;
}