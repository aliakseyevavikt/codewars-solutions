/*
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

Description:
Write function avg which calculates average of numbers in given list.
 */

//version 1

function find_average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

//version 2
const find_average = array => array.reduce((acc, cur) => acc + cur, 0) / array.length;