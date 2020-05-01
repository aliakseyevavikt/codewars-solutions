/*
https://www.codewars.com/kata/569e09850a8e371ab200000b/javascript

Description:
This is the first step to understanding FizzBuzz.
Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
Your expected output is an array of positive integers from 1 to n (inclusive).
Your job is to write an algorithm that gets you from the input to the output.
 */

function preFizz(n) {
    let arr = [], i = 1;
    while (i <= n) {
        arr.push(i);
        i++;
    }
    return arr;
}