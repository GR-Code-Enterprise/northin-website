function scrollControl()
{
    const buttons = document.querySelectorAll(".scrollControl button");



    buttons.forEach(element => {
        element.addEventListener("click", (e) => {
            e.preventDefault()

            if(!element.classList.contains("scrollControl__btn--show")) return

            if(element.classList.contains("scrollControl__topBtn"))
            {
                scrollTo(0)
            }
            else{
                scrollTo(document.body.offsetHeight)
            }
        })    
    });



    window.addEventListener("scroll", () => {
        console.log(window.scrollY)
        if(window.scrollY > 1500){
            buttons[0].classList.add("scrollControl__btn--show")
        }
        else{
            buttons[0].classList.remove("scrollControl__btn--show")
        }

        if(window.scrollY > 3500)
        {
            buttons[1].classList.remove("scrollControl__btn--show")
        }
        else{
            buttons[1].classList.add("scrollControl__btn--show")
        }
    })

    function scrollTo(topValue)
    {
        window.scroll({
            top: topValue,
            left: 0,
            behavior: 'smooth',
        })
    }
}

if(innerWidth > 991)
    scrollControl()