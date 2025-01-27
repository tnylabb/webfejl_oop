class ArrayList {
    /**
     * @type (Number)
     */
    #length
    #state
    
    #arraytable

    get Count() {
        return this.#length
    }

    constructor(array = undefined){
        this.#length = 0
        this.#state = {};        
    }

    Add(item){
        const index = this.#length
        this.#state[index] = item
        Object.defineProperty(this, index, {
            get: () => {
                return this.#state[index]
            },
            set: (value) => {
                this.#state[index] = value
            }
        })
        this.#length++
    }

    Clear(){
        for (let i in this) {
            delete this[i];
        }
        this.#length = 0
        this.#state = {}
    }

    Contains(item) {
        for (let i = 0; i < this.#length; i++) {
            if (this.#state[i] === item) {
                return true;
            }
        }
        return false;
    }
}


class tableHTMLArray extends HTMLElement{
    #tbody
    #thead
    constructor(){
        super()
    }

    connectedCallback(){
        const table = document.createElement('table')
        this.appendChild(table)

        const thead = document.createElement('thead')
        table.appendChild(thead)

        this.#tbody = document.createElement('tbody')
        table.appendChild(this.#tbody)
    }
    
/**
 * 
 * @param {{nev:String eletkor:Number}} param 
 */
    addPersonRow(param){
        const tr = document.createElement('tr')
        this.#tbody.appendChild(tr)

        const td1 = document.createElement('td')
        const td2 = document.createElement('td')

        td1.innerHTML = param.nev
        td2.innerHTML = param.eletkor

        tr.appendChild(td1)
        tr.appendChild(td2)
    }
}

customElements.define('array-table', tableHTMLArray)
const arraytable = new tableHTMLArray()
document.body.appendChild(arraytable)

arraytable.addPersonRow({nev: "Zseraldina", eletkor: 12})
arraytable.addPersonRow({nev: "Ármándó", eletkor: 52})
arraytable.addPersonRow({nev: "Bálázsovics", eletkor: 74})
arraytable.addPersonRow({nev: "Dorado", eletkor: 43})
arraytable.addPersonRow({nev: "Grófó", eletkor: 23})
arraytable.addPersonRow({nev: "Ldedi", eletkor: 34})
arraytable.addPersonRow({nev: "Pimpa", eletkor: 13})
arraytable.addPersonRow({nev: "Rajmondo", eletkor: 61})
arraytable.addPersonRow({nev: "Mandino", eletkor: 9})
arraytable.addPersonRow({nev: "Tschavolo", eletkor: 26})
arraytable.addPersonRow({nev: "Flutyi", eletkor: 15})
arraytable.addPersonRow({nev: "Gimics", eletkor: 75})

const alma = {}

Object.defineProperty(alma, "nev", { value: "Ferenc", writable: true, enumerable: true, configurable: true })  
alma.nev="Géza"
console.log(alma)

const igen = new ArrayList()

igen.Add(5)
console.log(igen[0])

igen.Add("gfdgdfgs")
console.log(igen)

igen.Add({new:"objectgdg"})
console.log(igen)

console.log(igen.Contains(5));
console.log(igen.Contains("gfdgdfgs"));
console.log(igen.Contains({new:"objectsadfhsdf"}));

igen.Clear()

console.log(igen)
console.log(igen.Count)

let personCounter = 1

const button = document.createElement("button")
button.innerHTML = "Hozzáadás"
button.addEventListener("click", () => {
    const newPerson = {
        nev: `User ${personCounter}`,
        eletkor: Math.floor(Math.random() * 100) + 1};
    const arrayList = new ArrayList(arraytable);
    arrayList.Add(newPerson)
    arraytable.addPersonRow(newPerson)
    personCounter++
})
document.body.appendChild(button)