import './style/main.css'
import './style/about.css'
import './style/intro.css'
import './style/pages.css'

const buttonElement = document.querySelector('.js_button')

buttonElement.addEventListener('mouseenter', ()=>
{
    buttonElement.classList.add('button_animation')
})

buttonElement.addEventListener('mouseleave', ()=>
{
    buttonElement.classList.remove('button_animation')
})

buttonElement.addEventListener('click', ()=>
{
    document.location = 'atomium.html'
})

// SCROLL 
const linkElement = document.querySelector('.link_slider')

// INITIALIZATION OF THE SCROLLER BOOLEAN VARIABLE 
var scroll = false

// AFTER 2 SECONDs IT RETURNS TRUE TO ALLOW TO CONTINUE SCROLLING
setTimeout(() => {
    scroll = true;
}, 2000);

function redirectionNextPage ()
{
    linkElement.click()
}

document.addEventListener('wheel', function(_e)
{
    if (scroll)
    {
        if (_e.deltaY > 0)
        { 
        scroll = false
        redirectionNextPage()
        }
    }
})