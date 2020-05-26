import './style/main.css'

import barba from '@barba/core';
import gsap from 'gsap';

const projectName = document.querySelector('.project_name')

// BARBA TRANSITIONS 

barba.init
({
  transitions:
  [{
    name: 'slider-transitions', 
    beforeLeave()
    {
      gsap.to(projectName, {color: red, duration: 2})
    }
  }]
})

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

// LINK OF THE ACTUAL PAGE 
var documentLocation = document.location.href
console.log(documentLocation)

function redirectionNextPage ()
{
  if(documentLocation == 'http://192.168.0.23:8080/index.html' || documentLocation == 'http://192.168.0.23:8080/')
  {
    document.location.href = 'atomium.html'
  }else 
  if (documentLocation == 'http://192.168.0.23:8080/sun.html')
  {
    document.location.href = 'arty.html'
  }else 
  if (documentLocation == 'http://192.168.0.23:8080/arty.html')
  {
    document.location.href = 'dev.html'
  }else 
  if (documentLocation == 'http://192.168.0.23:8080/dev.html')
  {
    document.location.href = 'illus.html'
  }else 
  if (documentLocation == 'http://192.168.0.23:8080/atomium.html')
  {
    document.location.href = 'sun.html'
  }
  else 
  if (documentLocation == 'http://192.168.0.23:8080/illus.html')
  {
    document.location.href = 'about.html'
  }
}

function redirectionPreviousPage ()
{
  if(documentLocation == 'http://192.168.0.23:8080/dev.html')
  {
    document.location.href = 'arty.html'
  }else 
  if (documentLocation == 'http://192.168.0.23:8080/sun.html')
  {
    document.location.href = 'atomium.html'
  }else 
  if (documentLocation == 'http://192.168.0.23:8080/arty.html')
  {
    document.location.href = 'sun.html'
  }else 
  if (documentLocation == 'http://192.168.0.23:8080/illus.html')
  {
    document.location.href = 'dev.html'
  }else 
  if (documentLocation == 'http://192.168.0.23:8080/atomium.html')
  {
    document.location.href = 'index.html'
  }
  if (documentLocation == 'http://192.168.0.23:8080/about.html')
  {
    document.location.href = 'illus.html'
  }
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