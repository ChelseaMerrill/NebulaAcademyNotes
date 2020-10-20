// Calculate the remainder of 15/2, log the string: 'the remainder of 15/2 is (remainder)'
console.log(15 % 2) //1
let remainder =`1`
console.log(`The remainder of 15/2 is ${remainder}`) // The remainder of 15/2 is 1
//Another answer for the Q:
let num = Math.floor(15 / 2)
let rem = 15 % 2
console.log('The remainder of 15/2 is ' + num + ' with a remainder of ' + rem) // The remainder of 15/2 is7 with a remainder of 1

// Calculate the remainder of 30/2, log the string: 'the remainder of 30/2 is (remainder)'
console.log(30 % 2) //0
let NewRemainder = `0`
console.log(`The remainder of 30/2 is ${NewRemainder}`) // The remainder of 30/2 is 0

// Write the reasonings for each solution below
// To get the reminder you have to divide the first number by the second number.  The second number is the value that is left after the bottom number has gone into the first number as many times as possible. For the first, 2 goes in 15 seven times and then 1 is left over so the remainder 1.  For the second, 2 goes into 30 an even amount of times so there is no remainder.

// Log the boolean of 5 == '5'
console.log(Boolean(5 == `5`)) //true

// Log the boolean of  5 === '5'
console.log(Boolean(5 === `5`)) //false

// Log the boolean of 5 != '5'
console.log(Boolean(5 != `5`)) //false

// Log the boolean of  5 !== '5'
console.log(Boolean(5 !== `5`)) //true

// Log the boolean of 5 == 5 && 5 ==6
console.log(Boolean(5 == 5 && 5 ==6)) //false

// Log the boolean of 5 ==5 || 5 ==6
console.log(Boolean(5 ==5 || 5 ==6)) //true

// Using Math.random(), console.log 3 random decimal numbers from 0 to 1000
console.log(Math.random() * 1000)
//684.3669545677367
//674.2100123442345
//421.57684724244325

// Using Math.random(), console.log 3 random whole numbers from 0 to 1000
console.log(Math.floor(Math.random() * 1000))
//34
//286
//960

