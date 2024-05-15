const popUpClose = document.querySelector(".close");
const popUpWindow = document.querySelector(".popUpForm")
const HamburgerTogle = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul");
const contactScroll = document.querySelector("nav .btn ");


popUp(contactScroll);



HamburgerTogle.addEventListener("click", ()=>{

	menu.classList.toggle('active');
	HamburgerTogle.classList.toggle('active');

})

function popUp(open){

open.addEventListener("click", ()=>{


popUpWindow.style.display = "block";

})


}
popUpClose.addEventListener("click", ()=>{

  
    popUpWindow.style.display = "none";
    
    })