/*
https://www.codewars.com/kata/567bed99ee3451292c000025/train/javascript

Description:
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u),
and false otherwise.
 */

String.prototype.vowel = function () {
    return /^[aouei]$/i.test(this);
};