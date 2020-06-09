/*
https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

Description:
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that
 is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once
 in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return
 the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
 */

function firstNonRepeatingLetter(s) {
    let temp = s.toLowerCase().split('');
    temp = temp.filter(el => temp.indexOf(el) === temp.lastIndexOf(el));
    if (temp.length === 0 || s === '') return '';
    else {
        return s.includes(temp[0]) ? temp[0] : temp[0].toUpperCase();
    }
}