// for (let i = 1; i <= par; i++)
//for = for loop
// i = iterates
//1st is where you are starting
//2nd is where you are ending (if you use <= then you have to use the -1 version but if you just use < you can just end it with the length)
//3rd is what you do in between

// Logining Indicies
// function StringCharacters (param){
//     for (let i = 0; i < param.length; i++){
//         console.log(i) 
//     } return 'Done!'
// }
//console.log(StringCharacters('hey"))
    //0
    //1
    //2
    //Done!


// PRACTICE PROBLEMS 

// //  given an array of numbers: 
// let numArray = [12, 3, 5, 12, 5, 23, 8, 4] 
// // create a function that iterates through the array and log each element
// function ItNumArray (array){
//     for (let i = 0; i < array.length; i++){
//         console.log(array[i]) 
//     } return 'done with array'
// }
// console.log(ItNumArray(numArray))
// //12
// // 3
// // 5
// // 12
// // 5
// // 23
// // 8
// // 4
// // done with array


// // given a string: 
// let string = 'software decelopment'
// // create a function that iterates through the string and log each chracter 
// function ItTheString (param){
//     for (let i = 0; i < param.length; i++){
//         console.log(param[i]) 
//     } return 'done with the string'
// }
// console.log(ItTheString(string))
// //s
// // o
// // f
// // t
// // w
// // a
// // r
// // e
 
// // d
// // e
// // c
// // e
// // l
// // o
// // p
// // m
// // e
// // n
// // t
// // done with the string

//_____________________________________________
// PRACTICE PROBLEMS 

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// add all of the numbers in the array
function AddNum (param){
    let total = 0
    for (let i = 0; i < param.length; i++){
        total += param[i]
    } return total
}
console.log(AddNum(array))
//45

// add only the odd numbers in the array
function OnlyOdd (parameter){
    let total = 0
    for (let i = 0; i < parameter.length; i++){
        if (parameter[i] % 2 ===1){
            total += parameter[i]
        }
    } return total
}
console.log(OnlyOdd(array)) 
//25

// count how many numbers are even in the array

// add the numbers that are NOT divisible by 3

