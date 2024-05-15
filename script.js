const content = document.querySelector(".inside");
const popUpOpen = document.querySelector(".popUpOpen");





popUp(popUpOpen);


function getScrollAmount() {
	let contentWidth = content.scrollWidth;
	return -(contentWidth - window.innerWidth + 100);
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




