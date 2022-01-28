//base decorator
const log = () => {}

//class decorator
const logClassDecorator = (constructor: Function) => {
    console.log(constructor)
}

@logClassDecorator
class logClass {
    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

//property decorator
const PropertysDecorator = (target: object, propertyKey: string | symbol ) => {
    console.log(propertyKey);
}

class userDecorator {
    @PropertysDecorator
    secret: number;

    constructor(public name: string, public age: number, secret: number) {
        this.secret = secret;
    }

    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

//method decorator
const logMethod = (
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) => {
    console.log(propertyKey);
}

class logMethodClass {
    constructor(public name: string, public age: number) {}

    @logMethod
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

// get/set decorators
const logSet = (
    target: object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor,
) => {
    console.log(propertyKey);
}

class logSetClass {
    constructor(public name: string, public age: number) {}

    @logSet
    set myAge(age: number) {
        this.age = age;
    }
}

//decorator factory
function factory(value: any) {              //factory
    return function (target: any) {         //decorator 
        console.log(target);                //decorator logic
    }
}

//applying Factory Decorator
const enumerable = (value: boolean) => {
    return(
        target: any,
        propertyKey: string | symbol,
        descrtiptor: PropertyDescriptor
    ) => {
        descrtiptor.enumerable = value;
    }
}

class enumerableClass {
    constructor(public name: string, public age: number) {}

    @enumerable(false)
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}

//aply more decorator

//1
@f @g @r 

//2
@f
@g 
@t

//example
const first = () => {
    console.log('first() completing');
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('first() called');
    };
}

const second = () => {
    console.log('second() completing');
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('second() called');
    };
}

// Apply and call two factory decorators
class userTwoDecoration {

    constructor(public name: string, public age: number) {}
    
    @first()
    @second()
    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Call results:
// "first() completing"      // Factory 1
// "second() completing"     // Factory 2
// "second() called"         // Decorator 2
// "first() called"          // Decorator 1