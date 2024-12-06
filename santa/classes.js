class Factory{
    constructor()
    {
        this.manolista = [];
    }
    addMano(mano)
    {   
        this.manolista.push(mano);
    }
}
class Companion{
    // TODO 5
   constructor(id, keresztnev, vezeteknev, reszleg)
    {
        this.id = id; 
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.reszleg = reszleg;
        this.products = [];
    }
    addProduct(product){
        this.products.push(product)
    }
    getName(){
        return this.vezeteknev + " " + this.keresztnev;
    }
}


