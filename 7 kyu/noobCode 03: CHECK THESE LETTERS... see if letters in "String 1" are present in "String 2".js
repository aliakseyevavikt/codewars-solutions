/*
https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

Description:
Write a function that checks if all the letters in the second string are present in the first one at least once,
 regardless of how many times they appear:

["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false
Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single
argument in the form of an array.
 */

function letterCheck(arr) {
    arr = arr.map(el => el.toLowerCase());
    for (let i = 0; i < arr[1].length; i++) {
        if (!arr[0].includes(arr[1][i])) return false;
    }
    return true;
}