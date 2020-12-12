// Problem #1
// Larger Product or Sum
// https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02
function sumOrProduct(array, n) {
  let sum = 0
  let product = 1
  array.sort(function(a, b){return b - a})
  for (let i = 0; i < n; i++){
    sum += array[i] 
  }
  for (let j = array.length - 1; j >= array.length - n; j--){
    product *= array[j]
  }
    if (sum > product){
      return 'sum'
    }
  if (sum < product){
    return 'product'
  }
  if (sum === product){
    return 'same'
  }
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))
//"sum"

// Problem #2
// Simple directions reversal
// https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca
function solve(arr){
    const directions = [];
    const roads = [];
  
  for (let i = 0; i < arr.length; i++){
    const onIdx = arr[i].indexOf('on ');
    directions.push(arr[i].slice(0, onIdx));
    roads.push(arr[i].slice(onIdx+2, arr[i].length))
  }
   if (directions.length > 1){
     console.log(directions)
      for (let i = 0; i < directions.length; i++){
        console.log(directions[i])
       if (directions[i] === 'Left ' ){
         directions[i] = 'Right '
       } 
      else if (directions[i] === 'Right ') {
        console.log(i)
         directions[i] = 'Left '
       }
      }
    } 
  directions.shift()
  directions.push('Begin ')
  const newPath = [];
  for (let i = 0; i < directions.length; i++){
    newPath.push(directions[i] + 'on' + roads[i])
  }
  return newPath.reverse()
}
  
   

// Problem #3
// Life Path Number
// https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0
function lifePathNumber(dateOfBirth) {
    let DOB = dateOfBirth.split('-')
    let year = DOB[0]
    let month = DOB[1]
    let day = DOB[2]
    let y = (year - 1) % 9 + 1
    let m = (month - 1) % 9 + 1
    let d = (day - 1) % 9 + 1
    let total = y + m + d
    return (total -1) % 9 + 1
}
console.log((lifePathNumber("1879-03-14"))
    //6

 

// Problem #4
// Form the Largest
// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e
function maxNumber(n){
    let arr = [...`${n}`].map(Number)
    arr.sort(function(a, b){return b - a})
      k = 0
      for (i = 0; i < arr.length; i++)
      k = 10 * k + arr[i]
     return k
  }
  console.log(maxNumber(566797))
//977665

//Best Code Wars answer
  //function maxNumber(n){
  //return Number(String(n).split("").sort().reverse().join(""));
 //}
