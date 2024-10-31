function topics() {
    const questions = document.querySelectorAll('.guides__container__topics__questions__question')
    const answers = document.querySelectorAll(".guides__container__topics__answers__answer")

    questions.forEach((question, index) => {
        question.addEventListener("click", (e) => {
            let timeout = 0
            const activeElement = document.querySelector(".guides__container__topics__questions__question--show")

            if(question == activeElement) return

            if(activeElement){
                timeout = 600
                activeElement.classList.remove("guides__container__topics__questions__question--show")
                document.querySelector(".guides__container__topics__answers__answer--show").classList.remove("guides__container__topics__answers__answer--show")
            }

            setTimeout(() => {
                question.classList.add("guides__container__topics__questions__question--show")
                answers[index].classList.add("guides__container__topics__answers__answer--show") 
            }, timeout);
        })
    });
}
topics()