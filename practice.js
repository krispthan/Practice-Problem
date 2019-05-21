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
    const wordLengths = arr.map((word) => {
        return word.length;
   })   


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

Math.max.apply(null, numberArr);
Math.min.apply(null,numberArr);
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
    const arrLength = arr.length;

    for(let i =0; i < arrLength; i++){
        for(let j = 0; i<arrLength; j++){//loop through the arrlength
            if(arr[j]  > arr[j +1]){// comparing adjacent items 
                //swap
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] = temp;
            }
       }
    }
    return arr;
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
    let convertString = str.split("/");//convert to string array
    const urlObj = {};//create an object
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
    let regexp = /^[A-Z]/;//check to see if each letter are capitalize
    if(regexp.test(word)){// test is a helper method that will search for a match between a regular expression and specificed string 
        capitalCounter++;  //if yes, increment the counter 
    }
    return capitalCounter;//return the counter
})

/*
correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations for
example: [ { num1: 3, num2: 3, op: '/', result: 3}, { num1: 12, num2: 4, op: '-', result: 8}, { num1: 2, num2: 3, op: '+', result: 5}, { num1: -5, num2: -2, op: '*', result: 10} ]
returns [ { num1: 12, num2: 4, op: '-', result: 8}, { num1: 2, num2: 3, op: '+', result: 5} ]
*/
    const correctArray = mathArray.filter((item) =>{
        const mathResult = doMath(item.num1, item.num2, item.operation);
        return mathResult === obj.results;//compare the math result with the item result
    })
     return correctArray;


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


