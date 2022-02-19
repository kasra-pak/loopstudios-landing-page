const hamburgerBtn = document.querySelector('.hamburger-menu')
const mobileMenu = document.querySelector('.mobile-menu')

hamburgerBtn.addEventListener('click', () => {
  if (hamburgerBtn.ariaSelected) {
    mobileMenu.style.transform = 'translateX(100%)'
    hamburgerBtn.style.background = "url('/images/icon-hamburger.svg') no-repeat center"
    hamburgerBtn.ariaSelected = false
  } else {
    mobileMenu.style.transform = 'translateX(0)'
    hamburgerBtn.style.background = "url('/images/icon-close.svg') no-repeat center"
    hamburgerBtn.ariaSelected = true
  }
})