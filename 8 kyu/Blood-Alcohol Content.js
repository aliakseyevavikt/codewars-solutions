/*
https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript

Description:
Bob drinks too much, and he gets in trouble for it a lot. He drinks so much, in fact, that he has broken
the local law enforcement's breathalizer with his alcoholic breath! Bob feels simply aweful, so he wants
to make up for it by creating a function that will calculate his blood-alcohol level for them. Unfortunately,
Bob has gotten too inebriated to do any programming today, so he needs your help!

He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.

BAC calculator Formula:

BAC% = (A × 5.14 / W × r) - .015 × H

A: Total alcohol consumed, in ounces (oz)
W: Body weight, in pounds (lbs)
r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
H: Time passed since drinking, in hours
 */

function bloodAlcoholContent(drinks, weight, sex, time) {
    sex = sex === 'male' ? 0.73 : 0.66;
    return +((drinks.ounces * drinks.abv * 5.14 / weight * sex) - 0.015 * time).toFixed(4);
}