const content = document.querySelector(".inside");
const popUpOpen = document.querySelector(".popUpOpen");
const popUpClose = document.querySelector(".close");
const popUpWindow = document.querySelector(".popUpForm")
const HamburgerTogle = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul");
const contactScroll = document.querySelector("nav .btn ");



popUp(popUpOpen);
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

function getScrollAmount() {
	let contentWidth = content.scrollWidth;
	return -(contentWidth - window.innerWidth);
}



const tween = gsap.to(content, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});
	
	



	const tl = ScrollTrigger.create({
		trigger:".zainteresowania",
		start:"top 0",
		end: () => `+=${getScrollAmount() * -1}`,
		pin:true,
		animation:tween,
		scrub:1,
		invalidateOnRefresh:true,
		markers:false
	})

	tl.refresh();




