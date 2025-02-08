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
 * @param {Person[]} array
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
     * @param {Person} person 
     */
    add(person){
        this.#array.push(person)
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
                result.push(item)
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
            if (item.eletkor == age) {
                result.push(item)
            }
        }
        this.#callback(result)
    }


    filter(filterCallback) {
        const result = []
        for (const item of this.#array) {
            if (filterCallback(item)) {
                result.push(item)
            }
        }
        this.#callback(result)
    }

    order(compareFunction) {
        const sortedArray = [...this.#array].sort(compareFunction);
        this.#callback(sortedArray);
    }

    orderByAge() {
        this.order((a, b) => b.eletkor - a.eletkor);
    }

    orderByName() {
        this.order((a, b) => b.nev.localeCompare(a.nev));
    }
}

class DataTable {
    /**
     * @param {DataManager} dataManager
     */

    constructor(dataManager){
        const table = document.createElement('table')
        document.body.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)
        const tr = document.createElement('tr')
        thead.appendChild(tr)

        const th1 = document.createElement('th')
        th1.innerHTML = 'Name'
        tr.appendChild(th1)
        th1.addEventListener('click', () => {
            dataManager.orderByName()
        })

        const th2 = document.createElement('th')
        th2.innerHTML = 'Age'
        tr.appendChild(th2)
        th2.addEventListener('click', () => {
            dataManager.orderByAge()
        })

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

const inputname = document.createElement('input')
inputname.placeholder = 'Name'
inputname.id = 'name'
document.body.appendChild(inputname)

const inputage = document.createElement('input')
inputage.placeholder = 'Age'
inputage.id = 'age'
document.body.appendChild(inputage)

document.getElementById('name').addEventListener('input', (e) => {
    dataManager.filterName(e.currentTarget.value);
})
document.getElementById('age').addEventListener('input', (e) => {
    dataManager.filterAge(e.currentTarget.value);
})

const inputfield = document.createElement('input')
inputfield.type = 'file'
document.body.appendChild(inputfield)
inputfield.addEventListener('change', (e) => {
    const file = e.currentTarget.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        const filecontent = reader.result
        const split = filecontent.split('\n')
        for (const elem of split) {
            const [nev, eletkor] = elem.split(';')
            dataManager.add({nev, eletkor: Number(eletkor)})
        }
    }
});