/*
https://www.codewars.com/kata/add-property-to-every-object-in-array

Description:
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer
should be set to null. The solution should work for array of any length.
 */

for (let i = 0; i < questions.length; i++) {
    questions[i].usersAnswer = null;
}