function changeColorTitulo(newColor) {
   const elem1 = document.getElementById('titulo1');
   const elem2 = document.getElementById('titulo2');
    
    elem1.style.color = newColor;
    elem2.style.color = newColor; 
    
  }

function changeColorParrafo(newColor) {
  const elem = document.getElementById('para');
  elem.style.color=newColor;
}

/*
function changeColorSection(){
  const 
}*/
  
const menuHamIcon=document.querySelector('.menu-ham');
const mobileMenu=document.querySelector('.mobile-menu');


menuHamIcon.addEventListener('click', toggleMobileMenu);
mobileMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  
  mobileMenu.classList.toggle('inactive');
}

let firstHeading = document.querySelector('h1');

console.log(firstHeading);