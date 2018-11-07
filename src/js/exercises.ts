// Exercise 1
class Car {
    acceleration:number = 0;

    constructor(public name:string){}
    
    honk:() => void = () =>  {
        console.log("Toooooooooot!");
    };

    accelerate: (speed:number) => void = (speed) => {
        this.acceleration = this.acceleration + speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
abstract class BaseObject {
    height: number;
    width: number;
};

class Rectangle extends BaseObject {
    constructor(public height: number,public width: number) {
        super();
    }
    calcSize: () => number = () => {
        return this.width * this.height;
    };
}
const rec = new Rectangle(2,5);
console.log(rec.calcSize());

// Exercise 3
class Person {
    _firstName: string;
    
    get firstName() {
        return this._firstName;
    };

    set firstName(value:string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    };
};


const person2 = new Person;
console.log(person2.firstName);
person2.firstName = "Ma";
console.log(person2.firstName);
person2.firstName = "Maximilian";
console.log(person2.firstName);
