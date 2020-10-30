// Problem 1
// Create a function called initials that has two parameters: firstName and lastName.
// This function will return the initials of the first and last names passed into the function
function initials (firstName, lastName){
    return (firstName[0] + lastName[0])
}
console.log(initials('Chelsea','Merrill'))
//CM

// Problem 2
// Create a function called bool that has returns the Boolean of any argument passed into it
function bool (datatype){
    return typeof(datatype)
}
console.log(bool(true))
//boolean
 
// Problem 3
// Create a function called replaceA that takes in a string as a parameter.
// This function will replace all a's in the string passed into the funciton with a '-'
function replaceA (ASTRING){
    return (ASTRING.replace(/a/g, '-'))
}
 console.log(replaceA('apples and oranges'))
 // -pples -and or-nges

// Problem 4
// Create a function called characterAt that takes in a string as an argument
// This function will return the character at the 5th index of any string passed into the function
function characterAt (anotherstring){
    return (anotherstring[5])
}
 console.log(characterAt('more practing of functions'))
 //p

// Problem 5
// Create a function called squareRoot that takes in a number as a parameter.
// This function will return the square roof of any number that is passed in as an argument
function squareRoot (AnyNumber){
    return Math.sqrt(AnyNumber)
}
 console.log(squareRoot(25))
 //5

// Problem 6
// Create a function called theLength that takes in a string as a parameter.
// This function will return the length of any string passed into this function
function theLength (MoreStrings){
    return (MoreStrings.length)
}
console.log(theLength('What is the length of this string?'))
//34
 
// Problem 7
// Create a function called lastChar that takes in a string as a parameter.
// This function will return the last character of any string passed in as an argument
function lastChar (YetAnotherString){
    return (YetAnotherString[YetAnotherString.length -1])
}
 console.log (lastChar('What is the last Index of this string?'))
 //?

// Problem 8
// Create a function called itConcats that takes in 2 parameter that are arrays.
// This function will combine the two arrays passed into this function and return the new combined array
function itConcats (ArrayOne, ArrayTwo){
    return (ArrayOne.concat(ArrayTwo))
}
 console.log(itConcats(['apple', 'orange', 'peach'], ['carrot', 'peas', 'squash']))
//[ 'apple', 'orange', 'peach', 'carrot', 'peas', 'squash' ]

// Problem 9
// Create a function called lastTwoEle that takes in an array as a parameter.
// // This function will return the last two elements of any array passed into this function as an argument.
function lastTwoEle (TheNewArray){
    return `${TheNewArray[TheNewArray.length - 1]}  ${TheNewArray[TheNewArray.length-2]}`
}
 console.log(lastTwoEle(['apple', 'banana', 'orange', 'peach', 'grape']))
 //grape peach

// Problem 10
// Create a function called removeFirst that takes in an array as a parameter.
// This function removes the first elements from any array that is passed into this function as an argument.
function removeFirst (FruitArray){
   FruitArray.shift()
    return FruitArray
}
console.log(removeFirst(['apple', 'banana', 'orange', 'peach', 'grape']))
//[ 'banana', 'orange', 'peach', 'grape' ]
