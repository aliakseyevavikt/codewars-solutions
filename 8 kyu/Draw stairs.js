/*
https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/javascript

Description:
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in "I\n I\n I", or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
 */

function drawStairs(n) {
    let str = ''
    for (let i = 1; i < n; i++) {
        str += 'I\n' + ' '.repeat(i)
    }
    return str + 'I'
}

//version 2

function drawStairs(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str += ' '.repeat(i - 1) + 'I'
        if (i != n) str += '\n';
    }
    return str;
}