function stringMath (string){
    if (string.includes('+')){
        let a = string.split('+')
        return parseInt(a[0]) + parseInt(a[1])
    }
    if (string.includes('-')){
        let b = string.split('-')
        return parseInt(b[0]) - parseInt(b[1])
    }
    if (string.includes('*')){
        let c = string.split('*')
        return parseInt(c[0]) * parseInt(c[1])
    }
    if (string.includes('/')){
        let d = string.split('/')
        return parseInt(d[0]) / parseInt(d[1])
    }
}

// console.log(stringMath('1+12'))
// console.log(stringMath('4-1'))
// console.log(stringMath('2/1'))
// console.log(stringMath('4*11'))
console.log(stringMath('1+12+3'))