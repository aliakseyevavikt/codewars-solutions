/*
https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript

Description:
Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value.
 Output should be the length of the longest word, as a number.

There will only be one 'longest' word.
 */

function findLongest(str) {
    return Math.max(...str.split(' ').map(el => el.length));
}