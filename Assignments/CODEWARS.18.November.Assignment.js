// //Problem1 (how much water will Nathan drink)
// //https://www.codewars.com/kata/582cb0224e56e068d800003c
// function Water (hour){
//     return Math.floor(hour * .5)
// }
// console.log(Water(3))
// //1
 
// //Problem 2 (Average Grade)
// //https://www.codewars.com/kata/563e320cee5dddcf77000158
// function Average (grades){
//     let total = 0
//     for (let i = 0; i < grades.length; i++){
//         total += grades[i]
//     } return total / grades.length
// }
//  console.log(Average([90, 80, 70]))
//  //80

//Problem 3 (the box)
//https://www.codewars.com/kata/5f70c883e10f9e0001c89673

 
//Problem 4 (reverse string)
//https://www.codewars.com/kata/51c8991dee245d7ddf00000e

// // Problem 5 (if the name starts with 'r' return the string '(name) plays the banjo`)
// //https://www.codewars.com/kata/53af2b8861023f1d88000832
// function areYouPlayingBanjo (name){
//     if (name[0] === 'r'|| name[0] === 'R'){
//     return `${name} plays banjo`
//     } else { 
//     return `${name} does not play banjo`
//     }
// }


//  console.log(areYouPlayingBanjo('chelsea'))
//  //chelsea does not play banjo

// //Problem 6 (add all number up to your argument)
// //https://www.codewars.com/kata/55d24f55d7dd296eb9000030
// function summation(num) {
//     total = 0;
//     for (let i = 1; i <= num; i++){
//         total += i 
//     }
//     return total
// }
// console.log(summation(4))
// //10
 
// //Problem 7 (return the inverse of the array)
// //https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
// function invert (first){
//     let inverseArr = []
//     for (let i = 0; i < first.length; i++){
//        let newNum = (first[i] * -1)
//        inverseArr.push(newNum)
//     } return inverseArr
// }
// console.log(invert([1, 2, 3, 4]))
// //[-1, -2, -3, -4]