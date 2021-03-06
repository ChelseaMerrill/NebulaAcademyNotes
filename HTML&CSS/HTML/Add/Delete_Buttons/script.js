//Making button clickable
//add
document.getElementById('add')
let adds = document.getElementById('add')
adds.addEventListener('click', newFunction)

function newFunction(param){
console.log('hit')
}
//delete
document.getElementById('delete')
let deletes = document.getElementById('delete')
deletes.addEventListener('click', newFunction)

function newFunction(param){
console.log('hit')
}

//Make it add
let boxButton= document.getElementById('add')
let bodyElement = document.querySelector('body')
let i = 0;

function addBox (){
    let box = document.createElement('div')
    box.classList.add('box')
    box.setAttribute('id', i)
    box.innerHTML = i
    box.style.fontSize = '50px'
    bodyElement.appendChild(box)

    i++
}
boxButton.addEventListener('click', addBox) 


//make it delete

let deleteButton = document.getElementById('delete')

function deleteBox (){
    let toDelete = document.getElementById(i-1)
    toDelete.parentNode.removeChild(toDelete);

    i--
}

deleteButton.addEventListener('click', deleteBox)