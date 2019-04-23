/*sumArray: given an array of numbers, add up all the numbers for
example: [1,5,3,2,6]
returns 17
Pseudo Code: iterate through an array of nums starting from the front , add the first two indexes together 
grab the initial value and the total 
take the total and add the next index together */
 let num1 = [1,5,3,2,6]
 let sum = num1.reduce((total,num)=>{
     return total + num 
 });
 console.log(sum);

 /*getAllNamesShorterThan: Given an array of names and a value,
  return an array of only the names shorter than the given value for example:
  Pseudo Code:
iterate to the array //  for(let i =0; i< input.length; i++) 
iterate to each index of the array and count how many letters   for( let j = 0; j <input.length; j++) 
check to see if numbers of letters is less than the current index  
if less, then print out the new array
if not , skip , repeat*/
//use filter method 
let input = ['clyde','joe', 'sue', 'jerry', 'smith', 'christine'];
const greaterThan = input.filter((item) =>{
    if(item.length > 5 ){
        return item;
    }
})

console.log(greaterThan);

/*Fibonacci Sequence 
Pseudo Code: 
write a function that takes in one parameter and prints out the Fibonacci sequence
start with the first two indexes @ starting point Ex: 0+1 = 1, do not touch these two 
iterate through the array starting at the second indexes and go through the array until you reach (n+1)
inside the array take the original array and add the current (index[i-2] + index[i-1]), whatever number that equates to be 
will be the new number to go into the original array since we need to continue adding the 
second indexes with its neighbor indexes to get the next fibonacci number

take the total of the starting point and add it up with the next index a[i+1]= 1 + 1 = 2
repeat 
*/

 function Fibonacci(n){
    let input = [ 0, 1]
     for(let i= 2; i <  n+ 1; i++){
        input.push(input[i-2] + input[i -1])
     }
     return input[n];
 }
console.log(Fibonacci(4));//should output 3

/*CountOccurrences: Given an array of words and a separate word, count how many times 
a particular word given occurs with that array
Ex: input ["dog", "cat, "pig", "dog, "dog"], "dog"
returns 3
Pseudo Code:
create a counter
iterate through the  length of the array and check for each index if the word is equal to the checked word
if it equals, then add it to the counter and if not then get out of the loop
repeat
*/
let wordArr = ["dog", "cat", "cat", "dog" , "dog"]
function occurencesOfWords (input, word){
    let count = 0;
    for( let i = 0; i< input.length; i++){
        if(input[i] === word){
            count++;
        }
    }
    return count;
}
console.log(occurencesOfWords(wordArr,"cat"));