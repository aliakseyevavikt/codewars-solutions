/*
https://www.codewars.com/kata/57be674b93687de78c0001d9/train/javascript

Description:

Given a positive integer N, return the largest integer k such that 3^k < N.

For example,

largest_power(3) == 0
largest_power(4) == 1
You may assume that the input to your function is always a positive integer.
 */

function largestPower(n) {
    let pow = 0;
    while (3 ** pow < n) {
        pow++;
    }
    return pow - 1;
}