/*
https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

Description:
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
 */

function isSortedAndHow(arr) {
    let asc = 0, desc = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= arr[i + 1]) asc++;
        if (arr[i] >= arr[i + 1]) desc++;
    }
    return asc === arr.length - 1 ? "yes, ascending" : desc === arr.length - 1 ? "yes, descending" :
        "no";
}