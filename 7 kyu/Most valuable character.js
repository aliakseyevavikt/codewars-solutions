/*
https://www.codewars.com/kata/most-valuable-character

Description:
In this Kata, you will be given a string and your task is to return the most valuable character. The value of
a character is the difference between the index of its last occurrence and the index of its first occurrence.
Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
More examples in test cases. Good luck!
 */

function solve(st) {
    let obj = {};
    for (let i = 0; i < st.length; i++) {
        obj[st[i]] = st.lastIndexOf(st[i]) - st.indexOf(st[i]);
    }
    let maxKey = Object.getOwnPropertyNames(obj)[0];
    let max = obj[maxKey];
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            maxKey = key;
        }
    }
    let arr = [];
    for (let key in obj) {
        if (obj[key] === max) arr.push(key);
    }
    return arr.length < 1 ? maxKey : arr.sort()[0];
}