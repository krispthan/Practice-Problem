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


/*findMode: Given an array of numbers, find the number that occurs the most often for example:
input [5,2,7,18,2,42,5,2]
returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one
Pseudo Code: 
make an object as number counter
loop through the object and check if the current number is present in the value 
if present then will increment 
if not then will be as "1"
return outputObj , repeat */
numberCounterArray = [5,2,7,18,2,42,5,2];
function findMost (arr){
    let outputObj = {};
    numberCounterArray.forEach((item) => {
        if(!outputObj[item]){
            outputObj[item] = 1;
        } else {
            outputObj[item]++;
        }
    })
    return outputObj;
  }

  /*
  getPath: given a path string, return an array with the different parts of the path for
example: 'folder1/folder2/folder3'
returns ['folder1','folder2','folder3']
Pseudo Code:
convert the string into an array by using split method
  */
 let example =  'folder1/folder2/folder3'
function ConvertStringArray(str){
    let convertString = str.split("/");
    const urlObj = {};
    urlObj.protocol = urlArray[0].slice(o, urlArray[0].length-1);
    const colonIndex = urlArray[2].indexOf(':');

    urlObj.host =urlArray[2].slice(0,colonIndex);
    urlObj.port =parseInt(urlArray[2].slice(colonIndex + 1));
    const pathArray = urlArray.slice(3, urlArray.length -1);
    const pathString = pathArray.join('/');
    urlObj.path = "/" + pathString;
    urlObj.file = url(urlArray.length -1);

}

/*getPathParts: Given a full URL string, break it up into parts in an object 


/*getCapitalCount: given an array of words, return a count of how many start with capital letters, For
example: ['it','will','not','Be','long','Till','we','Are']
returns: 3
Pseudo Code : 
create a counter for words that contains capital letters
Iterate through the array to check for a capital letter in the word:
conditional: check to see if at current letter is a capital letter
if letter is capital letter, then increment the counter 
if the word does not contain a capital letter, exit the loop
repeat*/

let wordSample = ['it','will','not','Be','long','Till','we','Are'];
const capitalWords = wordSample.map((word) => {
    let capitalCounter = 0;//create counter 
    let regexp = /^[A-Z]/;
    if(regexp.test(word)){
        capitalCounter++;  
    }
    return capitalCounter;
})

/*
correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations for
example: [ { num1: 3, num2: 3, op: '/', result: 3}, { num1: 12, num2: 4, op: '-', result: 8}, { num1: 2, num2: 3, op: '+', result: 5}, { num1: -5, num2: -2, op: '*', result: 10} ]
returns [ { num1: 12, num2: 4, op: '-', result: 8}, { num1: 2, num2: 3, op: '+', result: 5} ]
*/
function correctcalChecker (mathArray){
    const correctArray = mathArray.filter((item) =>{
        const mathResult = doMath(item.num1, item.num2, item.operation);
        return mathResult === obj.results;//compare the math result with the item result
    })
     return correctArray;
}

function doMath( num1,num2,operator){
    const operatorHandler = {
        '+' : () =>num1+num2,
        '-': () => num1-num2,
        '*': () => num1 * num2,
        '/': () => num1/num2
    };
    const result = operatorHandler[operator]();
    return result;
}

/*Char Converter :Given the following function call:
character_convert('the cat in the hat');
And the resulting output:
"11610410132999711632105110321161041013210497116"
Pseudo code: 
create a variable in the beginning so once the ascii characters are converted then append to the string
Iterate through the array and convert each letter in the array an ascii value
*/

let wordToConvert = ("the cat in the hat");
 function convertAscii(string){
     let result = '';
     for(let i =0; i<string.length; i++){
         let asciiValue = string.charCodeAt(i);   
         result += asciiValue;
     }
     return result;
}


/*Array factors 
Build a function that takes one array and finds all other elements of the array that are factors of its an element
Pseudo Code: 
write a function that takes one parameter (arr)
create an object for the final result
iterate through the array  and find the factor for each number
find the factor for each number 


*/
let arrayFactors=[4,2,8,6,3,9];
// output: { 4: [2], 2: [], 8: [4,2], 6: [2,3], 3: [], 9: [3] }
function Factor(arr){
    let factorObj = {};
    let remainder;
    for(let i = 0; i< arr.length; i++){//iterate through the array
        factorObj[arr[i]] = []//create the object key for each 
        for(let j = 0; j <arr.length; j++){//iterate through the individual numbers 
            if(arr[i] !== arr[j]){//check if the current index is equal or not equal to the inner number
                if(arr[i] % arr[j] === 0){//check if the current index is modular of the innner number
                    factorObj[arr[i]].push(arr[j]);//if so, take the obj that you have created and add that inner number to the object
                }
            }
        }
    }
    return factorObj;
}

/*Find all of the factors of a given number
Pseudo Code:
Create an empty array
Write a function that takes in a number 
create an array for output 
iterate through the number and check if the num is a modular of the number 
if so, push the number to a new array 

and find all factors of the number
then output it to a new array
*/
const factorOfNum = ((num) => {
    let result = [];
    for(let i = 0; i<= num; i++){
        if(num % i ===0){
            result.push(i);
        }  
    }
    return result;
})

/*Given an object with data for a person , generate a shipping label for them
input: [ { "familyName": "McGee", "givenName": "Chuckles", "greeting": "Miss.", "age": 28, "height": 165, "colors": { "eye": "green", "hair": "green" }, "home address": { "streetNumber": "12345", "streetName": "Any St", "state": "Mo", "zip": 63102, "city": "Kansas City" } } ]
return "Miss. Chuckles McGee\n12345 Any St\nKansas City, Mo 63102"
Pseudo Code: iterate through the list of object and access needed key/value pairs*/

const personInfo= [ { "familyName": "McGee", "givenName": "Chuckles", "greeting": "Miss.", "age": 28, "height": 165,
 "colors": { "eye": "green", "hair": "green" },
  "home address": { "streetNumber": "12345",
   "streetName": "Any St", "state": "Mo", 
   "zip": 63102, "city": 
   "Kansas City" } } ]

    function shippingLabel() {
        return  `${personInfo[0].greeting} ${personInfo[0].givenName} ${personInfo[0].familyName} ${personInfo[0]["home address"]["streetNumber"]}
        ${personInfo[0]["home address"]["streetName"]} ${personInfo[0]["home address"]["city"]}, ${personInfo[0]["home address"]["state"]} ${personInfo[0]["home address"]["zip"]}`
    }
    shippingLabel(personalInfo);

    /*Build a function, do_math, that takes in 3 parameters: num1 (number), num2 (number), and operator (string)
    */
   const DoMath = (num1,num2, operator) => {
    switch(operator){
        case  "-":
        return num1 - num2;
        case "+":
        return num1+num2;
        case "*":
        return num1 * num2;
        case "/" :
        return num1 / num2;
    }
   };
   
   /* random number in an array
   Pseudo Code: Create a random generate
  declare a variable with the array :
  -inside the array index we will be generating each of the indexes by the length of the array
*/
const num =[1,2,3,4,5,6,7,8,9,10];
const randomNumber = num[Math.floor(Math.random() * num.length)];
console.log(randomNumber);
  
