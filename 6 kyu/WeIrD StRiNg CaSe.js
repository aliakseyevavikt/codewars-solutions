/*
https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

Description:
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even
indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing
just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present
if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

 */

function toWeirdCase(str){
    let str2 = '';
    for (let i = 0; i < str.length; i+=2) {
        if (str[i] === ' ') {
            str2 += ' ';
            i--;
        } else {
            str2 += str[i].toUpperCase();
            (i+1 !== str.length)?
                str2 += str[i+1].toLowerCase(): str2 += ''
        }}
    return str2;
}

console.log(toWeirdCase('Weird string case'));
