const header = {
    parent: document.getElementById("header"),
    nav: document.querySelector(".header__container__nav"),
    links: document.querySelectorAll(".header__container__nav__link"),
    brandLink: document.querySelector(".header__brandLink"),

    clickBrandLink(){
        this.brandLink.addEventListener("click", (e) => {
            if(location.pathname.includes('index')){
                e.preventDefault()
            }
            else return

            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        })
    },

    scroll(){
        window.addEventListener("scroll", (e) => {
            if(window.scrollY >= (innerWidth > 991 ? 80 : 15)){
                this.parent.classList.add("header--scroll")
            }
            else{
                this.parent.classList.remove("header--scroll")
            }
        });
    },

    mobileMenu(){
        const menuBtn = document.querySelector(".header__container__menuBtn")

        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("header__container__menuBtn--close")
            this.parent.classList.toggle("header--openMenu")
        })
    },

    init(){
        this.clickBrandLink()
        this.scroll()

        if(innerWidth <= 991) this.mobileMenu()
    },
}
setTimeout(() => {
    header.init()
}, 200);