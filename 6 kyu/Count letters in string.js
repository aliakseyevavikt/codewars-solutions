/*
https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript

Description:
In this kata, you've to count lowercase letters in a given string and return the letter count in
 a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and
 'char' instead of string in Crystal.

Example:

letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
 */

function letterCount(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) obj[s[i]] = 1;
        else obj[s[i]]++
    }
    return obj;
}