const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('link');
console.log(navbarLinks);
for (let i = 0; i < navbarLinks.length; i++) {
    toggleButton.addEventListener('click', () => {
        navbarLinks[i].classList.toggle('active')
      })

  }

const navLogo = document.getElementsByClassName('nav-logo')[0];
toggleButton.addEventListener('click',()=>{
    navLogo.classList.toggle('active');
}
)

// const navLock = document.getElementsByClassName('lock')[0];
// toggleButton.addEventListener('click',()=>{
//     navLock.classList.toggle('active');
// }
// )