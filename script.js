const buttonTwo = document.querySelector('.btn-2')

function alertBtn() {
    alert('I love Event Listener')
}

buttonTwo.addEventListener("click",alertBtn)


// mousemove

const newBackgroundColor = document.querySelector('.box-3')

function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'blue'
}

newBackgroundColor.addEventListener("mouseover",changeBgColor)