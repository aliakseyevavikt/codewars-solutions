/*
https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

Description:
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible,
containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

function longest(s1, s2) {
    s1 = s1.concat(s2);
    let arr = [];
    for (let i = 0; i < s1.length; i++) {
        if (!arr.includes(s1[i])) arr.push(s1[i]);
    }
    return arr.sort().join('');
}