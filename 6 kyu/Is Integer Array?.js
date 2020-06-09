/*
https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

Description:
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.
 */

function isIntArray(arr) {
    if (!arr) return false;
    if (arr.length === 0) return true;
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isInteger(arr[i])) return false
    }
    return true;
}