/* Reverse in place */
function reverseInPlace(str){

        return str.split("  ").reverse().join(" ").split("").reverse().join();
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
    str === reverseStr ? true :false;
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
/*Array Chunk Given an array and chunk size, output the array in many subarray where each subarray is of length size
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


/*Capitalization Write a function that accepts a string. The function should captialize the first letter of each word in teh string and return the capitalize string
Ex: capitalize('a short sentence) => "A Short Sentence"
Pseudo Code:   
        for each word in the array :
        uppercase the first letter of the word 
        join the first letter with rest of string 
        push result into words array
        join word into a string and return it
*/

function capitalization(str){
    //make an empty arr "words"
    const words = [];
    //split the input string by spaces to get an array
    const splitBySpace = str.split(' ');
    for(let word of splitBySpace){//iterate through each word by space
       let changeCharacter = word[0].toUpperCase() + word.slice(1)//slice the word by index 1 
       words.push(changeCharacter)//push the result to words
    }
   return words.join(" ")// joining all the word together with the spaces
}
  
/*Alternate Solution :
create an empty string called "result" and capitalize the first character of the input string 
for each character in the string 
    -if the character to the left a space : capitalize it and add it to the resullt 
    -else add it to result*/

    function capitalize2(str){
        let result = str[0].toUpperCase();//create an empty string and capitalize the string
        for(let i= 1; i< str.length; i++){//iterate the string
            if(str[i-1] === ' '){//check the string of the character to the left and check if its a space " "
            let uppercaseString = str[i].toUpperCase();
            result += uppercaseString// add the string to the result 
         } else {
             result += str[i];// if theres no space in on the left side then just add the character from the string to the result
        }
    }
        return result;
    }
    /*Printing Steps Write a function that accepts a positive number N.
    The function should console.log each step with n levels using the # character. Make sure the steps have spaces on the right hand side
 */

    function steps(n){
        for (let row  = 0; row < n; row++){ // from 0 to n ( iterate through rows)
            let steps = []; // create an empty string "steps"
            for (let column = 0; column < n; column++){// iterate from 0 to n (iterate through column)
                if(column <= row){//check if the column is equal or less than row if so,
                    steps +='#' // add the "#" to the steps
                } else { 
                    steps =+ " "; // if not add " "
                }
            }
            console.log(steps);
        }
    }

    /*Alternative Solution: Recursive*/
    function steps2(n , row = 0, step = ''){
        if(n===row) {
            return;
        }
        if(n ===step.length){
            console.log(step);
            return steps2(n, row + 1, step);
        }
        if (step.length <= row){
            step += '#';
        } else {
            step += ' ';
        }
        steps2(n, row, step);
    }

    /*Find the Vowels used in a string . Vowles are the characters 'a', 'e', 'i', 'o', 'u'
    Ex: vowels(Hi! There )=> 3 */

    function vowels(str){
        let count = 0; // create a counter
        const checkLetters = ["a","e","i","o","u"];
        let lowercaseStr = str.toLowerCase();
        for (let char of lowercaseStr){//iterate through the vowels
            if (checkLetters.includes(char)){//check if the character is included in the checkLetters
                count++;
            }
        }
        return count;
    }

    /*Alternative Solution using RegEx */

    function vowels2(str){
       const matches = str.match(/[aeiou]/gi); // check to see if any of the characters matches
      return  matches ? matches.length : 0;// check to see if there are matches is true return matches.length or if false returns 0 
    }

    /*Write a function that accepts an integer N and returns NxN spiral matrix*/
    function matrixSpiral(n){
        const results = []; //create an empty array 
        for(let i =0; i< n; i++){
            results.push([]);
        }
        let counter = 1// create a counter
        let startCol = 0;//declare startCol initialize 0
        let endCol = n-1;
        let startRow= 0;
        let endRow = n -1;

        while(startCol <= endCol && startRow <= endRow){//as long as starCol is less or equal to endCol and startRow is less than or equal to endRow
            //top row 
            for (let i = startCol ; i <= endCol; i++){
                results[startRow][i]=== counter;
                counter++;
            }
            startRow++;
            //Right column
            for (let i = startRow; i<=endRow; i++){
                results[i][endCol] = counter;
                counter++;
            }
            endCol--;
            //Bottom Row
            for(let i = endCol; i >= startCol; i--){
                results[endRow][i] = counter;
                counter++;
            }
            endRow--;
            //startCol
            for(let i =endRow; i>=startRow; i--){
                results[i][startCol] = counter;
                counter++;
            }
            startCol++;
        }
        return results;
    }

    /*Fibonacci Print out the nth entry in the fibonacci series */
    function fibonacci (n){
        const initialNum = [0,1];
        for (let i = 2; i<= n; i++){//iterate through the nth length
            const a = initialNum[i -1];
            const b = initialNum [i-2];
            initialNum.push(a+b);
        }
        return initialNum[n];
}

    /*Alternative Solution Recursive*/
    function fibionacciRecursive(n){
        if(n <2){//get the base case first 
            return n;
        } 
        return fibionacciRecursive(n-1) +fibionacciRecursive(n-2);
    }

    /*We can use Memoization to increase performance by writing another memoization function */
    function memoize(fn){
        const cache = {}; 
        return function(...args){//passing in the all the arguments from the array 
            if(cache[args]){//check if any of the argument exits in the cache
                return cache[args];// if we have, then return the argument
            }
            const result = fn.apply(this, arg)//  use apply when we are calling the current function with the value of this and using the argument from the array 
                cache[args] = result; 
                return result;
        };
    }

    const fib = memoize(fibionacciRecursive);

    /*Create a Queue data structure: The queue should be a class with methods add and remove  */
    class Queue {
        //initialize an array and assign it to instance of a queue that was created
        constructor(){
            this.data = [];

        }
        add(record){
            this.data.unshift(record);
        }
        remove(){
            return this.data.pop();
        }
    }

    /*Check for factorial of a number*/
    function factorize(n){
        let output =[];//create an array 
        for(let i=1; i <=n; i++){//loop through the nth number length
            if(n %i ===0){//check if the current number is modulus of the current index if so push to the new array
                output.push(i);
            }
        }
        return output;
    }

    /*Find the Prime Number*/
    function isPrime(n){
        if(n< 2){//check if the number is less than 2 then return false Ex: 1 is not a prime number 
            return false;
        }
        for(let i=2; i<n; i++){//loop through the nth number length 
            if(n % i === 0){//check if the number modulus by current index is even return false, if not return true
                return false;
            }
        }
        return true;
    }

    /*Find the Prime Factors*/
    function checkPrimeFactors(n){
        let output = [];
        for(let i=2; i<=n;i++){//loop through the nth number length starting at i=2 since we know anything less than two is a prime 
            while((n%i) ===0){//while loop check the condition if n is modulus of current index is even, then presume
                output.push(i)//push the current index to output array
                n = n/i;// will replace the n with current number / current index to check for prime number
            }
        }
        return output;
    }


    /*Find the Greatest Common Denominator*/
    const gcd = function (num1,num2){
        let smaller = Math.min(num1,num2);//find the smallest of these two numbers
        let larger = Math.miax(num1,num2);//find the largest of these two numbers

        if(larger % smaller ===0){// check if the larger number is divisible by the smaller number evenly, if so,
        return smaller; //return smaller number
    } else {
        return gcd(smaller (larger % smaller)); // recursively call the function again , this time with the smaller remaining number and with the (larger % smaller Number)
    } 
}


/*Deleting Duplicates with two given arrays*/
let input1 =[1,2,3,4];
let input2=[1,2,3,4,5];

function deleteDuplicates(arr1,arr2){
    let combinedArr = [...arr1,...arr2];//using the spread operator to concatenate the two array into one big array
    let set  = new Set(combinedArr)// use the new Set() constructor to gather up all alike elements from array and remove them
    let newArr = [...set];//using the spread operator to join all the current elements from the original set back to an array
    return newArr;
}

/*Merge Sort Array */

let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];


