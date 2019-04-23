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


/*WordLengths 
Given an array of words, return an array of num representing the length of each word 
Pseudo Code: 
Iterate  through the word and map through each iteration and return the length of each
Ex: input ['canary','silly','dog','a','mellow'])
return [6,5,3,1,6]*/

 wordsArr= ['canary','silly','dog','a','mellow'];
function wordLength (arr){
    const wordLengths = arr.map((word) => {
        return word.length;
   })   
     return wordLengths;
}

/*getMinMaxMean: given an array of numbers, get the minimum, maximum, and mean numbers. 
Return them as an object. 
Mean is another word for average For example:
input [3,1,9,12,4]
return: {min: 1, max: 12, mean: 25.8}*/
//Mean:
numberArr = [3,1,9,12,4];

function Average (index){
    let total = 0;
    for(let i =0 ; i< index.length; i++){
        total += index[i];
        
    }
    let average = total / index.length;
    return average; 
}
console.log(Average(numberArr));
/* find the last element of the array since we are going to only iterate through the second index to the last array
then create a swap variable to check if the swap condition is true
create a do loop and change the swap variable to false
iterate through the loop to the second to the last index of the array 
check the current index with the next index and create a temp variable
set the temp variable to the current index
set the current index with the next index
set the next index to the temp variable
change the swap condition to be true 
get out of the do loop and check while the swap is equal to true 
*/
function BubbleSort(arr){
    let arrLength = arr.length -1;
    let swapped;
    do {  
        swapped= false;
        for( let i = 0 ; i <arrLength; i++){
            if(arr[i] > arr[i +1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] =temp;
                swapped = true;
            }
        }
    }
    while (swapped === true);
  
}
console.log(numberArr);