/*
https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

Description:
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

Good Luck!!!
 */

function solve(n) {
    if (n % 10 !== 0) return -1;
    let b500 = Math.trunc(n / 500);
    n = n - b500 * 500;
    let b200 = Math.trunc(n / 200);
    n = n - b200 * 200;
    let b100 = Math.trunc(n / 100);
    n = n - b100 * 100;
    let b50 = Math.trunc(n / 50);
    n = n - b50 * 50;
    let b20 = Math.trunc(n / 20);
    n = n - b20 * 20;
    let b10 = Math.trunc(n / 10);
    return b500 + b200 + b100 + b50 + b20 + b10;
}