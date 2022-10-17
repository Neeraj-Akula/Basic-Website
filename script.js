burgers=document.querySelector('.burgers');
items=document.querySelector(".items");
navbar=document.querySelector(".navbar");
navRight=document.querySelector(".navright");


burgers.addEventListener('click',
()=>
{
    
    items.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
    navRight.classList.toggle('v-nav'); 
})  