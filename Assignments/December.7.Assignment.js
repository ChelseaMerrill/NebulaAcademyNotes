// Multiple of index
// https://www.codewars.com/kata/5a34b80155519e1a00000009
function multipleOfIndex(array) {
  return array.filter((number, index) => number % index === 0)
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))
[-6, 32, 25]

// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
console.log(digitize(35231))
//[1,3,2,5,3]

// Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009
function sumMix(x){
  let sum = 0
  x.map(function(element){
        sum += parseInt(element)
        })
   return sum
 }
 console.log(sumMix([9, 3, '7', '3']))
 //22

// Sum of differences in array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
function sumOfDifferences(arr) {
  let sorted = arr.sort((a,b) => b-a)
  let sum = 0
  for (let i = 1; i < sorted.length; i ++){
    sum += sorted[i-1] - sorted[i]
  }
  return sum
}
console.log(sumOfDifferences([1, 2, 10]))
//9

// take the derivative
// https://www.codewars.com/kata/5963c18ecb97be020b0000a2
function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}
console.log(derive(7,8)) 
//"56x^7")

// Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
