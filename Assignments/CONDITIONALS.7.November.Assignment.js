// Problem #1
// Create a function that checks the type of the argument as well as if the argument is an array or not
// IF it is a string, return the string passed in as the argument
// IF it is a number, return the number passed in as the argument
// IF it is a boolean, return the boolean passed in as the argument
// IF it is an array, return the array passed in as the argument
function TypeArray (parameters){
    if (typeof(parameters) === 'string'){
        return `this is the string: ${parameters}`
    } if (typeof(parameters)==='number'){
        return `this is the number: ${parameters}`
    } if (typeof(parameters)=== 'boolean') {
        return `this is the boolean ${parameters}`
    } if (Array.isArray(parameters) === true){
        return `this is the array: ${parameters}`
    }
}
 console.log(TypeArray('hello'))
 //this is the string: hello
 console.log(TypeArray(['hi', 'hello', 'hey']))
 //this is the array: hi,hello,hey
 console.log(TypeArray(4))
 //this is the number: 4
 console.log(TypeArray(true))
 //this is the boolean true

// Problem #2
// Create a function that takes in 2 parameters: num1 and num2
// IF both of the numbers passed into the function as arguments are greater than 50, then return num1*num2
// IF both of the numbers are less then 50, add the two numbers : return num1+num2
// IF one of the numbers is greater than 50 and the other is less than 50, divide the two numbers: return num1/num2
function Fifty (num1, num2){
    if (num1 && num2 > 50) {
        return num1*num2
    } if (num1 && num2 < 50) {
        return num1 + num2
    } if (num1 || num2 < 50) {
        return num1 / num2}
    }
 console.log(Fifty(10, 16))
 //26
console.log(Fifty(100, 60))
//6000
console.log (Fifty(100, 5))
//105


// Problem #3
// Create a function that that takes in 2 parameters that are numbers.
// IF the first number divided by the second number has a remainder, return the string: 'the remainder if (num1) divided by (num2) is (remainder)
// IF there is no remainder, return the string: '(num1) divided by (num2) has no remainders'
function IsThereRemainder (number1, number2){
    if ((number1 % number2) >0) {
        return `the remainder of ${number1} divided by ${number2} is ${number1 % number2}`
    } else {
        return `${number1} divided by ${number2} has no remainders`
    }
}
 console.log(IsThereRemainder(100, 5))
 // 100 divided by 5 has no remainders

// Problem #4
// Create a function that takes in a string. This function will calculate the length of any string passed into this function.
// IF the length of the string is an odd number, return the string: 'the length of (string) is an odd number'
// IF it is an even number, return the string: 'the length of (string) is an even number'
function StringLength (string){
    if (string.length % 2 === 1) {
        return `the length of ${string} is an odd number`
    } else {
        return `the string of ${string} is an even number`
    }
}
 console.log (StringLength('is this string length even or odd?'))
 //the string of is this string length even or odd? is an even number

// Problem #5
// Create a function that takes in an array. This function calculates the length of the array.
// IF the length of the array is even, remove the last element of the array, add a new element at the beginning of the array and return the new array
// IF the length of the array is od, remove the first element of the array, add a new element to the end of the array and return the new array
function ArrayLength (array){
    if (array.length % 2 === 0){
        array.pop()
        array.unshift('even')
        return array
    } else { 
         array.shift()
        array.push('odd')
         return array
    }
}
console.log (ArrayLength(['apple', 'orange', 'peach', 'pear', 'plum']))
//[ 'orange', 'peach', 'pear', 'plum', 'odd' ]