/*
https://www.codewars.com/kata/5857e8bb9948644aa1000246/train/javascript

Description:
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
But he has only 24 hours left. Can he do it?
Your job is to determine if Santa can distribute all the presents in 24 hours.

Your Task:
You will get an array as input with time durations as string in the following format:
"hh:mm:ss"

Each duration is a present Santa has to distribute.

Return true or false whether he can do it in 24 hours or not.
 */

function determineTime(durations) {
    let time = 0;
    for (let i = 0; i < durations.length; i++) {
        let temp = durations[i].split(':');
        time += +temp[0] * 3600 + +temp[1] * 60 + +temp[2];
    }
    return time <= 24 * 3600;
}