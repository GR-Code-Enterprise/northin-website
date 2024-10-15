const changePage = {
    xmlLoad(url){
        const xml = new XMLHttpRequest();

        xml.onreadystatechange = function(){
            if(xml.readyState == 4 && xml.status == 200){
                document.body.innerHTML = xml.responseText
            }
        }
        
        xml.open("GET", url, true)
        xml.send()
    },

    init(){

    },
}

export default changePage;