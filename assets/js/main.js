const btnBars = document.querySelector('.btn-bars');
const btnBarsIcon = document.querySelector('.btn-bars i');
const btnBarsMenu = document.querySelector('.header-nav-mobile');
// console.log(btnBars);
// console.log(btnBarsIcon);
// console.log(btnBarsMenu);
btnBars.onclick = function() {
    btnBarsMenu.classList.toggle('open');
    const isOpen = btnBarsMenu.classList.contains('open');

    btnBarsIcon.classList = isOpen ?
        'fa-solid fa-xmark btn-socials' : 'fa-sharp fa-solid fa-bars btn-socials';
}