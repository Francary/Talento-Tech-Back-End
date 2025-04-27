const hero = {
    alias: 'Cody',
    universe: 'TechLab',
    powers: ['fly', 'nightvision', 'stregth'],
    hit: 128,
    vitality: 100,
    decreaseVitality: function(damage) {
    return this.vitality - damage
    
    }
    
    }

const estudiandte ={
    name: 'Juan',
    age: 30,
    Active: true,
};
console.log(estudiandte);

estudiandte.address = 'Calle Falsa 123';

console.log(estudiandte);


const calculator = {
    addition : ( a , b ) => a + b,
    subtract : ( a , b ) => a - b,
}

console.log( calculator.addition(20,10));
console.log( calculator.subtract(20,10));

const user = {
    name: 'Jhon',
    lastName: 'Doe',
    age: 27,
    address: 'Fake street 123',
    isMarried: false,
    sayHi: () => console. log('Hi there, buddy' )
}




function Person(name, age) {
    this.name = name
    this.age = age
    this.sayHi = () =>{
        console.log(`Hola, me llamo ${this.name} y tengo ${this.age} años`);
        
    }
}


const person1 = new Person('Maria', 30)
const person2 = new Person('Juan', 25)

person1.sayHi()
person2.sayHi()



