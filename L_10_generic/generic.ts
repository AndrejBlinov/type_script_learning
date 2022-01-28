//generic type
const getter = <T>(data: T): T => data;

getter(10).length;      // error. NumberType dost not exist function 'length'
getter('test').length;  // ok. in StringType has got function 'length'

//default type
getter<number>(10);
getter<string>('test');

//generic type in class
class genericClass<T> {
    constructor ( public age: T, public name: T ) {}

    public getPass(): string {
        return `${this.age}${this.name}`
    }
}

const genericValue2 = new genericClass('12', '12');     // T its string Type
const genericValue = new genericClass(12, 12);          // T its number Type

genericValue2.getPass()     // 1212
genericValue.getPass()      // 1212

class genericAnotherClass<T, K> {
    constructor ( public age: T, public name: K ) {}

    public getPass(): string {
        return `${this.age}${this.name}`
    }
}

const genericValue3 = new genericAnotherClass(12, '12');        // T its number Type K its string Type
const genericValue4 = new genericAnotherClass(12, 12);          // T its number Type K its number Type

genericValue3.getPass()         // 1212
genericValue4.getPass()         // 1212

class genericNumberClass<T extends number, K> {
    constructor ( public age: T, public name: K ) {}

    public getPass(): string {
        return `${this.age}${this.name}`
    }
}

const genericValue5 = new genericNumberClass(12, '12');             // T its number Type K its string Type
const genericValue6 = new genericNumberClass('12', 12);             // error. type T must number