class ArrayList {
    /**
     * @type (Number)
     */
    #length
    #state

    get Count() {
        return this.#length
    }

    constructor(){
        this.#length = 0
        this.#state = {};        
    }

    Add(item){
        const index = this.#length
        this.#state[index] = item
        Object.defineProperty(this, index, {
            get: function(){
                return this.#state[index]
            },
            set: function(value){
                this.#state[index] = value
            }
        })
        this.#length++
    }

    Clear(){
        this.#length = 0
        this.#state = {}
    }
}

const alma = {}

Object.defineProperty(alma, "nev", { value: "Ferenc", writable: true})  
alma.nev="Géza"
console.log(alma)

const igen = new ArrayList()

igen.Add(5)
console.log(igen[0])

igen.Add("gfdgdfgs")
console.log(igen)

igen.Add({new:"objectgdg"})
console.log(igen)