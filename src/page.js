import './style/pages.css'

// ENTER PROJECT

const mainProjectElement = document.querySelector('.main_project')
const cursorCircleElement = document.querySelector('.js_cursor_circle')
const imageProjectElement = document.querySelector('.image_slider')

console.log('hey')

var delayFunction

mainProjectElement.addEventListener('mouseenter', ()=>
{
  cursorCircleElement.classList.add('animation')
  
  delayFunction = setTimeout(() => {
}, 4000);
})

mainProjectElement.addEventListener('mouseleave', ()=>
{
  clearTimeout(delayFunction)
  cursorCircleElement.classList.remove('animation')
})


imageProjectElement.addEventListener('click', ()=>
{
  if(document.location.href == 'http://192.168.0.23:8080/atomium.html')
  {
    document.location.href = './atomium_page.html'
  }  
  else if (document.location.href == 'http://192.168.0.23:8080/sun.html')
  {
    document.location.href = './sun_page.html'
  }  
  else if (document.location.href == 'http://192.168.0.23:8080/arty.html')
  {
    document.location.href = './arty_page.html'
  }
  else if (document.location.href == 'http://192.168.0.23:8080/dev.html')
    document.location.href = './dev_page.html'
  else if (document.location.href == 'http://192.168.0.23:8080/illus.html')
    document.location.href = './illus_page.html'
})