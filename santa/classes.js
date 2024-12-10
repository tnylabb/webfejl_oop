class Factory{
    constructor()
    {
        this.manolista = [];
    }
    addMano(mano)
    {   
        this.manolista.push(mano);
        createRow(mano);
        appendToSelector(mano);
    }

    createID(){
        return this.manolista.length
    }

    showProductsList(ID){
        for(let i = 0; i < this.manolista.length; i++){
                if(this.manolista[i].id == ID){
                    refreshProductList(this.manolista[i]);
                }
        }
    }

    addProductsMano(product, id) {
        for (let i = 0; i < this.manolista.length; i++) {
          if (this.manolista[i].id == id) {
            this.manolista[i].addProduct(product);
            this.showProductsList(this.manolista[i].id);
          }
        }
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


