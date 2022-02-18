const hamburgerBtn = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

hamburgerBtn.addEventListener('click', () => {
  if (hamburgerBtn.ariaSelected) {
    mobileMenu.style.transform = 'translateX(100%)'
    hamburgerBtn.ariaSelected = false
  } else {
    mobileMenu.style.transform = 'translateX(0)'
    hamburgerBtn.ariaSelected = true
  }
})