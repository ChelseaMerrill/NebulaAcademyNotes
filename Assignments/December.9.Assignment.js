// Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
const quarterOf = (month) => {
    return Math.ceil(month / 3)
}
console.log(quarterOf(3))
//1

 

//Multiplication Table
//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
function multiTable(num) {
  let total = ''
  let two = (num *2)
  let three = (num *3)
  let four = (num *4)
  let five = (num *5)
  let six = (num *6)
  let seven = (num *7)
  let eight = (num *8)
  let nine = (num *9)
  let ten = (num *10)
    return (`1 * ${num} = ${num}\n2 * ${num} = ${two}\n3 * ${num} = ${three}\n4 * ${num} = ${four}\n5 * ${num} = ${five}\n6 * ${num} = ${six}\n7 * ${num} = ${seven}\n8 * ${num} = ${eight}\n9 * ${num} = ${nine}\n10 * ${num} = ${ten}`)
}
  console.log(multiTable(5))
  //'1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50')

 

// Enough Space
// https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
    if (cap - on >= wait){
      return 0
    } else {
      return (wait - (cap - on))
    }
  }
  console.log(enough(100, 60, 50))
  //10

 

// Reversed Sequence
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = n => {
    let total = [];
     for (var i = n; i > 0; i--) {
     total.push(i)
    }
    return total
  }
  console.log(reverseSeq(5))
  //[5, 4, 3, 2, 1, 0]

 

// Switch it up
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
function switchItUp(number){
    var words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return words[number];
  }
console.log(switchItUp(1))
//'One'


// A Wolf in Sheep's Clothing
// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
    queue.reverse()
      let beforeWolf = queue.indexOf("wolf")
      if(beforeWolf === 0){
        return 'Pls go away and stop eating my sheep'
      }
      else{
        return `Oi! Sheep number ${beforeWolf}! You are about to be eaten by a wolf!`
      }      
  }
  console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
  // "Oi! Sheep number 2! You are about to be eaten by a wolf!"