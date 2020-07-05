/*
https://www.codewars.com/kata/53697be005f803751e0015aa

Description:

Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers
 according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern
shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
 */

// with RegEx

function encode(string) {
    return string.replace(/[aeiou]/g, char => ' aeiou'.indexOf(char));
}

function decode(string) {
    return string.replace(/[12345]/g, num => ' aeiou'[num]);
}

// without RegEx

function encode(string) {
    let vowels = "aeiou";
    let arr = string.split('');
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = vowels.indexOf(arr[i]) + 1;
        }
    }
    string = arr.join('');
    return string;
}

function decode(string) {
    let arr = string.split('');
    let vowels = "aeiou";
    let numbers = "12345";
    for (let i = 0; i < arr.length; i++) {
        if (numbers.includes(arr[i])) {
            arr[i] = vowels[arr[i] - 1]
        }
    }
    string = arr.join('');
    return string;
}