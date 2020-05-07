/*
https://www.codewars.com/kata/57ab2d6072292dbf7c000039/javascript

Description:
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
 */

function correctPolishLetters(str) {
    return str.replace(/ą/g, 'a').replace(/ć/g, 'c').replace(/ę/g, 'e')
        .replace(/ł/g, 'l').replace(/ń/g, 'n')
        .replace(/ó/g, 'o').replace(/ś/g, 's')
        .replace(/ź/g, 'z').replace(/ż/g, 'z')
}