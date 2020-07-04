/*
https://www.codewars.com/kata/554e4a2f232cdd87d9000038

Description:
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions"
 for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function
 with one side of the DNA (string, except for Haskell); you need to get the other complementary side.
  DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNAStrand ("ATTGC") // return "TAACG"

DNAStrand ("GTAT") // return "CATA"
 */

function DNAStrand(dna) {
    let res = '';
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') res += 'T';
        else if (dna[i] === 'T') res += 'A';
        else if (dna[i] === 'C') res += 'G';
        else res += 'C';
    }
    return res;
}

// with RegEx v1

function DNAStrand(dna) {
    function swap(char) {
        let str1 = 'ATCG';
        let str2 = 'TAGC';
        return str2[str1.indexOf(char)];
    }

    return dna.replace(/[ATCG]/g, swap);
}

// with RegEx v2

function DNAStrand(dna) {
    return dna.replace(/[ATCG]/g, char => 'TAGC'['ATCG'.indexOf(char)]);
}


function correct(string) {
    return string.replace(/[501]/g, char => 'SOI'['501'.indexOf(char)]);
}