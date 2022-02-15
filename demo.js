//Feb15 demo

let person = {
    firstName: 'Tasuku',
    lastName: 'Yamamoto',
    age: 29,
    favorites: {
        movies: {
            movie1: 'LORT',
            movie2: 'Your Name'
        },
        music: {
            music1: 'pop'
        }
    }
};

let meal = {
    main: 'Chicken nugget',
    entree: 'Smoked Brisket',
    drink: 'water',
    dessert: 'Ice cream',
};

//console.log(typeof meal);

// for(let attribute in person){
//     console.log(person[attribute]);
// }

person.job = 'Devmountain Student';

//Destructuring
// const {dessert: myDessert} = meal;
// console.log(myDessert);

// const{entree: bestFoodEver, drink: bestBeverageEver, main} = meal;
// console.log(bestFoodEver);
// console.log(bestBeverageEver);
// console.log(main);
// delete person.music;
// delete person.favorites;
// console.log(person);

//When you use bracket notation to add new key:variable, it has to be [''] <- use quotetaion

//Let's talk about clas

class Animal{
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    };

    greeting(){
        console.log(`Hi, I am a ${this.name}, I am of species ${this.species}. My size is ${this.size}`);
    }

}

//Let's talk about class extension

class Reptile extends Animal{
    constructor(name, species, size, cute){
        super(name, species, size);
        this.cute = false;
    }

    changeCute(){
        this.cute = !this.cute;
    }

}

let snake = new Reptile('Ball Python', 'Snake', 'Small');

// let zebra = new Animal('Zebra', 'Mammal', 'Medium');
// console.log(zebra);
// zebra.greeting();

snake.changeCute();
console.log(snake);