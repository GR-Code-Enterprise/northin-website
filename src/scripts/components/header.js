const header = {
    parent: document.getElementById("header"),
    nav: document.querySelector(".header__container__nav"),
    links: document.querySelectorAll(".header__container__nav__link"),

    clickLink(){
    },

    scroll(){
        window.addEventListener("scroll", (e) => {
            if(window.scrollY >= (innerWidth > 991 ? 80 : 5)){
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
        this.clickLink()
        this.scroll()

        if(innerWidth <= 991) this.mobileMenu()
    },
}
setTimeout(() => {
    header.init()
}, 200);