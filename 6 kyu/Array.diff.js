/*
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

Description:
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns
the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

//version 1
function arrayDiff(a, b) {
    return a.filter(el => !b.includes(el));
}

//version 2

function arrayDiff(a, b) {
    let res = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            res.push(a[i]);
        }
    }
    return res;
}

//version 3

function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, 1);
                i--;
            }
        }
    }
    return a;
}