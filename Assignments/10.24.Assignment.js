//Problem 1
//Define a variable name and assign your name to it
let Name = 'Chelsea'
//Create a function that returns your name
function FullName (FirstName, LastName){
    return `My name is ${FirstName + LastName}`
}
console.log(FullName(`Chelsea `, `Merrill`))
//My name is Chelsea Merrill

//Problem 2
//Create a function that accepts 2 parameters, both of which are numbers, and returns the sum of those two numbers
function add (Number1, Number2){
    return Number1 +Number2
}
console.log(add(12, 10))
//22

//Problem 3
//Create a function that returns the type of any argument that is being called in the function
function TO (num){
    return typeof num
}
console.log(TO(500))
//number

//Problem 4
var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon'];
//Using the array above, create a funciton that returns the 4th element in the array.
function FourthElement(singlefruit){
    return `The 4th fruit is ${singlefruit}`
}
console.log(FourthElement(fruits[4]))
//The 4th fruit is plum

//Create a function that returns only the last element in the fruits array
function LastElement(last){
    return LastElement
}
console.log(fruits[6])
//watermelon

//Create a function that returns [peach', 'lemon', 'plum', 'grape']
function Section(fruitslice){
    return Section
}
console.log(fruits.slice(2, 6))
//[ 'peach', 'lemon', 'plum', 'grape' ]

//Create a function that adds another furit to the end of the array and returns the new array
// function add(AddingFruit){
//     console.log(AddingFruit,'AddingFruit')
//     AddingFruit.push('melon') 
//     return AddingFruit
// }
// console.log(add(fruits))

//Create a funciton that returns the string, 'apple and orange and peach and lemon and plum and grape and watermelon'
function string(fruits){
    return fruits[0] + ` and ` + fruits[1] + ` and ` + fruits[2] + ` and ` + fruits[3] + ` and ` + fruits[4] + ` and ` + fruits[5] + ` and ` + fruits[6]
}
console.log(string(fruits))
//apple and orange and peach and lemon and plum and grape and watermelon


//Problem 5
var names = ['Jasmine', 'Maurice', 'Chelsea', 'Anitria', 'Tauseef', 'Daja', 'Eddy']
//Using the array above, create a fucntion that returns the string, 'Hello Maurice and Chelsea!'
function Problem5(names){
    return `Hello ` + names[1] + ` and ` +  names[2]
}
console.log(Problem5(names))
//Hello Maurice and Chelsea

//Create a funciton that returns the string, 'Hi Jasmine and Daja!'
function TryingAgain (names){
    return `Hi ` + names[0] + ` and ` + names[5] + `!`
}
console.log(TryingAgain(names))
//Hi Jasmine and Daja!

//Create a function that returns the string, 'Howdy Eddy!'
function hello (individual){
    return `Howdy ${individual}`
   }
   console.log(hello(names[6]) + `!`)
   //Howdy Eddy!

//Create a function that returns the string, 'Happy Monday, Anitria!'
function Happy (person){
    return `Happy Monday, ${person}`
}
console.log(Happy(names[3]) + `!`)
//Happy Monday, Anitria!

//Create a function that returns the string, 'Hey Tauseef!'
function Tauseef(person){
    return `Hey ${person}`
}
console.log(Tauseef(names[4] + `!`))
//Hey Tauseef!



