/*
https://www.codewars.com/kata/5aa39ba75084d7cf45000008/train/javascript

Description:
Given that

f0 = '0'
f1 = '01'
f2 = '010' = f1 + f0
f3 = '01001' = f2 + f1
You will be given a number and your task is to return the nth fibonacci string. For example:

solve(2) = '010'
solve(3) = '01001'
More examples in test cases. Good luck!
 */

function solve(n) {
    let f0 = '0';
    let f1 = '01';
    let f2;
    let i = 2;
    while (i <= n) {
        f2 = f1 + f0;
        f0 = f1;
        f1 = f2;
        i++;
    }
    return n === 0 ? f0 : n === 1 ? f1 : f2;
}