/*
https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript

Description:
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john'])
#=> { 'james': 2, 'john': 1}
 */

function count(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]] === undefined) obj[array[i]] = 1;
        else obj[array[i]]++;
    }
    return obj;
}