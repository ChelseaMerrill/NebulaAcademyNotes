// What is between?
// https://www.codewars.com/kata/55ecd718f46fba02e5000029
function between(a, b) {
    var newArr = [];
   for (var i = a; i <= b; i++) {
       newArr.push(i);
   }
     return newArr
}
console.log(between(1, 4))
//[1, 2, 3, 4]

 

// Tip Calculator
// https://www.codewars.com/kata/56598d8076ee7a0759000087
function calculateTip(amount, rating) {
    let x = rating.toLowerCase()
      if (x == "terrible"){
      return 0
    }
      if (x == "poor"){
        return Math.ceil(amount * .05)
      }
      if (x == "good"){
        return Math.ceil(amount * .1)
      }
      if (x == "great"){
        return Math.ceil(amount * .15)
      }
      if (x == "excellent"){
        return Math.ceil(amount * .2)
      } else{
          return 'Rating not recognized'
      }
}
console.log(calculateTip(20, "Excellent"))
//4
 

// Draw Stairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
function drawStairs(n) {
    let result = [];
    
    for (let i = 0; i < n; i++) {
      result[i] = `${' '.repeat(i)}I`;
    }
    
    return result.join('\n');
  }
  console.log(drawStairs(3))
  //I\n I\n  I

 

// Remove String Spaces
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript
function noSpace(x){
    return x.replace(/\s/g, '');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
//'8j8mBliB8gimjB8B8jlB'



// LeetCode Problem:
// https://leetcode.com/problems/two-sum
const twoSum = (arr, target) => {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
}
console.log(twoSum([2, 7, 11, 15], 9));
// [ 0, 1 ]