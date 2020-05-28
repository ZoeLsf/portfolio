import './style/main.css'
import './style/about.css'
import './style/intro.css'
import './style/pages.css'
import barba from '@barba/core'
import gsap from 'gsap';

function delay(n) {
  n = n || 2000
  return new Promise ((done) => {
    setTimeout(() => {
      done()
    }, n);
  })
}

function pageTransition(){
  var tl = gsap.timeline()
  tl.to(".loading-screen", 
  {
    duration: 1.2, 
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut"
  })

  tl.to(".loading-screen", 
  {
    duration: 1, 
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  })

  tl.set("loading-screen", {left: "-100%"})
}

function contentAnimation(){
  var tl = gsap.timeline()
  tl.from(".animate_this", {duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2})
}

barba.init({
    transitions: [{
        name: 'default-transition',
        async leave(data) {
          const done = this.async()
          pageTransition()
          await delay(1000)
          done()
            // return gsap.to(data.current.container, {
            //     opacity: 0
            // });
        },
        async enter(data) {

          contentAnimation
            // return gsap.from(data.next.container, {
            //     opacity: 0,delay : 2
            // });
        }


    }]
});



// ENTER PROJECT

const mainProjectElement = document.querySelector('.main_project')
const cursorCircleElement = document.querySelector('.js_cursor_circle')
const imageElement = document.querySelector('.js_image_slider')

// SCROLL 

// INITIALIZATION OF THE SCROLLER BOOLEAN VARIABLE 
var scroll = false

// AFTER 2 SECONDs IT RETURNS TRUE TO ALLOW TO CONTINUE SCROLLING
setTimeout(() => {
  scroll = true;
}, 2000);

const forwardArrowElement = document.querySelector('.js_forward_arrow')
const backArrowElement = document.querySelector('.js_back_arrow')
// LINK OF THE ACTUAL PAGE 

function redirectionNextPage ()
{
  forwardArrowElement.click()
  console.log('hey')
}

function redirectionPreviousPage ()
{
  backArrowElement.click()
}



// document.addEventListener('wheel', function(_e)
// {
//   if (scroll)
//   {
//     if (_e.deltaY > 0)
//     { 
//       scroll = false
//       redirectionNextPage()
//     } else if (_e.deltaY < 0)
//     {
//       scroll = false 
//       redirectionPreviousPage()
//     }
//   }
// })


// // NEXT PROJECT

// var delayFunction

// mainProjectElement.addEventListener('mouseenter', ()=>
// {
//   cursorCircleElement.classList.add('animation')
  
//   delayFunction = setTimeout(() => {

//     forwardArrowElement.click()

//   }, 10000);
// })

// mainProjectElement.addEventListener('mouseleave', ()=>
// {
//   clearTimeout(delayFunction)
//   cursorCircleElement.classList.remove('animation')
// })

// ANIMATION IMAGE

const projectDateElement = document.querySelector('.js_project_date')
const projectClickElement = document.querySelector('.js_project_click')

imageElement.addEventListener('mouseenter', ()=>
{
  gsap.to(imageElement, {scale: 1.1, duration: 0.5})
  projectDateElement.style.display = 'none'
  projectClickElement.style.display = 'block'
  console.log('heyyyyy')
})

imageElement.addEventListener('mouseleave', ()=>
{
  gsap.to(imageElement, {scale: 1, duration: 1})
  projectDateElement.style.display = 'block'
  projectClickElement.style.display = 'none'
})