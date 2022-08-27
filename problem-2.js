/*  
  2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. 

*/

const array = [33, 50, 79, 78, 90, 101, 30];
const elementsOfDividedBy10 = array.filter(number => number % 10 === 0);
console.log(`All Ements of Dividibel by the 10:  ${elementsOfDividedBy10}`);