/*
https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167/train/javascript

Description:
Create a function that takes any sentence and redistributes the spaces (and adds additional spaces if needed) so that
each word starts with a vowel. The letters should all be in the same order but every vowel in the sentence should
 be the start of a new word. The first word in the new sentence may start without a vowel. It should return a string
  in all lowercase with no punctuation (only alphanumeric characters).

EXAMPLES 'It is beautiful weather today!' becomes 'it isb e a ut if ulw e ath ert od ay' 'Coding is great' becomes
 'c od ing isgr e at' 'my number is 0208-533-2325' becomes 'myn umb er is02085332325'
 */

// version 1
function vowelStart(str) {
    let vowels = 'aoeiu';
    let res = '';
    str = str.replace(/[\W_]/g, '').toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i]) || i === 0) {
            res += str[i];
        } else {
            res += ' ' + str[i];
        }
    }
    return res;
}

//version 2
function vowelStart(str) {
    return str.toLowerCase()
        .replace(/[\W_]/g, '')
        .replace(/[aouie]/g, x => ' ' + x)
        .trim();
}
