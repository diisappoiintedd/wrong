gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true,
})

gsap.from('.hero', { opacity: 0, x: +500 })

gsap.to('.hero', {
	x: 0,
	duration: 1.4,
	opacity: 1,
})

gsap.from('.main-title', { opacity: 0, y: -500, x: -500 })

gsap.to('.main-title', {
	x: 0,
	duration: 1.4,
	opacity: 1,
})
