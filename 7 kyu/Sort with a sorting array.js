/*
https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript

Description:
Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size,
 and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
 */

function sort(initialArray, sortingArray) {
    let res = [];
    for (let i = 0; i < initialArray.length; i++) {
        res[sortingArray[i]] = initialArray[i];
    }
    return res;
}