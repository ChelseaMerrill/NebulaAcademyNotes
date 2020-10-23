let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// log the length of the array
console.log(days.length)
//7

// log the 4th element in the array
console.log(days[4])
//Thursday

// remove the first element in the array. Log the new array and the element removed from the array
console.log(days.shift())
//Sunday
console.log(days)
//[ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

// Add 'Sunday' at the beginning of the array and log the new array
days.unshift('Sunday')
console.log(days)
//[ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

// Remove the last element in the array. Log the new array and log the element removed
console.log(days.pop())
//Saturday
console.log(days)
//[ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ]

// Add 'Saturday' to the end of the array and log the new array
days.push('Saturday')
console.log(days)
//['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// replace 'Thursday' with 'Friday Junior'
days.splice(4, 1, 'Friday Junior')
console.log(days)
//['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday Junior', 'Friday', 'Saturday']

// extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
let FavDay = days.slice(0,1)
console.log(FavDay)
//Sunday
console.log('My favorite day of the week is ' + FavDay)
//My favorite day of the week is Sunday

// combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
console.log(phone.concat(laptop))
//[ 'iphone', 'android', 'MacBook', 'HP', 'Dell' ]