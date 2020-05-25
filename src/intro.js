import './style/intro.css'

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