/*
https://www.codewars.com/kata/remove-first-and-last-character-part-two

Description:
This is a spin off of my first kata. You are given a list of character sequences as a comma separated string. Write
a function which returns another string containing all the character sequences except the first and the last ones,
separated by spaces. If the input string is empty, or the removal of the first and last items would cause the string
to be empty, return a null value.

 */

function array(arr) {
    const res = arr.split(',').slice(1, -1);
    return res.length < 1 ? null : res.join(' ');
}