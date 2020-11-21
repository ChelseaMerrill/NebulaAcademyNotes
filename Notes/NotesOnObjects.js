// create your own object with these key-value pairs: name, age, city
let person = {
    name: 'Chelsea',
    age: 26,
    city: 'Albany',
}

// create a funciton that adds 1 to your age 
function addAge(param){
    return param.age++
}
addAge(person)
['Chelsea', 27, 'Albany']

// create a function that returns the keys in an array
function objKeys (object){
    for (let key in object){
        console.log(key)
    }
}
objKeys(person)
//name
//age
//city

// create a funciton that returns the values in an array format
console.log(Object.values(person))


