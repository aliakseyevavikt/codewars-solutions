/*
https://www.codewars.com/kata/5703c093022cd1aae90012c9/javascript

Description:
Provided is a function find which accepts two parameters in the following order: array, element and returns the index
of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order
to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements
are unique.
 */

let find = (a, e) => (e = a.indexOf(e)) < 0 ? "Not found" : e;