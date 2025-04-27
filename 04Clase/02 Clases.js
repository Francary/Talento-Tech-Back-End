class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    login(inputEmail, password) {
        return this.email === inputEmail && this.password === password ? 'Logeado Correctamente Bienvenido !' : ' Usuario o Contraseña Incorrecto';
    }
}


class Seller extends User {
    constructor( name , email , password, store, sells ,incomes ){
        super(name, email , password);
        this.store = store;
        this.sells = sells;
        this.incomes = incomes;

    }

    addNewSale(amount){
        this.sells += 1
        this.incomes += amount
        return `Sale added Total Sales: ${this.sells} ,  Total imcomes: ${this.incomes} `
    }
}


class Buyer extends User {
    constructor(name, email, password, address , purchases, balance){
        super(name,email,password);
        this.address = address;
        this.purchases = purchases;
        this.balance = balance
 
    }

    makePurchase(amount){
        if (this.balance >= amount){
            this.balance -= amount
            this.purchases += 1
            return ` Purchase successful Remaining balance ${this.balance}`
        } 
        else{
            return 'Insufficient Balance'
        }
    }
}

const user1 = new User( 'John', 'jacorreo.com' , 'jhon123' );
console.log(user1);



const seller1 = new Seller('Juan', 'jacorreo.com', 'juan123', 'centro', 0, 0);
console.log(seller1);

const buyer1 = new Buyer('Caro', 'cacorreo.com', 'caro123', 'Calle 123', 0, 0);
console.log(buyer1);

/*Venta 1*/
console.log(`Venta 1 ${seller1.addNewSale(10)}`);

/*Venta 2*/
console.log(`Venta 2 ${seller1.addNewSale(30)}`);

/*Compra 1*/
console.log(`Compra 1 ${buyer1.makePurchase(10)}`);

/* Retira Dinero del Banco */
buyer1.balance = 300
console.log(`Reintentar pagar Compra 1 ${buyer1.makePurchase(10)}`);


/* Logearse al Market Place */

console.log(seller1.login('jacorreo.com', 'juan123'));

console.log(buyer1.login('jacorreo.ar', 'juan123'));

