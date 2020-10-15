//**functions are always invoked with parathesis




//PARAMETERS VS ARGUMENTS
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