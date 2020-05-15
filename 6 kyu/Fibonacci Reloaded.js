/*

Description:

And here is Fibonacci again. This time we want to go one step further. Our fib() function must be faster! Can you do it?

In case you don't know, what the Fibonacci number is:

The nth Fibonacci number is defined by the sum of the two previous Fibonacci numbers. In our case: fib(1) == 0 and
fib(2) == 1. With these initial values you should be able to calculate each following Fibonacci number.

Examples:

fib(1) // === 0
fib(2) // === 1
fib(3) // === 1
fib(4) // === 2
fib(5) // === 3
 */

function fib(n) {
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