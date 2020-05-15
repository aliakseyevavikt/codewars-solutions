/*
https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

Description:
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci
Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of
the previous two.

 */

function nthFibo(n) {
    let f1 = 0;
    let f2 = 1;
    let f3;
    for (let i = 3; i <= n; i++) {
        f3 = f2 + f1;
        f1 = f2;
        f2 = f3;
    }
    return n === 1 ? f1 : n === 2 ? f2 : f3;
}