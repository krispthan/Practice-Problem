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
