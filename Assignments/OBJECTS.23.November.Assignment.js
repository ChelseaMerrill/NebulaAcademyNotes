let studentObject1 = {
                    name: 'Tim',
                    id: 1,
                    age: 22
                }
    
let studentObject2 = {
                    name: 'Lisa',
                    id: 2,
                    age: 19
                 }
    
//problem #1   
//Using the first studentObject1 above, create a function that returns the string, 'Tim is 22 years old'
function ageOfTim (object){
    for (let key in object){
        let studentName = object.name
        let studentAge = object.age
            return `${studentName} is ${studentAge} years old`
        }
}
console.log(ageOfTim(studentObject1)) 
// Tim is 22 years old

//Problem #2 
//Create a fucntion that takes in the two objects above, check to see if the person is above the age of 21 or not.
//if they are 21+, return the string, 'welcome, (name)!' 
//if not, return the string, 'try again in a couple years'
function ageOfTim (object){
    for (let key in object){
        let Name = object.name
        if ( age >= 21)
        return `Welcome ${Name}!`
    } else
        return 'Try again in a couple years'
    }
console.log(ageOfTim(studentObject1)) 
    
//Problem #3
//create a function that returns the keys in an array
console.log(Object.keys(studentObject2))
// [ 'name', 'id', 'age' ]
    
//create a funciton that returns the values in an array
console.log(Object.values(studentObject2))
//[ 'Lisa', 2, 19 ]
    
//Problem #4   
//Create a function that deletes the 'id' key value pairs
delete studentObject1.id
console.log(studentObject1)
// { name: 'Tim', age: 22 }
    
// Problem #5  
//create a function that takes in the student objects above and their birthdates (come up with their birthdates) as parameters.
//This function will add a new birthdate key value pair to the object

studentObject2['DOB'] = '12/23/1993'
console.log(studentObject2)
//{ name: 'Lisa', id: 2, age: 19, DOB: '12/23/1993' }

