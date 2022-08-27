/*
1.You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.

*/

const numbers = [1, 9, 17, 22];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`The Sum of the Elements of Array Using For Loop: ${sum}`);

// Add the all elemet of the array Using Reduce()

const summition = numbers.reduce((prev, next) => prev + next, 0);
console.log(`The sum of hte Element of array Using Reduce : ${summition}`);