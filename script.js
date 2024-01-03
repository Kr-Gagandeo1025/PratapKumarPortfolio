function slider(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}
slider();

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-section h1",{
    y:20,
    opacity:0,
    duration:1,
})

gsap.from(".about h1",{
    scrollTrigger:{
        trigger:'.about h1',
        top:30,
    },
    y:40,
    opacity:0,
    duration:1,
    delay:0.25
})
gsap.from(".abt-text",{
    scrollTrigger:{
        trigger:'.abt-text',
        top:-10,
    },
    y:40,
    opacity:0.5,
    duration:1,
    delay:0.25
})
gsap.from(".gallery h1",{
    scrollTrigger:{
        trigger:'.gallery',
    },
    y:40,
    opacity:0,
    duration:1,
    delay:0.25
})
gsap.from(".contact h1",{
    scrollTrigger:{
        trigger:'.contact',
    },
    y:40,
    opacity:0,
    duration:1,
    delay:0.25
})
gsap.from(".fb-cnt p",{
    scrollTrigger:{
        trigger:'.fb-cnt',
    },
    y:40,
    opacity:0,
    duration:1,
    delay:0.25
})
gsap.from(".fb-posts h1",{
    scrollTrigger:{
        trigger:'.fb-posts h1',
    },
    y:40,
    opacity:0,
    duration:1,
    delay:0.25
})

