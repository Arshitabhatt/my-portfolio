$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

AOS.init({
    duration: 1500,
    once: false});



const navSlide = ()=>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation=''
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+ 0.7}s`;
            }   
        })
        burger.classList.toggle('toggle')
        // nav.style.height = "100%";
    })
    // navLinks.addEventListener('click', () => {
    //     nav.classList.add('nav-collapse')
    // })   
}
navSlide()



var typed2 = new Typed('.element', {
    strings: ['This area types random stuff', 'Every life weaves it own fairytales', 'I code magic ♥', 'Tea and ASCII ☕', 'Made in 2020'],
    typeSpeed: 80,
    backDelay: 500,
    // fadeOut: true,
    loop: true
  });