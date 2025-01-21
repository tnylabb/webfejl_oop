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