class Human {
    constructor(name) {
        this.name = name;
    }

    bmi = () => { return this.mass / Math.pow(this.height, 2) }
    input = () => {
        this.mass = prompt('Introduce ' + this.name + ' mass: ')
        this.height = prompt('Introduce ' + this.name + ' height: ')
    }
}

const john = new Human('John');
const mark = new Human('Mark');

john.input();
mark.input();

const isMarkHigher = mark.bmi() > john.bmi();
console.log("Is Mark's BMI higher than John's? " + isMarkHigher);