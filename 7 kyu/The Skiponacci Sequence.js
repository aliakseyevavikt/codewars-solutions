/*
https://www.codewars.com/kata/580777ee2e14accd9f000165/train/javascript

Description:
Your task is to generate the Fibonacci sequence to n places, with each alternating value as "skip". For example:

"1 skip 2 skip 5 skip 13 skip 34"

Return the result as a string

You can presume that n is always a positive integer between (and including) 1 and 64.
 */

function skiponacci(n) {
    if (n === 1) return '1';
    const arr = [1, 1];
    for (let i = 3; i <= n; i++) {
        arr[i - 1] = arr[i - 2] + arr[i - 3];
    }
    return arr.map((el, i) => i % 2 !== 0 ? el = 'skip' : el).join(' ');
}