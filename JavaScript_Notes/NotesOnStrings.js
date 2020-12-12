var x =9; 
console.log(x);

var chelsea = "hello";
console.log(chelsea);

let k = "practice";
console.log(k);

// when declaring values you can use single quote, double quote or backticks
//but when using temperal literals you can only use backticks
//console.log(`this new string is ${newString} it is h-llo!! this is hello now ${newVariable}`

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

let myName = "Manami Ueda"
console.log(`${myName[0]}${myName[7]}`)
let firstLetter = myName[0];
let secondLetter = myName[7];
console.log(firstLetter + secondLetter);
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
//M
console.log(Name[1 + 2 + 3])
//e
console.log(Name[1 + 2 + 3 + 4])
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

let A = 'we are replacinging some charcters'
console.log(A.replace("are", "is"))
//arguments = what goes inside .replace.  they can be anything. the values of what youre doing (the "are" and "is")
//parameters = what it is doing. general concept. explaining the values
console.log(A.charAt(10))
//argument =10, parameter = index

//indexOf() = method returns the index of the value you pass into the method
let B = 'welcome to nebula academy'
console.log(B.indexOf(`l`))
//2
console.log(B.indexOf(`nebula`))
//11
console.log(B.indexOf(`z`))
//-1

let C = "Hello, welcome to facebook"
console.log(C.includes(`l`))
//true
console.log (C.includes(`z`))
//false

//.split : divides a string into an ordered list of substring
let D = `nissan, volvo, toyota, porsche, bmw, mercedes, audi, honda`
console.log(D.split(`,`))
//[
 //   'nissan',  ' volvo',
//    ' toyota', ' porsche',
    //' bmw',    ' mercedes',
  //  ' audi',   ' honda'
//]

let E = `apple bannana orange grape`
console.log(E.split(` `))
//[ 'apple', 'bannana', 'orange', 'grape' ]
//string indexing you are accessing elements

//slice: extracts a section of a string and retunrs in=t without modifying the original string
let F ='javascript makes me happy'
console.log(F.slice(0, 10))
//javacript <- said that I want all indexed between 0 and 10 (including 10 which is t)
console.log(F)
//javacript makes me happy <- slicing out "javascript" in line 46 didnt change the original value of the variable
let js = F.slice(0, 10)
console.log(`${js} makes me smart`)
//javascript makes me smart <- the "javascipt" comes from the let js that I spliced out in 50
console.log(F.slice(-5))
//happy
console.log(F.slice(-1))
//y
//when counting backwards you start with 1 instead of 0

//substring: returns a portion of the string starting at thr specifie index and extending for a given numer of characters afterwards
//first number is the first charcter you want, second number is how many after that character you want
let G = 'nebula academy wednesday class'
console.log(G.substr(0, 7))
//nebula
console.log(G.substr(7, 7))
//academy
console.log(G.substr(15, 2))
//we
console.log(G.substr(15, 11))
//wednesday c

//Practice with arrays
let Name = "Chelsea Merrill"
let FullName = Name.split(` `)
console.log(FullName)
//['Chelsea' , 'Merrill"]
let First = FullName[0]
let Last = FullName[1]
console.log(First[0])
console.log(Last[0]) 

// ADDING STRINGS USING TEMPLATE LITERAL
// We can have JS variable inside the string by using this syntax `${JAVASCRIPT HERE}`

let IceCream = "mint choclate chip"
//Log the string, 'My favorite ice cream flavor is (your favorite ice cream flavor)'
console.log(`My favorite ice cream flavor is ${IceCream}`)
//My favorite ice cream flavor is mint choclate chip