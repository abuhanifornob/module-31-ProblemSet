/*    1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.   */

const oddNumbers = [1, 3, 5, 7, 9];
//Now Convert even arr using for loop.

const evenNumbers = [];
for (let i = 0; i < oddNumbers.length; i++) {
    evenNumbers.push(oddNumbers[i] + 1);
}
console.log(`Conver Even Numbers Using For Loop: ${evenNumbers}`);
// Conver Even Numbers Array Using Map method....
const evenNumbersMap = oddNumbers.map(number => number + 1);
console.log(`Convert Even Number Using Map Methos ${evenNumbersMap}`);