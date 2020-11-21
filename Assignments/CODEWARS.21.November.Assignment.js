// Problem #1
// Area or Perimeter
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab
const areaOrPerimeter = function(l , w) {
  if (l === w){
    return l * w
  } else {
    return l + l + w + w
  }
};
console.log(areaOrPerimeter(4, 4)) // 16
console.log(areaOrPerimeter(2, 3)) //10
 

// Problem #2
// Generate Range of Integers
// https://www.codewars.com/kata/55eca815d0d20962e1000106
function generateRange(min, max, step){
  let newArr = []
   for (i = min; i <= max; i+=step){
     newArr.push(i)
     if (newArr[0] !== min)
       newArr.unshift(min)
   }
     return newArr
 }
console.log(generateRange(2, 10, 2))
//[2, 4, 6, 8, 10]
 

// Problem #3
// Hello, Name or World!
// https://www.codewars.com/kata/57e3f79c9cb119374600046b
function hello(name) {
    if ((typeof(name) === 'string') && name){
  let first = name[0].toUpperCase()
  let rest = name.substr(1, name.length-1)
  let another = rest.toLowerCase()
        return `Hello, ${first}${another}!`
        }
        else {
            return `Hello, World!`
  }
}
console.log(hello('Chelsea')) //Hello, Chelsea!
 console.log(hello(3)) //Hello, World!

// Problem #4
// Is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0){
          return true
      } else {
          return false
      }
  }
console.log(isDivisible(10, 2, 5)) //true
console.log(isDivisible( 3, 12, 10)) //false
 

// Problem #5 
// Sum of positive
// https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
    let total = 0
    for (let i = 0; i <arr.length; i++){
      if (arr[i] >= 0) total += arr[i]
    } 
    return total
}
  
 console.log(positiveSum([1, 2, 3, 4, 5, 6]))
//21