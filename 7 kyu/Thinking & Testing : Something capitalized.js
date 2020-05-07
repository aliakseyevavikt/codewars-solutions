/*
https://www.codewars.com/kata/thinking-and-testing-something-capitalized

Description:
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
 */

function testit(s) {
    return s.length === 0 ? '' : s.split(' ').map(el => el.slice(0, -1) + el[el.length - 1].toUpperCase()).join(' ');
}