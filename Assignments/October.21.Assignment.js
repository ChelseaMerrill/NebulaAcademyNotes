// Log the type of a number
console.log(typeof(6));
//number

// Log the type of a string
console.log(typeof(`string`));
//string

// Log the type of NaN
console.log(typeof(NaN));
//number

var fruits = ['apple', 'orange', 'peach', 'lemon', 'plum', 'grape', 'watermelon']; 
// Check to see if the array fruits is actually an array
console.log(typeof(fruits));
//object

// Log the 4th element in the array
console.log(fruits[4]);
//plum

// Log the last element in the array
console.log(fruits[fruits.length - 1]);
//watermelon

// Log the index of 'peach'
console.log(fruits.indexOf(`peach`));
//2

// Take out the last element of the array. Log the new array and the last element
console.log(fruits.pop())
//watermelon
console.log(fruits)
//['apple', 'orange', 'peach', 'lemon', 'plum', 'grape']

// Add 'banana' to the end of the array. Log the new array and log the element
fruits.push(`bannana`)
console.log(fruits)
//apple',   'orange',
//['peach',   'lemon', 'plum', 'grape', 'bannana']