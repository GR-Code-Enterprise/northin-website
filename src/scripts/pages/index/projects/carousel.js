function projectsCarousel()
{
    const nextBtn = document.querySelector(".projects__container__carousel__nextBtn")
    const slider = document.querySelector(".projects__container__carousel__slider")
    const slides = document.querySelectorAll(".projects__container__carousel__slider__item");

    let count = innerWidth > 768 ? 3 :
                innerWidth > 568 ? 2 : 1;
    let index = 0;

    if(innerWidth < 1400 && innerWidth > 568)
        setWith()

    const slideSize = slides[0].offsetWidth + 40;

    nextBtn.addEventListener("click", (e) => {
        index = index >= (slides.length - count) ? 0 : index + 1;
        changeSlide()
    })


    function setWith(){
        const marginValue = innerWidth > 768 ? 6 : 10
        const calc = ((innerWidth / count) - (40 + marginValue))
        console.log(calc)

        slides.forEach(element => {
            element.style.minWidth = calc + "px"
        });
    }

    function changeSlide(){
        slider.style.transform = `translateX(-${slideSize * index}px)`
    }
}

if(innerWidth < 991)
    projectsCarousel()