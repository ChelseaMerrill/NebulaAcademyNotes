//Create a function that loops through any string passed into the function.
// Log every character in this string
// Once all characters are successfully logged, return the string, 'Done!'
function ItTheString (param){
    for (let i = 0; i < param.length; i++){
        console.log(param[i]) 
    } return 'Done!'
}
console.log(ItTheString('hello'))
//h
// e
// l
// l
// o
// Done!

// Create a function that takes in a number as a parameter.
// This function will log from 1- any number passed in this function as an argument
// After all numbers are successfully logged, return the string, 'Done!'
function NumPar(par){
     
        for (let i = 1; i <= par; i++){      
            console.log(i) 
        }
        return 'Done!'
    }
    console.log(NumPar(3))
// 1
// 2
// 3
// Done!

// Create a function that takes in an array as a parameter.
// This function will Loop/iterate through the array and log every element inside the array
// After all elements are logged, return the string, 'Done!'
function IterateArray (param){
    for (let i = 0; i < param.length; i++){
        console.log(param[i]) 
    } return 'Done!'
}
console.log(IterateArray(['hi', 'hello', 'hey']))
//hi
// hello
// hey
// Done!

// Create a function that takes in a string.
// This function will loop through the string and log the indices of each character in the string.
// After the indices are logged, return the string, 'Done!'
function StringCharacters (param){
    for (let i = 0; i < param.length; i++){
        console.log(i) 
    } return 'Done!'
}
console.log(StringCharacters('another string'))
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// Done!

// Create a function that only logs the even numbers from 1-10
// // After the even numbers are logged, return the string, 'Done!'
function EvenNum (){ 
    for (let i = 0; i <= 10; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    } 
    return 'Done!'
}
console.log(EvenNum())
//0
// 2
// 4
// 6
// 8
// 10
// Done!