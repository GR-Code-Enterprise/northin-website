function historyCarousel()
{
    const carousel = document.querySelector(".history2__container__right__carousel")
    const nextBtn = document.querySelector(".history2__container__right__nextBtn")
    const slider = document.querySelector(".history2__container__right__carousel__slider")
    const slides = slider.querySelectorAll(".history2__container__right__carousel__slider__item");

    const slideSize = slides[0].offsetWidth + 70
    let index = 0;

    const object = [
        {
            'marca': "<strong>Marca:</strong> Ice Caipi Drink",
            'cliente': "<strong>Clientes:</strong> Leandro Ammirate <br class='d-none d-md-block'>& David",
            'href': "./experiencias/ice-caipi-drink.html",
        },
        {
            'marca': "<strong>Marca:</strong> Ice Caipi Drink 2",
            'cliente': "<strong>Clientes:</strong> Leandro Ammirate <br class='d-none d-md-block'>& David 2",
            'href': "./experiencias/ice-caipi-drink.html",
        },
        {
            'marca': "<strong>Marca:</strong> Ice Caipi Drink 3",
            'cliente': "<strong>Clientes:</strong> Leandro Ammirate <br class='d-none d-md-block'>& David 3",
            'href': "./experiencias/ice-caipi-drink.html",
        },
    ]


    nextBtn.addEventListener("click", (e) => {
        index = index >= (slides.length - 1) ? 0 : index + 1;
        changeSlide()
        changeText()
    })


    function changeSlide(){
        slider.style.transform = `translateX(-${slideSize * index}px)`
    }



    const infoMarca = document.querySelector(".history2__container__right__carousel__info__marca")
    const infoCliente = document.querySelector(".history2__container__right__carousel__cliente")
    const infoCTA = document.querySelector(".history2__container__right__carousel__cta")

    function changeText()
    {
        infoCTA.href = object[index].href
        
        infoMarca.style.top = '8px'
        infoMarca.style.opacity = 0

        infoCliente.style.top = '8px'
        infoCliente.style.opacity = 0
        
        setTimeout(() => {
            infoMarca.innerHTML = object[index].marca
            infoCliente.innerHTML = object[index].cliente

            infoMarca.style.top = 0
            infoMarca.style.opacity = 1
            
            infoCliente.style.top = 0
            infoCliente.style.opacity = 1
        }, 100);
    }
}
historyCarousel()