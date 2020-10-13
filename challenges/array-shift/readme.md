# Shift an Array
A function that takes an array and a value and outputs a new array with the value inserted into the middle of array.

## Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
We knew that we wanted to find the middle index of the initial array, so we wanted to divide its length by 2 and then round that number up to an integer. Once we had this middle index we wanted to add the first half of the initial array to a new array, then add the new value to the new array, and then append the second half of initial array to the new array after this new value was included.


## Solution

- [link to code ](./array-shift.js)

![image](../../assets/arrayShift.jpg)