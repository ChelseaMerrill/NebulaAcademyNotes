// Q1:
let string = 'Nebula Academy'
// Create a function that checks to see if the letter 'a' exists in the string - if it does exist, return the string: 'The letter a exists in the string: (string)'
// If it does not exist, return the string: 'the letter a does not exist'
function IsThereA (string){
    if (string.indexOf('a') >= 0){
        return 'the letter a exists in the string'
    } else {
        return 'the letter a does not exist'
    }
}
 console.log(IsThereA(string))
 //the letter a exists in the string

// Q2:
// Create a function that checks to see if the argument passed into this function is an array or not. If it is an array, return the string: 'it's an array!'
// If it's not an array, return the string: 'It's not an array!'
function IsItArray (paramerter){
    if (Array.isArray(paramerter) === true) {
        return 'It\'s an array!'
    } else {
        return 'It\'s not an array'
    }
}
 console.log(IsItArray(['apple', 'orange', 'peach', 'plum']))
 //It's an array!

// Q3:
// Create a function that checks to see if any number passed into this function is an even number or an odd number.
// If the number is an even number, return the string: '(number) is an even number'
// If the number is an odd number, return the string: '(number) is an odd number'
function EvenOrOdd (number){
    if (number % 2 === 0){
        return `${number} is an even number`
    } else {
        return `${number} is an odd number`
    }
}
console.log(EvenOrOdd(25986340))
//25986340 is an even number
 

// Q4:
// Create a function that checks the data type of any argument passed into this function. If the argument is a number, return the string: 'it's a number'
// If the argument is a string, return the string: 'it's a string'
// If the argument is a boolean, return the string: 'it's a boolean'
function WhatIsDataType (param){
    if (typeof (param) === 'number') {
        return 'It\'s a Number'
    } if (typeof (param) === 'string'){
        return 'It\'s a String' 
    } if (typeof (param)=== 'Boolean') {
        return 'It\'s a Boolean'
    }
}
 console.log(WhatIsDataType(13)) //It's a Number
 console.log(WhatIsDataType('hello'))// It's a String

// Q5:
// Create a function that takes in two numbers as parameters: num1 and num2
// If num1 is greater than num2, return the string: '(num1) is greater than (num2)'
// If num1 is less than num2, return the string: (num1) is less than (num2)'
// And if num1 and num2 are equal to each other, return the string, '(num1) and (num2) are equal'
function Math (num1, num2){
    if (num1 > num2){
        return `${num1} is greater than ${num2}`
    } if (num1 < num2) {
        return `${num1} is less than ${num2}`
    } if (num1 = num2){
        return `${num1} and ${num2} are equal`
    }
}
console.log(Math(892, 2382))
//892 is less than 2382



