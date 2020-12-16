// Difference in Age
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
function differenceInAges(ages){
    let newArr = [];
      ages.sort((a, b) => a - b)
      newArr.push(ages[0]);
      newArr.push(ages[ages.length -1]);
      let x = newArr[1] - newArr[0]
      newArr.push(x)
      return newArr
    }
console.log(differenceInAges([82, 15, 6, 38, 35]))
//[6, 82, 76]

 

// Initials
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
    let newName = name.split(' ')
    let first = (newName[0])
    let last = (newName[1])
    let final = first[0] + '.' + last[0]
    return final.toUpperCase()  
}
console.log(abbrevName("Sam Harris"))
//"S.H"

// Using Higher Order Function:
//function abbrevName(name){
//    return name.split(' ').map(i => i[0].toUpperCase()).join('.')
//}
 

// Needle in the hay stack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
function findNeedle(haystack) {
    let needlePosition = haystack.indexOf('needle');
    return `found the needle at position ${needlePosition}`
}
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
//'found the needle at position 3')

 

// Count of positives sum of negatives
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044
function countPositivesSumNegatives(input) {
    let pos = 0
    let neg = 0
    if (input === null){
      return []
    }
    for (let i = 0; i < input.length; i++){
    if (input[i] > 0 ){
    pos += 1
    }
      if (input[i] < 0){
      neg += input[i]
      }
    }
    if (pos===0 && neg===0){
      return []
    }
    else {
        return [pos, neg]
    }
 }
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
// [8, -50]

 

// Remove duplicate
// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
function distinct(a) {
    return a.filter(((v, i, a) => a.indexOf(v) === i))
}
console.log(distinct([1,1,2]))
//[1,2]
