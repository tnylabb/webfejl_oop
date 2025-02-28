/**
 * @callback NextQuestionCallBack
 * @param {string} kerdes a kerdes szoveget tartalmazza
 * 
 * @callback NextAnswerCallBack
 * @param {string[]} valaszok a valaszokat tartalmazza
 * 
 * @callback FinishCallBack
 * @param {string} result a vegeredmeny szoveget tartalmazza
 */

class Manager{
    /**
     * @type {Question[]}
     */
    #array

    /**
     * @type {number}
     */
    #currentQuestionNumber

    /**
     *  @type {Object}
     */
    #selectedAnswer

    /**
     * @type {NextQuestionCallBack}
     */
    #nextQuestionCallback

    /**
     * @type {NextAnswersCallBack}
     */
    #nextAnswersCallback

    /**
     * @type {FinishCallBack}
     */
    #finishCallback


    /**
     * @param {Question[]} array
     */
    constructor (array = []) {
        this.#array = array
        this.#currentQuestionNumber = 0
        this.#selectedAnswer = {}
    }


    /**
     * @param {NextQuestionCallBack} callback
     */
    setNextQuestionCallback(callback){
        this.#nextQuestionCallback = callback
    }

    /**
     * @param {NextAnswersCallBack} callback
     */
    setNextAnswerCallback(callback){
        this.#nextAnswersCallback = callback
    }

    /**
     * @param {FinishCallBack} callback
    */ 
    setFinishCallback(callback){
        this.#finishCallback = callback
    }

    nextQuestion(answer){
        this.#selectedAnswer[this.#currentQuestionNumber] = answer
        this.#currentQuestionNumber++
        if(this.#currentQuestionNumber < this.#array.length){
            const nextQuestion = this.#array[this.#currentQuestionNumber]
            this.#nextQuestionCallback(nextQuestion.questionText)
            this.#nextAnswersCallback(nextQuestion.answers)
            }
            else {
                let counter = 0
                for(const index in this.#array){
                    if(this.#array[index].rightAnswer === this.#selectedAnswer[index]){
                        counter++
                    }
                }
                const result = `Eredmeny: ${this.#array.length}/${counter}`
                this.#finishCallback(result)
            }
        }
    }


    /**
     *  Megjeleniti az elso kerdest es valaszlehetosegeket 
    */
    // start() {
    //     this.#nextQuestionCallback(this.#array[0].questionText)
    //     this.#nextAnswersCallback(this.#array[0].answers)
    // }