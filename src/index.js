import './style/main.css'

import barba from '@barba/core';
import gsap from 'gsap';




// CURSOR

const cursorElement = document.querySelector('.cursor')
const cursorPointerElement = document.querySelector('.cursor_pointer')

document.addEventListener('mousemove', (_event)=>
{

  // UPDATE CURSOR CIRCLE COORD 
  var cursorElementX = _event.clientX -25
  var cursorElementY = _event.clientY - 25
  

  gsap.to(cursorElement, { ease: "Power1.easeOut", x: cursorElementX+'px', y: cursorElementY+'px' })

  // UPDATE CURSOR POINTER COORD
  var cursorPointerElementX = _event.clientX - 5
  var cursorPointerElementY = _event.clientY - 5

  cursorPointerElement.style.top = cursorPointerElementY + 'px'
  cursorPointerElement.style.left = cursorPointerElementX + 'px'
})




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





