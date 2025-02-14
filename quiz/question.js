class QuestionArea{
    /**
     * @type {string}
     */
    #questionText

    /**
     * @type {string[]}
     */
    #answers

    /**
     * @type {string}
     */
    #rightAnswer

    /**
     * @returns {string[]} a valaszokat tartalmazza
     */
    get answers(){
        return this.#answers
    }

    /**
     * @returns {string} a kerdes szoveget tartalmazza
     *
    */
    get questionText(){
        return this.#questionText
    }

    /**
     * @returns {string} a helyes valaszt tartalmazza
    */
    get rightAnswer(){
        return this.#rightAnswer
    }

    /**
     * 
     * @param {string} questionText 
     * @param {string[]} answers 
     * @param {*} rightAnswer 
     */
    constructor(questionText, answers, rightAnswer){
        this.#questionText = questionText
        this.#answers = answers
        this.#rightAnswer = rightAnswer
    }
}