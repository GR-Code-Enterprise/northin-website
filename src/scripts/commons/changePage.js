const changePage = {
    divContent: document.querySelector("#content"),
    divLoading: document.querySelector(".loading"),
    contentLoaded: false,

    change(url){
        this.divLoading.classList.add("loading--active")

        setTimeout(() => {
            this.contentLoaded = true
        }, 1600);

        this.xmlLoad(url)
    },

    xmlLoad(url){
        const xml = new XMLHttpRequest();

        xml.onreadystatechange = function(){
            if(xml.readyState == 4 && xml.status == 200){
                changePage.divContent.innerHTML = xml.responseText

                const interval = setInterval(() => {
                    console.log(changePage)                    
                    if(changePage.contentLoaded){
                        clearInterval(interval)
                        changePage.contentLoaded = false
                        changePage.divLoading.classList.remove("loading--active")
                    }
                }, 500);
            }
        }
        
        xml.open("GET", url, true)
        xml.send()
    },

    init(){

    },
}

export default changePage;