import './style/pages.css'

const nextProjectElement = document.querySelector('.js_next_project')
const cursorCircleElement = document.querySelector('.js_cursor_circle')
const clickTextElement = document.querySelector('.js_click')

// AUTOMATIC NEXT PROJECT 

// Initialization of the funtion delay 
var delayFunction

nextProjectElement.addEventListener('mouseenter', ()=>
{
    cursorCircleElement.classList.add('animation')
    clickTextElement.style.display = 'block'
    
    // Function delayFunction change go to the next project page after 10 seconds automaticaly 
    delayFunction = setTimeout(() => {

    if(document.location.href == 'http://192.168.0.23:8080/atomium_page.html')
    {
      document.location.href = './sun_page.html'
    }  
    else if (document.location.href == 'http://192.168.0.23:8080/sun_page.html')
    {
      document.location.href = './arty_page.html'
    }  
    else if (document.location.href == 'http://192.168.0.23:8080/arty_page.html')
    {
      document.location.href = './dev_page.html'
    }
    else if (document.location.href == 'http://192.168.0.23:8080/dev_page.html')
    {
        document.location.href = './illus_page.html'
    }
    else if (document.location.href == 'http://192.168.0.23:8080/illus_page.html')
    {
        document.location.href = './about.html'
    } 

  }, 10000);
})

// When the cursor is outside the div 
nextProjectElement.addEventListener('mouseleave', ()=>
{
    clickTextElement.style.display = 'none'

    // The delayFunction is clear 
    clearTimeout(delayFunction)

    // The animation of the cursor remove
    cursorCircleElement.classList.remove('animation')
})


// CLICK NEXT PROJECT 

nextProjectElement.addEventListener('click', ()=>
{
  if(document.location.href == 'http://192.168.0.23:8080/atomium_page.html')
  {
    document.location.href = './sun_page.html'
  }  
  else if (document.location.href == 'http://192.168.0.23:8080/sun_page.html')
  {
    document.location.href = './arty_page.html'
  }  
  else if (document.location.href == 'http://192.168.0.23:8080/arty_page.html')
  {
    document.location.href = './dev_page.html'
  }
  else if (document.location.href == 'http://192.168.0.23:8080/dev_page.html')
    document.location.href = './illus_page.html'
  else if (document.location.href == 'http://192.168.0.23:8080/illus_page.html')
    document.location.href = './about.html'
})