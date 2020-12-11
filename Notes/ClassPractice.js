// Welcome!
// https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript
let hello = {english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
function greet(language) {
	for (let key in hello){
    if (language == key){
      return hello[key]
    }
    }
  return 'Welcome'
  }
console.log(greet)



// Problem #6
// Find the difference in age 
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
function differenceInAges(ages){
    let family = []
    let min = Math.min(...ages)
    let max = Math.max(...ages)
      family.push(min)
      family.push(max)
      family.push(max - min)
      return family
    }
    console.log(differenceInAges([29,83,67,53,19,2,96]))
    //[ 2, 96, 94 ]

// Problem #7
// Row Weights
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9
function rowWeights(array){
    let totalWeights = []
    let groupA = 0
    let groupB = 0 
      for (let i = 0; i < array.length; i++){
        if (i % 2 === 0){
          groupA += array[i]
        }
        if (i % 2 === 1){
          groupB += array[i]
          }
      } 
          totalWeights.push(groupA)
          totalWeights.push(groupB)
      return totalWeights
  }
  console.log(rowWeights([29,83,67,53,19,28,96]))
  //[ 211, 164 ]

// Problem #8
// Maximum product
// https://www.codewars.com/kata/5a4138acf28b82aa43000117

// Problem #9
// Maximum gap
// https://www.codewars.com/kata/5a7893ef0025e9eb50000013

// Problem #10
// Nth smallest element
// https://www.codewars.com/kata/5a512f6a80eba857280000fc


//Higher Order Functions

let numArr = [2, 4, 6, 8, 10]
function OddIndex (arr){
  return arr.map((num, index), index.length % 2 === 1)
}
console.log(OddIndex(numArr))

// Counting sheep
// https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}