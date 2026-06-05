// TODO: Create a function that validates user input 
// TODO: Create a function that demonstrates multiple error types 
// TODO: Create a collection of helper functions for string manipulation 
// TODO: Create helper functions for array operations 

let userInput = "test string";
let greet = "               hi               yo               ";

function checkUserInput(string) {
    if (string === "" || string === null) {
        return "The input is empty";
    }
    return string;
}



function errorTypes(errorString) {
    try {
        console.log("Your input is fine")
    }
    catch(error){
        if (error instanceof TypeError) {
            throw new Error ("This is an example of TypeError");
        }
        else if (error instanceof SyntaxError) {
            throw new Error ("This is the example of SyntaxError");
        }
    }
};

function findLength(string) {
    return string.length;
}

function normalizeString(string) {
    if (typeof string !== 'string') {
        throw new Error ("Value entered is NOT A STRING");
    }
    return string.trim().replace(/\s+/g, ' ');
}

function getCharAtIndex(string, index) {
    let char = string.at(index);
    return char;
}

function findChar (string, letter) {
    let found = string.indexOf(letter);
    return found;
}



function joinTwoString(string1, string2) {
    return string1.concat(" ", string2);
}

console.log(findLength(userInput));
console.log(checkUserInput(userInput));
console.log(findChar(userInput, "s"));
console.log(normalizeString(greet));
console.log(joinTwoString("Today", "Tomorrow"));


//Array Functions

let numberArray = [1,2,3,4,5,6,7,8];
let wordArray = ["hello", "goodmorning", "Yo"]

function arrContains(array, value) {
  return array.includes(value);
}

function checkSum(arr) {
    let total = 0;
    for (let i = 0;i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(arrContains(numberArray, 3));
console.log(checkSum(numberArray));