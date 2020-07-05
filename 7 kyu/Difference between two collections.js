/*
https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript

Description:
Find the difference between two collections. The difference means that either the character is present
 in one collection or it is present in other, but not in both. Return a sorted set with difference.

The collections can contain any character and can contain duplicates.

For instance:

A = [a,a,t,e,f,i,j]

B = [t,g,g,i,k,f]

difference = [a,e,g,j,k]
 */

function diff(a, b) {
    let resA = a.filter(el => !b.includes(el));
    let resB = b.filter(el => !a.includes(el));
    return [...new Set(resA.concat(resB))].sort();
}