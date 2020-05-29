/*
https://www.codewars.com/kata/566fc12495810954b1000030/train/javascript

Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n)
between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...)
the function taking n and d as parameters and returning this count.

#Examples:

n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1):
the numbers of interest are
1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
so there are 11 digits `1` for the squares of numbers between 0 and 2
 */

// long version

function nbDig(n, d) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        arr.push(i ** 2);
    }
    let count = 0;
    arr = arr.map(el => el + '');
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == d) {
                count++;
            }
        }
    }
    return count;
}

// with RegEx

function nbDig1(n, d) {
    let str = '';
    for (let i = 0; i <= n; i++) {
        str += i ** 2;
    }
    let reg = new RegExp(d, 'g');
    return str.match(reg).length;
}

//without RegEx

function nbDig2(n, d) {
    let str = '';
    for (let i = 0; i <= n; i++) {
        str += i ** 2;
    }
    return str.split('').map(el => el == d ? el : '').join('').length;
}