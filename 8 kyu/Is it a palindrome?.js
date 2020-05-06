/*
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

Description:
Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay")  ; returns #t
 */

function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}