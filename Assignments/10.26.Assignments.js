// Problem #1
// Create a function called sumNum that takes in two parameters: num1 and num2.
// This function will return the sum of num1 and num2
function sumNum (num1, num2){
    return num1 + num2
}
console.log (sumNum(17, 13))
//30

// Problem #2
// Create a function called divisionRemainder that takes In two parameters: num1 and num2.
// This function will divide num1 and num2 (num1/num2). Assign the number of num1/num2 to a variable
function divisionRemainder( num1, num2){
    return num1/num2
}
console.log(divisionRemainder(10, 4))
//2.5
let problem2 = 2.5

// Calculate the remainder and assign it to a variable
// This function will return the string: "(num1) divided by (num2) is (number) with a remainder of (remainder)"
function remainder(num1,num2){
    return `${num1} divided by ${num2} is ${Math.floor(problem2)} with a remainder of ${num1 % num2}`
}
console.log(remainder(10, 4))
//10 divided by 4 is 2 with a remainder of 2
let rem = 2

// Problem #3
// Create a function called randomNums that returns a random number from 0 to 1000
function randomNums (parameter){
    return (Math.random() * 1000)
}
console.log(randomNums(1000))
//486.9958698294099

// Problem #4
// Create a function called theType that takes in one parameter called: dataType
// This function will return the type of any argument passed into this function
function theType (dataType){
    return typeof(dataType)
}
console.log(theType(`Hello`))
//string

// Problem #5
// Create a function called isItArray that takes in one parameter called: arrayChecker
// This function returns whether the argument passed into this function is an array or not (the function should evaluate to either true or false)
function isItArray (arrayChecker){
    return Array.isArray(arrayChecker)
}
console.log(isItArray(problem2))
//false

// Problem #6
// Create a function called fifthIndex that takes in a string as a parameter
// This function finds the 5th index of any string passed into this function
function fifthIndex (AString){
    return (AString[5])
}
console.log(fifthIndex('another string'))
//e

// Problem #7
// Create a function called myInitials that takes in two parameters: firstName and lastName
// This function returns the initials of the first and last name
function myInitials (firstName, lastName){
    return (firstName[0] + lastName[0])
}
console.log(myInitials('Chelsea', 'Merrill'))
//CM

// Problem #8
// Create a function called upperCase that takes in a string as a parameter
// This function returns any strings passed into the function in all uppercase letters
function upperCase (params){
    return params.toUpperCase()
}
console.log(upperCase('I hope I am doing this right'))
//I HOPE I AM DOING THIS RIGHT

// Problem #9
// Create a function called lastChar that takes in a string as a parameter
// This function returns the last character of any string passed into this function
function lastChar (string){
    return (string[string.length-1])
}
console.log(lastChar('charting the last character'))
//r

// Problem #10
let counties = ['Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'India']

// Create a function called lastElement that takes in an array as a parameter
// Find the last element in the array and assign it to a variable
function lastElement (array){
    return (array[array.length-1])
}
console.log(lastElement(counties))
//Indian
let last = `India`
// This function returns the string: 'the last element in the array is (country)'
function newfunction (lastcountry){
    return `The last element in the array is ${lastcountry}`
}
console.log(newfunction(last))
//the last element in the array is India

// Create a function called: favoriteCountry that takes in an array as a parameter
// Add your favorite country at the beginning of the array
function favoriteCountry (newarray){
    newarray.unshift('Germany')
    return counties
}
console.log(favoriteCountry(counties))
//['Germany', 'Mexico', 'Canada', 'Italy', 'United Kingdom', 'Thailand', 'India']
let FavCounty = counties[0]
console.log(FavCounty)
//Germany

// This function returns the string: 'My favorite country is (country)'
function newstring (NewParameter){
    return `My favorite county is ${NewParameter}`
}
console.log(newstring(FavCounty))
//My favorite country is Germany
