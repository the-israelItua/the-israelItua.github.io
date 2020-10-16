gsap.registerPlugin(ScrollTrigger);

$(function(){
  $('.fa-align-justify').click(function(){
      $("#sidebar").removeClass("hide")
      $("#sidebar").addClass("show")
      $("#closeIcon").removeClass("hide")
      $("#openIcon").addClass("hide")
  })

$('.fa-close').click(function(){
  $("#sidebar").removeClass("show")
  $("#sidebar").addClass("hide") 
  $("#openIcon").removeClass("hide")
  $("#closeIcon").addClass("hide")
})

$('#sidebar a').click(function(){
  $("#sidebar").removeClass("show")
  $("#sidebar").addClass("hide") 
  $("#openIcon").removeClass("hide")
  $("#closeIcon").addClass("hide")
})

let tln = gsap.timeline();

tln.to(".preload .text", { y: -15, opacity: 0, duration: 2 })
  .to(".preload .bar1", { y: -1500,  duration: 1 },"-=0.5")
  .to(".preload .bar2", { y: 1500, opacity:0, duration: 1 },"-=0.5")
  .to(".preload .bar3", { y: -1500,  duration: 1 },"-=0.5")
  .to(".preload", { opacity: 0, y: -1500, duration: 1 })
  .to(".preload .bar2", { y: -1500, duration: 1 },"-=0.5")
  .from(".view_one h2", { x: -250, opacity: 0, duration: 1 },"-=0.5")
  .from(".view_one h6", { y: -15, opacity: 0, duration: 1 },"-=0.5")
  .from(".view_one p", { opacity: 0, duration: 1 }, "-=0.5")
  .from(".view_one button", { opacity: 0, y: -25, duration: 1 });


let tl1 = gsap.timeline({
  scrollTrigger: { trigger: ".view_two" },
});

tl1
  .from(".view_two p", { x: -250, opacity: 0, duration: 2 })
  .from(".view_two .one", {y: -15,opacity: 0, duration: 1}, "-=0.5")
  .from(".view_two .two", {y: -15,opacity: 0, duration: 1}, "-=0.5")
  .from(".view_two .three", {y: -15,opacity: 0, duration: 1}, "-=0.5")
  .from(".view_two .four", {y: -15,opacity: 0, duration: 1}, "-=0.5")
   .from(".view_two .five", {y: -15,opacity: 0, duration: 1}, "-=0.5")
   .from(".view_two .six", {y: -15,opacity: 0, duration: 1}, "-=0.5")
   .from(".view_two .seven", {y: -15,opacity: 0, duration: 1}, "-=0.5")
   .from(".view_two .eight", {y: -15,opacity: 0, duration: 1}, "-=0.5")
   .from(".view_two .nine", {y: -15,opacity: 0, duration: 1}, "-=0.5")
   .from(".view_two .ten", {y: -15,opacity: 0, duration: 1}, "-=0.5")

let tl2 = gsap.timeline({
  scrollTrigger: { trigger: ".view_three" },
});

tl2
  .from(".view_three h2", { x: -250, opacity: 0, duration: 2 })
  .from(".view_three p", { opacity: 0, duration: 1 }, "-=0.5")
  .from(".view_three button", { opacity: 0, y: -25, duration: 1 });

  let tl3 = gsap.timeline({
    scrollTrigger: { trigger: ".view_four" },
  });
  
  tl3
    .from(".view_four h2", { x: -250, opacity: 0, duration: 2 })
    .from(".view_four p", { opacity: 0, duration: 1 }, "-=0.5")
    .from(".view_four button", { opacity: 0, y: -25, duration: 1 });
  
  let tl6 = gsap.timeline({
      scrollTrigger: { trigger: "footer" },
    });
    
  tl6
      .from("#footer h2", { x: -250, opacity: 0, duration: 2 })
      .from("#footer .one", { y: -15, opacity: 0, duration: 1 }, "-=0.5")
      .from("#footer .two", { y: -15, opacity: 0, duration: 1 }, "-=0.5")
      .from("#footer .three", { y: -15, opacity: 0, duration: 1 }, "-=0.5")
      .from("#footer .four", { y: -15, opacity: 0, duration: 1 }, "-=0.5")
      .from(".foot", { opacity: 0, duration: 3 });   
})
      
    