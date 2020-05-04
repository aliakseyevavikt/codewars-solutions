/*
https://www.codewars.com/kata/5a04133e32b8b998dc000089

Description:
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and
 your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included.
More examples in the test cases.

Good luck!
 */

function solve(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) count++;
        }
        if (count === 0) temp.push(arr[i]);
    }
    return temp;
}


// version2

function solve2(arr2) {
    return arr2.filter((el, i) => arr2.slice(i + 1).every(el2 => el2 < el));
}