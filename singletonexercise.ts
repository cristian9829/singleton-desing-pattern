class ShopingCar {
    private static instance : ShopingCar;
    products: Product[] = [];

    private constructor(product: Product){
        this.products.push(product)
    }
    add(product:Product){
        this.products.push(product)
    }
    deleteById(id: number){
        this.products = this.products.filter(product => product.id !== id);
    }
    static getInstance(product:Product): ShopingCar{
        if(!ShopingCar.instance){
            ShopingCar.instance = new ShopingCar(product)
        }
        return ShopingCar.instance
    }
}
class Product {
    id: number;
    name: string;
    cost: number;

    constructor(id:number, name:string, cost:number){
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    getName():string{
        return this.name;
    }
    getCost():number{
        return this.cost;
    }
    getId():number{
        return this.id;
    }

}

function main(){
    
    const product1 = new Product(1,"cargador",2000)
    const product2 = new Product(2,"cargador2",2000)
    const product3 = new Product(3,"cargador3",2000)

    const shopingCar = ShopingCar.getInstance(product1)
    const shopingCar2 = ShopingCar.getInstance(product2)
    const shopingCar3 = ShopingCar.getInstance(product3)
    
    console.log(shopingCar) //ShopingCar {products: [ Product { id: 1, name: 'cargador', cost: 2000 } ]}
    console.log(shopingCar2) //ShopingCar {products: [ Product { id: 1, name: 'cargador', cost: 2000 } ]}
    console.log(shopingCar3) //ShopingCar {products: [ Product { id: 1, name: 'cargador', cost: 2000 } ]}

}

main()