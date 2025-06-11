const share = document.querySelector('.share')
const socials = document.querySelector('.socials')
const mode_changeDiv = document.querySelector('.mode_change')
const mode_change = document.querySelectorAll('.mode_change i')
const logo = document.querySelector('.logo img')
const preloader = document.querySelector('.loader_sec')

window.addEventListener('load', ()=>{
    preloader.remove()
})


// Codes to show and hide share icons

share.addEventListener('click', ()=>{
    socials.classList.toggle('show')
})

// Codes to set the theme automatically after refresh according to the theme in the localStorage

const savedTheme = localStorage.getItem('data-theme')
toggleTheme(savedTheme)

// Codes to set the respective icon automatically depending on the mode

if (savedTheme === 'dark') {
    mode_change[0].style.display = 'none'
    mode_change[1].style.display = 'block'
}else{
    mode_change[0].style.display = 'block'
    mode_change[1].style.display = 'none'
}

// Codes to change the icon depending on the mode

mode_change.forEach((icon)=>{
    icon.addEventListener('click', (e)=>{
        const iconAttr = e.target.getAttribute('mode')
        if (iconAttr === 'dark') {
            icon.style.display = 'none' 
            mode_change[1].style.display = 'block'       
            toggleTheme('dark')
        } else if(iconAttr === 'light'){
            icon.style.display = 'none' 
            mode_change[0].style.display = 'block' 
            toggleTheme('light')
        }
    })
})

// Function to change the wave color for each theme

function toggleTheme(mode) {
    const waveDetails = document.querySelector('g')

    if(mode === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        logo.src = "assets/images/dark_logo.png"
        localStorage.setItem('data-theme', 'light')

        waveDetails.innerHTML = `
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        `
    } else if(mode === 'dark'){
        document.documentElement.setAttribute('data-theme', 'dark');
        logo.src = "assets/images/light_logo.png"
        localStorage.setItem('data-theme', 'dark')

        waveDetails.innerHTML = `
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7)" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#000" />
        `
    }
}

// Code to show and hide nav

const show_nav = document.querySelector('header span i')
const hide_nav = document.querySelector('nav span i')
const nav = document.querySelector('nav')

// console.log(show_nav, hide_nav);

show_nav.addEventListener('click', ()=>{
    nav.classList.add('show_nav')
    show_nav.style.display = 'none'
    
    mode_changeDiv.classList.add('show_mode')
})

hide_nav.addEventListener('click', ()=>{
    nav.classList.remove('show_nav')
    show_nav.style.display = 'block'
    mode_changeDiv.classList.remove('show_mode')
})


// Set the Year based on the current date
const year = document.querySelector('.copyRight span')
const currentYear = new Date().getFullYear()
year.innerText = currentYear