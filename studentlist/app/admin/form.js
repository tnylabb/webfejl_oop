class FormController {
    /** 
     * @type {Manager}
     */
    #manager;

    /**
     * @type {FormField[]}
     * */

    #formFieldArray;

    /**
     * @param {{id: string, label: string, type: string, optional: boolean}[]} fieldConfiguration
     * @param {Manager} manager
     */
    constructor(fieldConfiguration, manager){
        this.#formFieldArray = [];
        this.#manager = manager;
        const form = document.createElement('form');
        document.body.appendChild(form);
        for(const field of fieldConfiguration){
            const formField = new FormField(field.id,field.label,field.type,field.optional);
            this.#formFieldArray.push(formField.getDivElement());
            form.appendChild(formField.getDivElement());            
        }

        const sendButton = document.createElement('button');
        sendButton.textContent = 'Elküld';
        form.appendChild(sendButton);
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(this.#validateAllFields()){
                const value = this.#getValueObject();
                console.log(value);
            }
            // validaljuk a formfield elementeket, es megjelenitjuk a hibauzeneteket
            // elkerjuk a formfieldek ertekeitű
            // hozzaadjuk a managerhez
            // reseteljuk a formot
        });
    }

    #validateAllFields(){
        let valid = true;
        for(const field of this.#formFieldArray){
            if(!field.optional){
                if(field.value === ''){
                    field.error = 'Kötelező mező';
                    valid = false;
                }
            }
        }
        return valid;
    }


    #getValueObject(){
        const result = {};
        for(const formField of this.#formFieldArray){
            result[formField.id] = formField.value;
        }
        return result;
    }
}


class FormField{
    /**
     * @type {string}
     */
    #id;

    /**
     * @type {string}
     */
    #type;

    /**
     * @type {boolean}
     */
    #optional;

    /**
     * @type {HTMLInputElement}
     */
    #inputField;

    /**
     * @type {HTMLSpanElement}
     */
    #errorField;

    /**
     * @type {HTMLLabelElement}
     */
    #labelElement;

    get id(){
        return this.#id;
    }


    /**
     * @returns {string | boolean} az input field értéke
     */
    get value(){
        if(this.#type === 'checkbox'){
            return this.#inputField.checked;
        }
            return this.#inputField.value;
    }

    get optional(){
        return this.#optional;
    }

    // @param {string | boolean} value ami az error spanjanak a tartalma lesz
    set error(value){
        this.#errorField.textContent = value;
    }    

    constructor(id,labelContent, type, optional=false){
        this.#id = id;
        this.#type = type;
        this.#optional = optional;
        this.#labelElement = Gomszab.makeLabel(id,labelContent);
        this.#inputField = Gomszab.makeInput(id,type);
        this.#errorField = Gomszab.makeErrorField();
    }

    getDivElement(){
        const div = Gomszab.makeDiv([this.#labelElement,this.#inputField,this.#errorField]);
        return div;
    }
}