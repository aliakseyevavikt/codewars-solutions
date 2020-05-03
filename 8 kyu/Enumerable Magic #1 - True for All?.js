/*
https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript

Description:
Create a method all which takes an array and a predicate (function pointer), and returns true if the predicate
returns true for every element in the array. Otherwise, it should return false. If the array is empty, it should
return true, since technically nothing failed the test.
 */

function all(arr, fun) {
    return arr.every(fun);
}