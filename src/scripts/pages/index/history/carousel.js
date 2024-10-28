function historyCarousel()
{
    const carousel = document.querySelector(".history__container__right__carousel")
    const nextBtn = document.querySelector(".history__container__right__nextBtn")
    const slider = document.querySelector(".history__container__right__carousel__slider")
    const slides = slider.querySelectorAll(".history__container__right__carousel__slider__item");

    const slideSize = slides[0].offsetWidth + 70
    let index = 0;


    nextBtn.addEventListener("click", (e) => {
        index = index >= (slides.length - 1) ? 0 : index + 1;
        changeSlide()
    })


    function changeSlide(){
        slider.style.transform = `translateX(-${slideSize * index}px)`
    }
}
historyCarousel()