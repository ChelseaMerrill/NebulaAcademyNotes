let string = 'we are software engineers at nebula academy'

//Log the index of 'software'
console.log(string.indexOf(`software`))
//7

//Log the index of 's'
console.log(string.indexOf('s'))
//7

//Log the index of 'web'
console.log(string.indexOf('web'))
//-1

//Does the string include 'z'? (log true or false)
console.log(string.includes('z'))
//false

//does the string include 'engineer'? (log true or false)
console.log(string.includes('e'))
//true

//Split the words in the string into an array
console.log(string.split(' '))
//[ 'we', 'are', 'software', 'engineers', 'at', 'nebula', 'academy' ]

//Extract the word 'software' and log it
console.log(string.slice(7, 15))
//software

//Extract the word 'academy' and log it
console.log(string.slice(36, 46))
//academy

//Create a variable and assign the string: "we are learning new string methods"
let learn = 'we are learning new string methods'

//Log the length of the string
console.log(learn.length)
//34

//Log the last character of the string
console.log(learn[learn.length-1])
//s

//Log the character at index 5
console.log(learn.charAt(5))
//e

//Replace all a's  with a '-'
console.log(learn.replace(/a/g, "-"))
//we -re le-rning new string methods

//Uppercase everything in the string
console.log(learn.toUpperCase())
//WE ARE LEARNING NEW STRING METHODS

//Lowercase everything in the string
console.log(learn.toLowerCase())
//we are learning new string methods

//Create a new variable with your favorite ice cream flavor
let IceCream = "mint choclate chip"

//Log the string, 'My favorite ice cream flavor is (your favorite ice cream flavor)'
console.log(`My favorite ice cream flavor is ${IceCream}`)
//My favorite ice cream flavor is mint choclate chip
 

