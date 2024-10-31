function topics() {
    const questions = document.querySelectorAll('.guides__container__topics__topic__question')
    const answers = document.querySelectorAll(".guides__container__topics__topic__answer")

    questions.forEach((question, index) => {
        question.addEventListener("click", (e) => {
            let timeout = 0
            const activeElement = document.querySelector(".guides__container__topics__topic__question--show")

            if(activeElement){
                timeout = 150

                activeElement.classList.remove("guides__container__topics__topic__question--show")
                document.querySelector(".guides__container__topics__topic__answer--show").classList.remove("guides__container__topics__topic__answer--show")

                if(innerWidth < 991){
                    activeElement.parentNode.style.height = "58px"
                }
            }

            if(question == activeElement) return

            setTimeout(() => {
                question.classList.add("guides__container__topics__topic__question--show")
                answers[index].classList.add("guides__container__topics__topic__answer--show") 

                if(innerWidth < 991){
                    question.parentNode.style.height = (question.parentNode.offsetHeight + answers[index].offsetHeight + 30) + "px"
                }
            }, timeout);
        })
    });
}
topics()