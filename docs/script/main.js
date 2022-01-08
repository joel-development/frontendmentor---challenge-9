const toggle = document.getElementById('toggle-menu')
const menu = document.getElementById('menu')

toggle.addEventListener('click', ()=>
{
  menu.classList.toggle('menu--on')
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