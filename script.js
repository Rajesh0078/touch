const card = document.querySelector('.card')

let isDragging = false;
console.log(!isDragging)


card.addEventListener('touchmove', (e) =>{
    if(!isDragging)return;
    e.preventDefault;
    card.scrollLeft -= e.movementX
})

card.addEventListener('touchstart', (e)=> {
    isDragging = true;
})
document.addEventListener('touchend', ()=> isDragging = false)