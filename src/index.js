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
    // height: "100vh",
    // top: "0%",
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut"
  })

  tl.to(".loading-screen", 
  {
    duration: 1, 
    // height: "100vh",
    // top: "100%",
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  })

  tl.set("loading-screen", {
    left: "-100%"
    // top: "-100%"
  })
}

function contentAnimationEnter(){
  var tl = gsap.timeline()
  tl.from(".animate_this", {duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.5})
}

function contentAnimationLeave(){
  var tl = gsap.timeline()
  tl.from(".animate_this", {duration: 1, y: -30, opacity: 0, stagger: 0.4, delay: 0.5})
}

barba.init({
    transitions: [{
        name: 'default-transition',
        leave(data) {
          // const done = this.async()
          contentAnimationLeave()

          pageTransition()
          // await delay(1000)
          // done()
        },
        enter(data) {
          contentAnimationEnter()
        }


    }]
});
// CURSOR

// Cursor initialization
const cursor =
    {
        x:0,
        y:0,
        scrollY: 0,
        lastScrollY: 0
    }

const cursorElement = document.querySelector('.cursor')
const cursorPointerElement = document.querySelector('.cursor_pointer')

// Cursor mouve with the mouse 
document.addEventListener('mousemove', (_event)=>
{

  // UPDATE CURSOR CIRCLE COORD
    cursor.x = _event.clientX
    cursor.y = _event.clientY + cursor.scrollY
  gsap.to(cursorElement, { ease: "Power1.easeOut", x: cursor.x -25+'px', y: cursor.y - 25+'px' })

  // UPDATE CURSOR POINTER COORD

  cursorPointerElement.style.top = cursor.y -5 + 'px'
  cursorPointerElement.style.left = cursor.x-5 + 'px'
})

document.addEventListener('scroll', (_event)=>
    {
        cursor.y = cursor.y  + (window.pageYOffset - cursor.scrollY)
        cursor.scrollY = window.pageYOffset
        gsap.to(cursorElement, { ease: "Power1.easeOut", x: cursor.x -25+'px', y: cursor.y -25+'px' })
        cursorPointerElement.style.top = cursor.y -5 + 'px'
        cursorPointerElement.style.left = cursor.x -5 + 'px'
    }
);



// SCROLL 

// INITIALIZATION OF THE SCROLLER BOOLEAN VARIABLE 
var scroll = false

// AFTER 2 SECONDs IT RETURNS TRUE TO ALLOW TO CONTINUE SCROLLING
setTimeout(() => {
  scroll = true;
}, 2000);

function redirectionNextPage ()
{
  
}

function redirectionPreviousPage ()
{

}



document.addEventListener('wheel', function(_e)
{
  if (scroll)
  {
    if (_e.deltaY > 0)
    { 
      scroll = false
      redirectionNextPage()
    } else if (_e.deltaY < 0)
    {
      scroll = false 
      redirectionPreviousPage()
    }
  }
})