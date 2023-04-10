/*show menu*/

const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/*---MENU SHOW--*/
/*validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*---MENU HIDDEN--*/
/*validate if constant exists*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*---REMOVE MENU MOBILE---*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

/*---CHANGE BACKGROUND HEADER---*/
function scrollHeader(){
    const header = document.getElementById('header')
    
    if(this.scrollY >= 100) header.classList.add('scroll-header');else header.classList.remove('scroll-header')

}

window.addEventListener('scroll',scrollHeader)

/*---swiper---*/
var swiper = new Swiper(".discover-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    spaceBetween:32,
    coverflowEffect: {
      rotate: 0,
   
    },
   
  });

  /*--video--*/

  const videoFile = document.getElementById('video-file'),
        videoButton = document.getElementById('video-button'),
        videoIcon = document.getElementById('video-icon')

function playpause(){
    if(videoFile.paused){
        videoFile.play()


        videoIcon.classList.add('fa-pause')
        videoIcon.classList.remove('fa-play')
        
    }else{
        videoFile.pause()

        videoIcon.classList.remove('fa-pause')
        videoIcon.classList.add('fa-play')
    }
}
videoButton.addEventListener('click', playpause)

function finalVideo(){

    videoIcon.classList.remove('fa-pause')
    videoIcon.classList.add('fa-play')
}
videoFile.addEventListener('ended', finalVideo)

/*---show scroll up---*/
function scrollup(){
    const scrollup=document.getElementById('scroll-up');

    if(this.scrollY>=200)scrollup.classList.add('show-scroll');else scrollup.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollup)

/*---scroll sections active link---*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY= window.pageYOffset;
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*---dark light mode---*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-bolt'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')



const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-cloud' :'fa-bolt'


if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-cloud' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})