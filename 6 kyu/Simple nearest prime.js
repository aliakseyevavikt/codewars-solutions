/*
https://www.codewars.com/kata/5a9078e24a6b340b340000b8/javascript

Description:
In this Kata, you will be given a number and your task will be to return the nearest prime number.

solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one.
solve(125) = 127
We'll be testing for numbers up to 1E10. 500 tests.

More examples in test cases.

Good luck!
 */

function solve(n) {
    if (prime(n)) return n;
    let max = n;
    let min = n;

    while (!prime(max)) {
        max++;
    }

    while (!prime(min)) {
        min--;
    }

    return max - n < n - min ? max : min;
}

function prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}