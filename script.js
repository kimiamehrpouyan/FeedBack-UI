'use strict'
const ratingEls = document.querySelectorAll('.rating') 
const button = document.querySelector('.btn')
const containerEl = document.querySelector('.container')
let ratingSelected = ''

ratingEls.forEach((el) => {
    el.addEventListener('click',(event)=>{
        ratingSelected = event.target.parentNode.innerText  // important thing that you forgot it
        removeActive()
        el.classList.add('active')
    })

    // its Wrong...
    // el.addEventListener('click',()=>{
    //     el.classList.remove('active')
    // })
})

function removeActive () {
    ratingEls.forEach(el =>{
        el.classList.remove('active')
    })
}

button.addEventListener('click',()=>{
    if (ratingSelected !== ''){

        containerEl.innerHTML = 
        `<div class="text-container">
         <p class="text">Thank You!</p>
         <p class="text">FeedBack : ${ratingSelected}</p>
         <p class="text">We'll use your feedback to improve our customer support</p>
         </div>`
    }
})