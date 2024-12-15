"use strict"
// global varibals
let iconMenu=document.querySelector('.links .span');
let fullSpan=document.querySelector('.links .span .span2');
let listMenu=document.querySelector('.links ul');


document.addEventListener('DOMContentLoaded',()=>{
    toggelMenu();
})



// toggle menu
function toggelMenu(){
    iconMenu.addEventListener('click',()=>{
        listMenu.classList.toggle('toggel');
        fullSpan.classList.toggle('toggel');

    })
    Array.from(listMenu.children).forEach(element => {
        
   element.addEventListener('mouseup',()=>{
        listMenu.classList.remove('toggel');
        fullSpan.classList.remove('toggel');

    })})
   
}

