/*
https://www.codewars.com/kata/find-the-position

Description:
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

This kata is meant for beginners. Rank and upvote to bring it out of beta
 */

function position(letter) {
    let alph = ' abcdefghijklmnopqrstuvwxyz';
    return `Position of alphabet: ${alph.indexOf(letter)}`;
}