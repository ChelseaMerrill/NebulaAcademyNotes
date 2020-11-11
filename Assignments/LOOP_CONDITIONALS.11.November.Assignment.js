//November 11th Homework

// Part 1
 
let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2]

// Problem # 1
// Using the array above, create a function that loops through the array and return a new array with only the odd numbers
function OnlyOdd(param){
    let placeholder = []
   for (let i = 0; i < param.length; i++){
        if (param[i] % 2 === 1){
        placeholder.push(param[i])
        } 
    } return placeholder
}   
 console.log(OnlyOdd(numArray))
 //[ 9, 3, 101, 15, 3 ]

// Problem # 2
// Using the array above, loop through the array and COUNT the amount of even numbers that are in the array
function HowManyEvens (evenArray){
    let count = 0

    for (let i = 0; i < evenArray.length; i++){
        if (evenArray[i] % 2 === 0){
            count += 1
        }
    }
    return count
}
console.log(HowManyEvens(numArray))
//7
 
// Problem # 3
// Using the array above, create a function that loops through the array and adds every number that is inside the array. Return the total.
function addNumbers (parameter){
    let total = 0;

    for (let i = 0; i < parameter.length; i++){
        total += parameter[i]
    }
    return total 
}
 console.log(addNumbers(numArray))
 //215

// Part 2

// Problem # 4
// Create a function that accepts an array and a searchValue. This function will return true if the searchValue is an element in the array. Otherwise, it will return false. (do not use the built in .includes() method. This function should loop through the array!)
// Examples for problem #4 what the function invocation could look like:
// doesItInclude([40, 7, 8, 23, 43], 23) -> true
// doesItInclude(['kale', 'spinach', 'arugula'], 'iceberg') -> false
function DII (param, num1){
    for (let i = 0; i < param.length; i++){
        if (param.includes(num1)){
            return true
        }
    } 
    return false
}
 console.log(DII(['apple', 'orange', 'pear', 'grape'], 'grape'))
 //true

// Part 3

// Problem # 5
// Create a function that accepts an array.
// This function will return a new array with the elements in reverse order
function Reverse (arr){
    let newarr = []
    for (let i = arr.length -1; i >= 0; i--){
        newarr.push(arr[i])
    } 
    return newarr
}
console.log(Reverse(['apple', 'orange', 'pear', 'grape']))
//[ 'grape', 'pear', 'orange', 'apple' ]




// Part 4
let theArray = [3, 12, 1, 4, 25, 27, 11]
// Problem # 6
// Create a function that takes in a array of numbers.
// This function will return a new array with number that are NOT divisible by 3
function ArrayNotByThree (param){
    let total = []
    for (let i = 0; i < param.length; i++){
    if (param[i] % 3 > 0){
        total.push(param[i])
        }
    } return total 
} 
 console.log(ArrayNotByThree(theArray))
 //[ 1, 4, 25, 11 ]

// Problem # 7
// Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total

function divThree (divArr){
    let total = 0
    for (let i = 0; i < divArr.length; i++){
        if (divArr[i] % 3 === 0){
            continue
        }
        total += divArr[i]
    }
    return total 
}
console.log(divThree(theArray))
//41