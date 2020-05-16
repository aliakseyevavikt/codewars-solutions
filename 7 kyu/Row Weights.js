/*
https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

Description:
Scenario
Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes
 into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers,
where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
 */

function rowWeights(array) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) sum1 += array[i];
        if (i % 2 !== 0) sum2 += array[i];
    }
    return [sum1, sum2];
}

//version 2

function rowWeights(array) {
    let sum1 = array.reduce((acc, el, i) => i % 2 === 0 ? acc + el : acc, 0);
    let sum2 = array.reduce((acc, el, i) => i % 2 !== 0 ? acc + el : acc, 0);
    return [sum1, sum2];
}

