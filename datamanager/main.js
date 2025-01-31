/**
 * @typedef {{nev:String, eletkor:Number}} Person
 * @callback UpdateCallBack
 * @param {Person[]} person
 * @returns {void}
 * 
 */

class DataManager {
    /**
     * @type {Person[]}
    */
    #array

    /**
     * @type {UpdateCallBack}
     */
    #callback
/**
 * @param {Person} array
 */
    constructor(array = []) {
        this.#array = array
        this.#callback = () => {}
    }

    /**
     * 
     * @param {UpdateCallBack} callback 
     */

    setUpdateCallback(callback) {
        this.#callback = callback
        this.#callback(this.#array)
    }


    /**
     * 
     * @param {Person[]} asd 
     */
    add(asd){
        this.#array.push(asd)
        this.#callback(this.#array)
    }

    /**
     * 
     * @param {String} name 
     */

    filterName(name) {
        const result = []
        for (const item of this.#array) {
            if (item.nev.includes(name)) {
                result1.push(item)
            }
        }
        this.#callback(result)
    }
    
    /**
     * 
     * @param {Number} age 
     */
    filterAge(age){
        const result = []
        for (const item of this.#array) {
            if (item.eletkor === age) {
                result2.push(item)
            }
        }
        this.#callback(result)
    }
}

class DataTable {
    /**
     * @param {DataManager} dataManager
     */

    constructor(dataManager){
        const table = document.createElement('table')
        document.body.appendChild(table)
        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        dataManager.setUpdateCallback((data) => {
            tbody.innerHTML = ''
            for (const item of data) {
                const tr = document.createElement('tr')
                tbody.appendChild(tr)
                const td1 = document.createElement('td')
                td1.innerHTML = item.nev
                tr.appendChild(td1)
                const td2 = document.createElement('td')
                td2.innerHTML = item.eletkor
                tr.appendChild(td2)
            }
        })
    }
}

const dataManager = new DataManager([
    {nev: 'Józsi', eletkor: 20},
    {nev: 'Pista', eletkor: 25},
    {nev: 'Géza', eletkor: 30},
    {nev: 'Béla', eletkor: 35},
    {nev: 'Sanyi', eletkor: 40},
])
const dataTable = new DataTable(dataManager)

const input1 = document.createElement('input')
document.body.appendChild(input1)


const input2 = document.createElement('input')
document.body.appendChild(input2)