function mergeSort(arr){
    if(arr.length < 2){// check if the arr length is smaller than 2 if so return arr
        return arr;
    }
    var middle = Math.floor(arr.length/2); //check for the middle elements in the array
    var left = arr.slice(0,middle);//check for the left elements in the array
    var right = arr.slice(middle);//check for the right elements in the array

    return helperMergeSort(mergeSort(left), mergeSort(right));// use the helper function to return the mergeSorted right and left elements
}

function helperMergeSort(left,right){
    let arr= [];//crate a new output

    while(left.length && right.length){// check the conditions length of the right and left side: 
        if(left[0] < right[0]){// if first element of the left side is smaller than right :
            arr.push(left.shift());// push it to the left front of the output array
        } else{
            arr.push(right.shift());// if not push the right element to the front of the array
        }
    }
    return arr.concat(left.slice().concat(right.slice())); // return the concatenation of array output and both left and right elements array
}

console.log(helperMergeSort(array.slice())); 

/*Sum of Two Array From an unsorted array , check whether there are any two numbers that will sum up a given number */
let input = ([6,4,3,2,12,2],5);
function sumArr(arr, sum){
    let arrLength = arr.length;// get the length of the arr
    for(let i = 0 ; i<arrLength-1; i++){//loop through the array starting from 0 index
        for(let j= i+1; j<arrLength; j++){// do a second inner loop through array starting at the adjacent element j = i+1
            if(arr[i] +arr[j] ===sum)// check if the sum of the first element and the second element in the array equals the sum 
             return true;//if so, return true
        }
    }
    return false;// if not , return false
}

/*Given an array, find the sum of the targeted value */
function findSum(arr,sum){
    let output= [];
        for(let i =0; i<arr.length; i++){
            for(let j=i+1; j< arr.length; j++){
                if(arr[j] === sum - arr[i]){
                    output.push([arr[i], arr[j]]);
                }
            }
        }
           return output;
        
}



/*Linter */
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let storyWord = story.split(" "); // splitting the word by space 

/*filter out unnecessary words in the story passage*/
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
const betterWords = storyWord.filter(word => !unnecessaryWords.includes(word));

/* Check how many times the words have been used  given the overused array*/
let overusedWords = ['really', 'very', 'basically'];
const overUsedWords = storyWord.every(word => {
    let tallyReally = 0;
    let tallyVery= 0;
    let tallyBasically = 0;
    if(word === 'really'){
        tallyReally = tallyReally+ word;
    } else if ( word = 'very'){
        tallyVery = tallyVery + word;
    } else if (word === 'basically'){
        tallyBasically = tallyBasically + word;
    }
    return {tallyReally, tallyVery, tallyBasically};
})
//  
let tallyReally = 0;
let tallyVery= 0;
let tallyBasically = 0;
for(word in storyWord){
    if(word === 'really'){
        tallyReally +=1;
    } else if ( word = 'very'){
        tallyVery +=1;
    } else if (word === 'basically'){
        tallyBasically +=1;
    }
}
// check how many sentences are in the paragraph
let sentenceCount = 0;
for (word of storyWord){
    if(word[word.length-1] == "." || word[word.length-1] ==='!'){
        sentenceCount += 1;
    } 
}

