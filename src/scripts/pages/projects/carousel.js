function projectsCarousel()
{
    const nextBtn = document.querySelector(".otherProjects__container__carousel__nextBtn")
    const slider = document.querySelector(".otherProjects__container__carousel__slider")
    const slides = document.querySelectorAll(".otherProjects__container__carousel__slider__item");

    let count = innerWidth > 991 ? 4 : 
                innerWidth > 768 ? 3 :
                innerWidth > 568 ? 2 : 1;
    let index = 0;

    if(innerWidth < 1400 && innerWidth > 568)
        setWith()

    const slideSize = slides[0].offsetWidth + 30;

    nextBtn.addEventListener("click", (e) => {
        index = index >= (slides.length - count) ? 0 : index + 1;
        
        changeSlide()

        if(innerWidth <= 991){
            slides[index == 0 ? slides.length - 1 : index - 1].classList.remove("otherProjects__container__carousel__slider__item--show")
            slides[index == 1 ? count : count + (index - 1)].classList.add("otherProjects__container__carousel__slider__item--show")
    
            if(index == 0){
                slides[0].classList.add("otherProjects__container__carousel__slider__item--show")
    
                if(innerWidth > 568)
                    slides[1].classList.add("otherProjects__container__carousel__slider__item--show")
    
                if(innerWidth > 768)
                    slides[2].classList.add("otherProjects__container__carousel__slider__item--show")
    
                if(innerWidth > 991)
                    slides[3].classList.add("otherProjects__container__carousel__slider__item--show")
                
                // Remove
                if(innerWidth > 568)
                    slides[slides.length - 2].classList.remove("otherProjects__container__carousel__slider__item--show")
            }
        }
    })

    function setClassShow()
    {
        slides[0].classList.add("otherProjects__container__carousel__slider__item--show")
        
        if(innerWidth > 568){
            slides[1].classList.add("otherProjects__container__carousel__slider__item--show")
        }

        if(innerWidth > 768){
            slides[2].classList.add("otherProjects__container__carousel__slider__item--show")
        }
        
        if(innerWidth > 991){
            slides[3].classList.add("otherProjects__container__carousel__slider__item--show")
        }
    }
    if (innerWidth <= 991)
        setClassShow()


    function setWith(){
        const marginValue = innerWidth > 991 ? 10 : 
                            innerWidth > 768 ? 13 : 19
        const calc = ((innerWidth / count) - (30 + marginValue))
        slides.forEach(element => {
            element.style.minWidth = calc + "px"
        });
    }

    function changeSlide(){
        slider.style.transform = `translateX(-${slideSize * index}px)`
    }
}
projectsCarousel()