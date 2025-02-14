class Area {
    /**
     * @type {HTMLDivElement}
     */
    #div

    /**
     * @type {HTMLDivElement}
     */

    get Div() {
        return this.#div
    }

    /**
     * @param {String} cssClass
     */

    constructor(cssClass) {
        const container = this.#getContainer()
        this.#div = document.createElement('div')
        this.#div.className = cssClass
        container.appendChild(this.#div)
    }

    /**
     * @returns {HTMLDivElement}
     */
    #getContainer() {
        let container = document.querySelector('.container')
        if (!container) {
            container = document.createElement('div')
            container.className = 'container'
            document.body.appendChild(container)
        }        
        return container
    }
}

class QuestionArea extends Area {   

    /**
     * @param {string} cssClass
     * @param {manager} manager
     */
    constructor(cssClass, manager){
        super(cssClass)
        manager.setNextQuestionCallback((kerdesszoveg) => {
            this.Div.innerHTML = ''
            const quCard = document.createElement('div')
            questionCard.innerHTML = kerdesszoveg
            quCard.textContent = kerdesszoveg
            this.Div.appendChild(quCard)
        })
    }
}

class AnswerArea extends Area {
    constructor(cssClass, manager){
        super(cssClass)
        manager.setNextAnswersCallback((valaszok) => {
            this.Div.innerHTML = ''
            for(const valasz of valaszok){
                const answerCard = document.createElement('div')
                answerCard.className = 'item'
                answerCard.innerHTML = valasz
                answerCard.addEventListener('click', () => {
                    manager.nextQuestion(valasz)
                })
                this.Div.appendChild(answerCard)
            }
        })
    }
}