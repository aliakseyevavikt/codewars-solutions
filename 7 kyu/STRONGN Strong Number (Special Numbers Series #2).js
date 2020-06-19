/*
https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

Description:
Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example: 145, since
1! + 4! + 5! = 1 + 24 + 120 = 145
So, 145 is a Strong number.

Task
Given a number, Find if it is Strong or not.
 */

function strong(n) {
    let str = n.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let j = 1, fact = 1;
        while (j <= +str[i]) {
            fact *= j;
            j++;
        }
        sum += fact;
    }
    return sum === n ? "STRONG!!!!" : "Not Strong !!";
}