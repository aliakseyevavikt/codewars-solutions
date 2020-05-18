/*
https://www.codewars.com/kata/566c3f5b9de85fdd0e000026/train/javascript

Description:
Raj was to move up through a pattern of stairs of a given number (n). Help him to get to the top using
 the function stairs.

##Keep in mind :

If n<1 then return ' ' .
There are a lot of spaces before the stair starts except for pattern(1)
##Examples : pattern(1)

      1 1
pattern(6)

                      1 1
                  1 2 2 1
              1 2 3 3 2 1
          1 2 3 4 4 3 2 1
      1 2 3 4 5 5 4 3 2 1
  1 2 3 4 5 6 6 5 4 3 2 1
pattern(12)

                                              1 1
                                          1 2 2 1
                                      1 2 3 3 2 1
                                  1 2 3 4 4 3 2 1
                              1 2 3 4 5 5 4 3 2 1
                          1 2 3 4 5 6 6 5 4 3 2 1
                      1 2 3 4 5 6 7 7 6 5 4 3 2 1
                  1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
              1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
          1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1
      1 2 3 4 5 6 7 8 9 0 1 1 0 9 8 7 6 5 4 3 2 1
  1 2 3 4 5 6 7 8 9 0 1 2 2 1 0 9 8 7 6 5 4 3 2 1
 */

function stairs(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str += ' '.repeat(n * 4 - 2 - (i * 4 - 2));
        for (let j = 1; j <= i; j++) {
            str = (j < 10) ? str + j + ' ' : str + j % 10 + ' ';
        }
        for (let j = i; j >= 1; j--) {
            if (j < 10) str = (j !== 1) ? str + j + ' ' : str + j;
            else {
                let temp = j % 10;
                str += temp + ' ';
            }
        }
        if (i !== n) str += '\n';
    }
    return str;
}

console.log(stairs(12));