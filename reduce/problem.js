/* 
1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.

*/

const people = [
    { name: "Abu Hanif", age: 20 },
    { name: "Abu Hanif", age: 15 },
    { name: "Abu Hanif", age: 22 }
]
let sum = 0;
for (let person of people) {
    sum += person.age;

}
console.log(`Using For Loop : ${sum}`);
// All Pepole Age sum using Reduce function.
const reduceSum = people.reduce((previus, current) => {
    console.log(previus, current.age);
    return previus + current.age;
}, 0);

console.log(`Sum of the people Arry Using Reduce Method: ${reduceSum}`);