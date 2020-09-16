/*
https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

Description:
Write a method sum (sum_array in python, sum array in julia, SumArray in C#) that takes an array of numbers and returns
the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell.
The numbers can also be negative. If the array does not contain any numbers then you should return 0.

Examples
numbers = [1, 5.2, 4, 0, -1]
puts sum(numbers)
9.2
 */

function sum(numbers) {
    "use strict";
    return numbers.reduce((acc, cur) => acc + cur, 0);
}