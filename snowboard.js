const content = document.querySelector('header');

const tween = gsap.to(content, {
	scale: 0.25,
	duration: 3,
	ease: "power3.out",
});
	
	



	const tl = ScrollTrigger.create({
		trigger: ".wrapper",
		start:"0",
		end: window.innerHeight,
		pin: ".page",
        pinSpacing: true,
		animation:tween,
		scrub:1,
		invalidateOnRefresh:true,
		markers:false
        
	})
  
	tl.refresh();
	
	tl.addEventListener('scrollEnd',()=>{
		tl.kill(true)
	})