// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate #box with infinite yoyo
gsap.to("#box", {
  x: 1000,
  duration: 5,
  delay: 2,
  backgroundColor: "blue",
  rotate: 180,
  repeat: -1, // Infinite repeats
  yoyo: true, // Reverse animation
});

// Animate #box1 from a starting position
gsap.from("#box1", {
  x: 200,
  y: 200,
  delay: 2,
  duration: 3,
  rotate: 360,
});

// Timeline animation for the navbar
var navTimeline = gsap.timeline();
navTimeline
  .from(".nav h2", {
    opacity: 0,
    y: -20,
    delay: 1,
    duration: 1,
  })
  .from(".link h4", {
    opacity: 0,
    y: -20,
    duration: 1,
    stagger: 0.5,
  });

// Scroll-triggered animation for `.center`
gsap.from(".page .center", {
  opacity: 0,
  x: 150,
  delay: 0.5,
  duration: 1.5,
  scale: 0.8, // Positive scale value
  scrollTrigger: {
    trigger: ".page", // Updated to a valid selector
    start: "top 70%",
    end: "top 20%",
    scrub: true,
  },
});
// Scroll-triggered animation for `.hey`
gsap.to(".second .hey", {
    scrollTrigger: {
      trigger: ".second", // Section to trigger the animation
      start: "top 100%", // When the section reaches the middle of the viewport
      end: "top -100%", // End animation when it scrolls out of view
      scrub: true, // Smooth scrolling effect
      markers: true, // Debug markers
      pin: ".second", // Pins the section during the animation
    },
  });
  
