// Problem #1
// Find the first non-consecutive number
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }
console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
//6

 

// Problem #2
// Can we divide it
// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
function isDivideBy(number, a, b) {
    if (number % a === 0 &&  number % b === 0){
        return true
        } else {
        return false
         } 
  }
  console.log(isDivideBy(-12, 2, -5))
  //false

 

// Problem #3
// Short Long Short
// https://www.codewars.com/kata/50654ddff44f800200000007
function solution(a, b){
    if (a.length > b.length){
      return b+a+b
    }else{
      return a+b+a
    }
  }
console.log(solution('13', '200'))
//1320013

 

// Problem #4
// Check the exam
// https://www.codewars.com/kata/5a3dd29055519e23ec000074
function checkExam(array1, array2) {
    let total= 0
    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j <array2.length; j++){
         if (array1[i] === array2[j]){
            total +=4
        } if (array1[i] !== array2[j] && array1[i] !== "" && array2[j] !== "") {
            total -=1 
        }
        }
    }
     if (total < 0) {
       return 0
    }
    return total
}

 

// Problem #5
// Reversed Strings
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str){
var splitString = str.split(""); 
  var reverseArray = splitString.reverse(); 
  var joinArray = reverseArray.join(""); 
  return joinArray;
}
console.log(solution('hello'))
//olleh

 

// Problem #6
// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
    let newArr = []
    let finalArr = []
    newArr = Array.from(n.toString()).map(Number)
    for (let i = newArr.length -1; i >= 0; i--){
      finalArr.push(newArr[i])
    }
    return finalArr
  }
  console.log(digitize(35231))
  //[1,3,2,5,3)

