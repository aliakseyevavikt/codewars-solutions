/*
https://www.codewars.com/kata/53573877d5493b4d6e00050c/solutions/javascript

Description:
Write a method that takes a sequence of objects with two keys each: country or state, and capital.
Keys may be symbols or strings

The method should return an array of sentences declaring the state or country and its capital.

 */

function capital(capitals) {
    let arr = [];
    for (let i = 0; i < capitals.length; i++) {
        let country = (capitals[i]['country']) ? capitals[i]['country'] : capitals[i]['state'];
        arr.push(`The capital of ${country} is ${capitals[i]['capital']}`);
    }
    return arr;
}