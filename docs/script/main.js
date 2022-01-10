const toggle = document.getElementById('toggle-menu')
const menu = document.getElementById('menu')
const header = document.getElementById('header')

toggle.addEventListener('click', ()=>
{
  menu.classList.toggle('menu--on')
})
toggle.addEventListener(('keypress'), ()=>
{
  menu.classList.toggle('menu--on')
})

window.addEventListener('scroll',()=>
{
  if(menu.classList.contains('menu--on'))
  {
    menu.classList.remove('menu--on')
  }
  if(window.scrollY > window.innerHeight - 100)
  {
    header.classList.add('header--scroll-bg')
  }
  else
  {
    header.classList.remove('header--scroll-bg')
  }
})

menu.addEventListener('click',(e)=>
{
  if(e.target.classList.contains('menu__display'))
  {
    e.target.classList.toggle('menu__display--active')
    e.target.nextElementSibling.classList.toggle('sub-menu--active')
    e.target.children[0].classList.toggle('arrow-icon--active')
  }
  else if(e.target.parentElement.classList.contains('menu__display'))
  {
    e.target.parentElement.classList.toggle('menu__display--active')
    e.target.parentElement.nextElementSibling.classList.toggle('sub-menu--active')
    e.target.classList.toggle('arrow-icon--active')
  }
})

// for tabindex
menu.addEventListener('keypress',(e)=>
{
  if(e.target.classList.contains('menu__display'))
  {
    e.target.classList.toggle('menu__display--active')
    e.target.nextElementSibling.classList.toggle('sub-menu--active')
    e.target.children[0].classList.toggle('arrow-icon--active')
  }
  else if(e.target.parentElement.classList.contains('menu__display'))
  {
    e.target.parentElement.classList.toggle('menu__display--active')
    e.target.parentElement.nextElementSibling.classList.toggle('sub-menu--active')
    e.target.classList.toggle('arrow-icon--active')
  }
})