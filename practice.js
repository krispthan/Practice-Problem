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

/*Reverse String
Given a string, return an ew string with the reversed order of characters
Pseudo Code:  convert the string into an array
then call the reverse method 
 turn it back into a string 
*/
let word = "happy";
function reverseString(str){
    let convertStr= str.split("");// takes the str and turns into an array
    convertStr.reverse();//reverse the str
    return convertStr.join("");//join all elements back into a string
}

/*alternate solutions without reverse Method :
Pseudo code: create an empty string called reverse
for each character in the string, take the character and add it to the start of the "reversed"
return the variable reversed*/

function reverseStr(str){
    let reversed = '';// create a temp string 
  for(let character of str) {//iterate through each character and then add it to the reversed;
      reversed = character + reversed;
  }
  return reversed; 
};

/*third solution using a helper
Pseudo code: take string convert into array 
call a reduce helper to condense the array into a single value 
*/
let words = "happy";
function reverseStr(str){
   return  str.split("").reduce((reversed, letter) =>
 letter + reversed
 , '');
};


/*Palindrome: Give a string, return true if the string is a palindrome or false if not 
Palindrome are strings that form the same word if it is reversed
Pseudo Code: Reversed the str by splitting the str and converting it into an array and then using the reversed method 
*/
// let word = ("abba");
function isPalindrome(str){
   const reverseStr = str.split("").reverse().join("");//reverse the str
    str === reversedStr ? true :false;
}
/*alternate solution using array helper
Pseudo Code: take a string and turn into array using split("");
then use a every() method to test whether all elements in the array */

function isPalindrome(str){
    return str.split("").every((character, i) =>{
        return character === str[str.length - i -1] ; 
    });
}


/*ReveseInt Given an integer, return an integer that is the reversed ordering of the number
Ex: 15 === 51 or 981===189
Pseudo Code: convert the number into a string .toString() method and then use the reversed method and join the string back
check if the int is positive or negative , if positive then return  parseInt() to convert string back to number, if negative then parseInt(the reversed number ) and multiply by -1  */
let myNum = 25;
function reverseInt(n){
    const numToString = n.toString().split("").reverse().join("");// reverse the number convert to string to reversed
   if(n < 0){
    return parseInt(numToString) * -1;
   }
   return parseInt(numToString); 
}

/*MaxChar Given a string, return the character that is most commonly used in a string
ex: ("aaaabbbbccccccccccd")= "c"
Pseudo Code: Take the string and convert into an object
Key: is the letter and value : number of times the letter appear */
 let string = "Hello There!"
function maxChar(str){
    const charObj = {};//create an obj;
    let max = 0; //use to compare the current highest frequency of characters
    let maxCharacter = '';//check the current character that has the highest 
    for(let character of str){//iterate through the string 
        if(charObj[character]){//create the obj during the iteration and check if the current index has the specific character , if yes, then increment it, if no then equal to 1 
            charObj[character]++;
        } else {
            charObj[character]=1;
        }
    }
    for(let character in charObj ){  //iterate through an object
      if(charObj[character]> max){//check if the current frequency is more than the max 
          max = charObj[character];
          maxChar = charObj;
      }
    }
    return maxCharacter;
};
 
/*FizzBuzz Write a problem that console logs the number from 1 to n. Multiples of three print fizz and multiples of five print buzz
Pseudo Code: loop to each number till reached nth length ,
check if each number is a multiple of 3 or 5 and both , if multiple of 3, print fizz , if multiple of 5, print buzz, if multiple of both print out fizzbuzz
*/

function fizzBuzz(n){
    for ( i= 1; i <=n; i++){//iterate through the number from 1 to nth length
        // check to see if the number a multiple 3 & 5 ?
        if (i % 15 === 0){
            console.log("fizzbuzz");
        } else if (i % 3 === 0){//check if the number is a multiple of 3
            console.log("fizz");
    } else if (i % 5 === 0){ // check if the number is a multiple of 5
        console.log("buzz");
    } else {
        console.log(i);
    }
  }
}
/*Array Chunk Given an array and chunk size, didie the array in many subarray where each subarray is of length size
Ex: chunk([1,2,3,4],2) => [[1,2],[3,4]];
Pseudo Code: Create an empty array to hold our data
    For each elements in the original array and iterate through it: - Retrieve the last element in chunked element
        if last element does not exits, or is its length is equal to the chunk size , then push a new chunk into chunked with curernt element
        else, add the current element into the chunk*/

        function arrayChunks(arr,size){
            const chunked = [];
            for (let element of arr){//iterate through the arr
                const lastElement = chunked[chunked.length-1]; //create a temp variable for the last element
                if(!lastElement || lastElement.length === size){
                    chunked.push([element]);// take the last element and push a new chunk into the chunked array
                } else {
                    lastElement.push(element);
                }
            }
            return chunked;
        }

        /*alternate solution */
        function arrChunk(arr,size){
            //create an empty array
            const output = [];
            //create "index" starting at 0, which will change over time 
            let index = 0;
            //while index is less than array.length:
            while (index < arr.length){
                output.push(arr.slice(index,index+size));// push the sliced array starting from the index and the index + number of size 
                index = index + size;   //add "size" to "index"
            }
            return output;
        }
          
/*Anagrams Check to see if two provided strings are anagrams of each other 
One string is an anagram of another if it uses the same character in the same quantity , only consider characters not spaces or punctuations
Consider capital letters to be the same as lowercase
Ex: anagrams ('rail saftey', fairy tales')=> true
*/

function anagrams(stringA, stringB){
    const aCharMap = buildCharacterMap(stringA);//create an obj to map through stringA
    const bCharMap = buildCharacterMap(stringB);//create an obj to map through stringB

    if(Object.keys(aCharMap).length != Object.keys(bCharMap).length){//compare the object keys for both stringA and stringB obj to check if the length is the same or not 
        return false;//if does not match, then return false
    } 
    for (let char in bCharMap){
        if(aCharMap[char] !==bCharMap[char]){
            return false;
        }
    }
    return true;
}

//create a helper function in order to create the two strings 
function  buildCharacterMap(str){
    const characterMap = {};
    const cleanedString = str.replace(/[^\w]/g,"").toLowerCase();
    for(let character of cleanedString){//iterating through the current string
        characterMap[character] +=1 || 1;
    }
    return characterMap;
}

/*Alternate Solution */

function anagrams(stringA,stringB){
    return cleanString(stringA) === cleanString(stringB)// to compare the two strings together 

}

//helper function -//replace both stringA & B to get rid of any spaces or punctuation and lowercase 
function cleanString (str){
    return str.replace(/[^\w]/g,"").toLowerCase().split("").sort().join("");// split this to turn this into an array in order to sort it and then join it back into a string 
}
