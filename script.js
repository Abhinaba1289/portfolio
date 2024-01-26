const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function circleMouseFollower() {
  window.addEventListener('mousemove', function (dets) {
    this.document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
  })
}
circleMouseFollower();

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: 1 })
  .add({
    targets: '.ml16 .letter',
    translateY: [-100, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  })
//   .add({
//     targets: '.ml16',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: 1 })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 30 * i
  })
//   .add({
//     targets: '.ml3',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });


function firstPageAnimation() {
  var t1 = gsap.timeline();

  t1.from(".nav, .image", {
    y: '-10',
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
  })
}

firstPageAnimation();

function ProjectPageAnimation() {
  var t1 = gsap.timeline();

  t1.from(".projects", {
    x: '-30',
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut
  })
}

ProjectPageAnimation();


// document.querySelectorAll(".project").forEach((project) => {
//   var rotate = 0;
//   var diffrot = 0;
//   project.addEventListener("mousemove", (dets) => {
//     var diff = dets.clientY - project.getBoundingClientRect().top;
//     diffrot = dets.clientX - rotate;
//     rotate = dets.clientX;
//     gsap.to(project.querySelector(".image-content"), {
//       opacity: 1,
//       ease: Power2,
//       top: diff-100,
//       left: dets.clientX,
//       rotate: gsap.utils.clamp(-20, 20, diffrot * 0.3),

//     })

//   })

//   project.addEventListener("mouseleave", (dets) => {
   
//     gsap.to(project.querySelector(".image-content"), {
//       opacity: 0,
//     })

//   })
// })

const menu1 = document.querySelector(".menu-1");
const menu2 = document.querySelector(".menu-2");
const nav = document.querySelector(".nav");
const navitems = document.querySelector(".nav-items");
menu1.classList.add("active");

menu1.addEventListener('click', () => {
  menu1.classList.remove("active");
  menu2.classList.add("active");
  nav.classList.add("nav-active");
  navitems.classList.remove("hidden");

})
menu2.addEventListener('click', () => {
  menu2.classList.remove("active");
  menu1.classList.add("active");
  nav.classList.remove("nav-active");
  navitems.classList.add("hidden");
})


