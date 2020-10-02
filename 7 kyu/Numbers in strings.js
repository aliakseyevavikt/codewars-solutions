/*
https://www.codewars.com/kata/59dd2c38f703c4ae5e000014/train/javascript

Description:
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare
the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!

Please also try Simple remove duplicates
 */

//version 1
function solve(s) {
    return Math.max(...s.replace(/[a-z]/g, ' ').split(' '));
};

//version 2
function solve(s) {
    return Math.max(...s.match(/\d+/g));
};