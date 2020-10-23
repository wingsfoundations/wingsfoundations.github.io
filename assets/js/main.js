
//----------------for hamburger menu
const menu = document.querySelector('.hamburger-menu-options');
const menuOpenBtn = document.querySelector('.hamburger-open-btn');
const menuCloseBtn = document.querySelector('.hamburger-close-btn');

menuOpenBtn.addEventListener('click', e=>{
    menu.classList.add('hamburger-menu-options-open');

    document.querySelector('body').addEventListener('click' , e=>{
        if(!e.target.classList.contains('hamburger-menu-options') && menu.clientWidth !== 0){
            menu.classList.remove('hamburger-menu-options-open');
        }
    })
})

menuCloseBtn.addEventListener('click', e=>{
    menu.classList.remove('hamburger-menu-options-open');
    
})


//------ for smooth scroll function 
// on smooth-scroll class

var scroll = new SmoothScroll('.smooth-scroll', {
    speed:600,
    updateURL:false,
    offset:40
});