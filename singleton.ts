/**How to implement singleton?

*1. Make the constructor
*2. Create static method who calls the private constructor and save the instance  in a static variable

**/

class Singleton {
    private static instance : Singleton;
    private version : string

    private constructor(version: string){
        this.version = version;
    }

    static getInstance(version:string) : Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton(version);
        }

        return Singleton.instance;
    }
}

function appSingleton() {
    //Todas las variables tienen la misma referencia al mismo objeto. 1 sola instancia a lo largo de la aplicación:
    const singleton1 = Singleton.getInstance('version-1')
    const singleton2 = Singleton.getInstance('version-2')
    const singleton3 = Singleton.getInstance('version-3')

    console.log(singleton1)
    console.log(singleton2)
    console.log(singleton3)

    console.log(singleton1 === singleton2); //true
    console.log(singleton1 === singleton3); //true

    //Siempre sera true por que siempre sera el mismo objeto desde la primera instancia creda
    //Es decir siempre sera version-1
}
appSingleton();