//how to get quotes to show up after you run the string in your terminal
let quote= "\"whats up\""
console.log(quote)
// "what's up"

//how to get apostraphes after running code
let daja= "d\'aja"
console.log(daja)
// d'aja

// newline =("\n"_);
let chelsea = 'Chelsea\nMerrill'
console.log(chelsea)
//Chelsea
//Merrill

let example1= "nebula"
console.log(example1)
console.log(example1[0])
console.log(example1[1])
console.log(example1[2])
console.log(example1[3])
console.log(example1[4])
console.log(example1[5])
//n
//e
//b
//u
//l
//a

//let myName = "Manami Ueda"
//console.log(`${myName[0]}${myName[7]}`)
//let firstLetter = myName[0];
//let secondLetter = myName[7];
//console.log(firstLetter + secondLetter);
//MU

let Name = "Chel Mer"
console.log(`${Name[3]}${Name[6]}`)
let FL = Name[3]
let SL = Name[6]
console.log(FL + SL)
//le
//*note: that the first letter is index 0 and not 1 so they are all one number higher than you think
//*note: spaces also count as a number while indeing
//*note: where is consol log "Name"sequence I had to use the backtick instead of apostrophie becasue it's temperal litteral

//Why I have to do temperal litteral 
console.log(Name[2])
//e
console.log(Name[2 + 3])
//e
//M
console.log(Name[1 + 2 + 3])
//e
//M
//e
console.log(Name[1 + 2 + 3 + 4])
//e
//M
//e
//undefined
//*note: terminal added values together =10 and there is no character at index 10.

//Length (dot notation)
let L = "example"
console.log(L.length);
//7 <- how many indexes

//accessing indexes backwards (backet notation)
let S = "This is a test to practice lenth"
console.log(S[S.length - 1])
//h <-accesses the last index in the string
console.log(S[S.length - 3])
//n

console.log(Name.length)
//8
console.log(Name[Name.length - 1])
//r

console.log(Name.charAt(4))
//r
console.log(Name.charAt(100))
//
console.log(Name.charAt(6))
//e

console.log(S.toUpperCase())
//THIS IS A TEST TO PRACTICE LENTH
console.log(S.toLowerCase())
//this is a test to practice lenth

//replace
console.log(S.replace("practice", "Hello"))
//This is a test to Hello lenth
console.log(S.replace("i", "-"))
//Th-s is a test to practice lenth
console.log(S.replace(/i/g, "-"))
//Th-s -s a test to pract-ce lenth
//*note: the g is for a global search