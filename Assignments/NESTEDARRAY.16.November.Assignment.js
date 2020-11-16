
// Part 1
let nested = [1, 2, 3, [4, 5], 6, [7, 8, 9], [10], 11, 12, 13, [14, 15], [], 17, [18], 19, 20]
// Problem #1
// Create a function that logs every number inside the array as well as the numbers that are inside the nested arrays.
// Return the string, 'Done!' at the end
function loopGraph (array){
    for (let i = 0; i < array.length; i++){
        let full = array[i]
        if (Array.isArray(full)) {
        
        for (let j = 0; j < full.length; j++){
            let nest = full[j]
            console.log(nest)
            }
        } else {console.log(full)}
    } return 'Done!'
}
console.log(loopGraph(nested))
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 17
// 18
// 19
// 20
// Done!

 

// Problem #2
// Create a function that adds only the ODD numbers inside the NESTED arrays.
// Return the total
function oddNest (array) {
    let total = 0 
    for (let i = 0; i < array.length; i++){
        let numElement = array[i]
        if (Array.isArray(numElement)){
        for (let j = 0; j < numElement[j]; j++){
                if (numElement[j] % 2 === 1){ 
                total += numElement[j]}
                 }
        } 
     } return total
}
    console.log(oddNest(nested)) 
    //36

 

// Problem #3
// Create a function that logs only the EVEN numbers in the array and in the nested arrays.
// After logging every even number, return, 'Done!'
function evenNest (array) {
    let total = 0 
    for (let i = 0; i < array.length; i++){
        let numElement = array[i]
        if (Array.isArray(numElement)){
        for (let j = 0; j < numElement[j]; j++){
                if (numElement[j] % 2 === 0){ 
                total += numElement[j]}
                 }
        } 
     } return total
}
    console.log(evenNest(nested)) 
    //54
 

// Part 2
let nestedArr = ['full', 'stack', ['node', 'react',], [], ['redux'], ['html', 'css'], 'sql']
// Problem #4
// Create a function that logs every word in the array and the nested arrays.
// Return 'Done!' at the end
function loopARRAY (array){
        for (let i = 0; i < array.length; i++){
            let full = array[i]
            if (Array.isArray(full)) {
            
            for (let j = 0; j < full.length; j++){
                let nest = full[j]
                console.log(nest)
                }
            } else {console.log(full)}
        } return 'Done!'
    }
    console.log(loopARRAY(nestedArr))
// full
// stack
// node
// react
// redux
// html
// css
// sql
// Done!

 

// Problem #5
// Create a function that adds that word 'nested' to the end of every nested array.
// Return the new array
function AddNested (array) {
    for (let i = 0; i < array.length; i++){
        let arrayElement = array[i]
        if (Array.isArray(arrayElement)){
            arrayElement.push('nested')
        }
    }
    return array
}
 console.log(AddNested(nestedArr))
//  [
//     'full',
//     'stack',
//     [ 'node', 'react', 'nested' ],
//     [ 'nested' ],
//     [ 'redux', 'nested' ],
//     [ 'html', 'css', 'nested' ],
//     'sql'
//   ]
 

// Problem #6
// Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays.
// Return 'Done!' at the end
function hasA (array){
    for (let i = 0; i < array.length; i++){
        let full = array[i]
        let nest = []
        if (Array.isArray(full)) {
        for (let j = 0; j < full.length; j++){
            let nest = full[j]
            console.log(nest)
            } if nest[i].includes('a')
        } nest.push(full[j])
        return 'Done!'
}
console.log(hasA(nestedArr))
 

// Problem #7
// Create a function that logs every word that has a length of 4 in the array and in the nested arrays.
// Return 'Done!' at the end



