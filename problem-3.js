/*  
  Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.

*/

const array = [33, 50, 79, 78, 90, 101, 30];
// const elementsOfDividedBy10 = array.filter(number => number % 10 === 0);
// console.log(`All Ements of Dividibel by the 10:  ${elementsOfDividedBy10}`);

const elementsOfDividedBy10find = array.find(number => number % 10 === 0);
console.log(elementsOfDividedBy10find);