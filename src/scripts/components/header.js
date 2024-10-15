const header = {
    parent: document.getElementById("header"),
    nav: document.querySelector(".header__container__nav"),

    scroll(){
        window.addEventListener("scroll", (e) => {
            if(window.scrollY >= (innerWidth > 991 ? 80 : 20)){
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
            console.log(menuBtn)
            this.parent.classList.toggle("header--openMenu")
        })
    },

    init(){
        this.scroll()

        if(innerWidth <= 991) this.mobileMenu()
    },
}
setTimeout(() => {
    header.init()
}, 200);