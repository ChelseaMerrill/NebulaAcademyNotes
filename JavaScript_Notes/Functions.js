//FUNCTIONS

//Basics functions
// function |name of function| (parameters){
    //tell the function what to do
//}
//|name of function|(arguments)
function adding (num1, num2){
    return num1 +num2
}
console.log(adding(5, 10)) //15

function welcome (name){
    return `hi ${name}`
}
console.log(welcome(`Tefe`)) //hi Tefe


function FullName (FirstName, LastName){
    return `My name is ${FirstName + LastName}`
}
console.log(FullName(`Chelsea `, `Merrill`))


// Declare a funciton called myInitials. it takes in two parameters: your firstName and your lastName 
// return your initias 
function myInitials(FN, LN){
    return FN[0] + LN[0]
}
console.log(myInitials(`Chelsea`, `Merrill`))


// Declare a function called removeTheLastElement that takes in a parameter: array
// remove the last element and return the new array 
let example = ['Scout', 'Harper', 'Finn', 'Ginger']
function removeTheLastElement (example){
    example.pop() 
    return example
}
console.log(removeTheLastElement(example)) //[ 'Scout', 'Harper', 'Finn' ]
    


//Annonymous Functions: declaring  variable to that function
//let annymousFunction = funtions(parameters)
//annnoymousFunction(argu)