// roblem #1
// Maximum product
// https://www.codewars.com/kata/5a4138acf28b82aa43000117
function adjacentElementsProduct(array) {
    let max = -Infinity
    for ( let i = 0; i < array.length -1; i++ )
      if (array[i] * array[i+1] > max){
        max = (array[i] * array[i+1])
    }
      return max
  }
console.log(adjacentElementsProduct([1, 2, 3, 4, 5]))
//20
 

// Problem #2
// Maximum gap
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013
function maxGap (array){
    let max = 0
    array.sort(function(a, b){return a - b})
    for (let i = 0; i < array.length -1; i++ ){
      if (array[i+1] - array[i] > max){
        max = (array[i+1] - array[i])
      }
      }
      return max
    }
  console.log(maxGap([4, 49, 7, 49, 0, 28, 1]))
  //21
  

 

// Problem #3
// Nth smallest element
// https://www.codewars.com/kata/5a512f6a80eba857280000fc
function nthSmallest(arr, pos){
    let min = 0
    arr.sort(function(a, b){return a - b})
    for (let i = 0; i < arr.length; i++)
    min = arr[pos -1]
    return min
  }
  console.log(nthSmallest([-1, 6, 9, 29, -194, 48, -3], 3))
  //-1
 

// Problem #4
// repeatStr
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr (n, s) {
    return s.repeat(n)
  }
  console.log(repeatStr('#', 8))
  //########

 

// Problem #5
// fakeBin
// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
function fakeBin(x){
    x = x.replace(/1/g, '0')
    x = x.replace(/2/g, '0')
    x = x.replace(/3/g, '0')
    x = x.replace(/4/g, '0')
    x = x.replace(/5/g, '1')
    x = x.replace(/6/g, '1')
    x = x.replace(/7/g, '1')
    x = x.replace(/8/g, '1')
    x = x.replace(/9/g, '1')
      return x
} 
    console.log(fakeBin('45385593107843568'))
 // '01011110001100111'