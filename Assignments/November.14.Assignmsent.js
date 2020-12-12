// Problem 1
//https://www.codewars.com/kata/515e271a311df0350d00000f/solutions/javascript
function squareSum(numbers){
    let newnum = 0
    for (let i = 0; i < numbers.length; i++){
     newnum += Math.pow(numbers[i], 2)
    } 
   return newnum
  }
  console.log(squareSum([1, 2, 3, 4, 5, 6], 2))
  //91


//Problem 2
//https://www.codewars.com/kata/568dcc3c7f12767a62000038/solutions/javascript
function setAlarm(employed, vacation){
    if ((employed === true) && (vacation === false)){
      return true
    } else{
      return false
    }
}
console.log(setAlarm(true, false))
//true


//Problem 3
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/solutions/javascript
function arrayPlusArray(arr1, arr2) {
    let newarr = arr1.concat(arr2)
    let total = 0
      for (let i = 0; i < newarr.length; i++ )
      total += Math.pow(newarr[i], 1)
     return total
  }
  console.log (arrayPlusArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]))
//55

//Problem 4
//https://www.codewars.com/kata/55a70521798b14d4750000a4/solutions/javascript
function greet(name){
    return `Hello, ${name} how are you doing today?`
  }
console.log(greet('Chelsea'))
// Hello, Chelsea how are you doing today?

//Problem 5
//https://www.codewars.com/kata/571d42206414b103dc0006a1/solutions/javascript
const arr = n => {
 let newarr = []
  for (let i = 0; i < n; i++){
    newarr.push(i)
  }  
  return newarr
} 
console.log (arr(4))
//[0, 1, 2, 3]


//Problem 6
//https://www.codewars.com/kata/57d814e4950d8489720008db/solutions/javascript
function index(array, n){
    if (array[n] != undefined) {
      return Math.pow(array[n], n)
      } 
      else {
    return -1
    }
  }
  console.log(index([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))
  // 9

//Problem 7
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/solutions/javascript 
function past(h, m, s){
    let sec = s * 1000
    let minutes = m * 60000
    let hour = h * 3600000
    return (hour + minutes + sec)
  }
  console.log (past(1, 0, 1))
  //3601000