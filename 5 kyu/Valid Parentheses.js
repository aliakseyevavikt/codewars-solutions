/*
https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript

Description:

Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.
 The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
 */

function validParentheses(parens) {
    while (parens.includes('()')) {
        parens = parens.replace('()', '');
    }
    return parens.length === 0;
}

function validParentheses1(parens) {
    let sum = 0;
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '()') {
            sum++;
        } else {
            sum--;
        }
        if (sum < 0) return false;
    }
    return sum === 0;
}