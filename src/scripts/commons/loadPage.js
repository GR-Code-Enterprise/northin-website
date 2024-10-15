const loadPage = {
    init(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    },
}
setTimeout(() => {
    loadPage.init()
}, 100);