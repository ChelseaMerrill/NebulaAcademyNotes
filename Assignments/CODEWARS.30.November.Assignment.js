// ecursive Replication
// https://www.codewars.com/kata/57547f9182655569ab0008c4
function replicate(times, number) {
	const newArr = [];
  for (let i = 0; i <number.length; i++){
    if (times >= 0){
    newArr = newArr.concat(times(number))
 } else {
    result.push(number)
  }
}
    return newArr 
}
 

// Factorial Factory
// https://www.codewars.com/kata/528e95af53dcdb40b5000171
function factorial (n) {
    let total = 0
    for (let i = n; i > 0; i--){
      total *= i
   }
    return total
  }

 

// Reverser
// https://www.codewars.com/kata/58069e4cf3c13ef3a6000168

 

// Sum ALL the arrays
// https://www.codewars.com/kata/5594463eaf1701909c0000d4
function arraySum(arr) {
    let result = []
       for (let i = 0; i < arr.length; i++){
    let element = arr[i]
           if (Array.isArray(element)){
               for (let j = 0; j < element[j]; j++){
                   result += element[j]
              }
           }
           else {
               result += element
           }
      }
      return result
}