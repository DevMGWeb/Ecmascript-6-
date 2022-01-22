
///functions with defined parameters 
// declarative function  
function myNewFunction(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

myNewFunction();

// expressive function  
let myNewFunction = (name = 'oscar', age = 32, country = 'MX') => {
    console.log(name, age, country);
}

myNewFunction();

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
};

// before with es5
console.log(person.name, person.age);

// after with es6
let { name, age, country } = person;
console.log(name, age);

// using spread 
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

const names = [
    {name: 'oscar', age: 32},
    {name: 'Yesica', age: 27}
];

// es5
// let listOfNames = names.map(function (item){
//     console.log(item.name);
// });

// es6 using arrow functions with returns value
let listOfNames = names.map(item => console.log(item.name));

let listOfNames2 = (name, age, country) => {
    // ...
}

const listOfNames3 = name => { 
    // ...
}

const square = name => num * num;

//promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Good Joob!");
        }else{
            reject("Ops!");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


///classes
class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,2));

//import & export
import { hello } from './module';

hello();

//Generator
function* helloWorld() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

///read undefined
console.log(generatorHello.next().value);
