function AboutCarousel()
{
    const carousel = document.querySelector(".about__container__right__carousel")
    const rightArrow = document.querySelector(".about__container__right__carousel__rightArrow")
    const slider = document.querySelector(".about__container__right__carousel__slider")
    const slides = slider.querySelectorAll("img");

    const slideSize = slides[0].offsetWidth
    let index = 0;


    rightArrow;addEventListener("click", (e) => {
        index = index >= (slides.length - 1) ? 0 : index + 1;
        changeSlide()
    })


    function changeSlide(){
        console.log(index)
        slider.style.transform = `translateX(-${slideSize * index}px)`
    }
}
AboutCarousel()