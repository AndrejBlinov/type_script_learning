
class User {
    static secret = 213;

    constructor(public nickName: string) {}

    getPass(): string {
        return `${this.nickName}${User.secret}`
    }
}

const newUser = new User('Vasulii');
newUser.getPass();  // Vasulii213

//inheritance
class Class {
    static secret = 213;
    private nickName: string = 'testUser'

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${Class.secret}${this.age}`
    }
}

class inheritanceClass extends Class {
    name: string = 'TestUserForInheritanceClass';
}

const value1 = new Class('test', 12);
const value2 = new inheritanceClass('test');        // error inheritanceClass extends Class and need 2 params
const value3 = new inheritanceClass('test', 321);   // all ok

class inheritanceClassWithoutError extends Class {
    static nickname: string = 'TestUserForInheritanceClass';

    constructor(age: number) {
        super(inheritanceClassWithoutError.nickname, age);
    }
}

const value4 = new inheritanceClassWithoutError(12);    // all ok

class renameFunctionClass extends Class {
    static nickname: string = 'TestUserForInheritanceClass';

    constructor(age: number) {
        super(inheritanceClassWithoutError.nickname, age);
    }

    getPass(): string {
        return `${this.age}${Class.secret}${renameFunctionClass.nickname}`
    }
}

//abstract class
abstract class abstractUser {
    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;
}

const abstract = new abstractUser('test', 123); // error canot create class extend absract class

class testUser extends abstractUser {   // error dons not exist getPass function
    name:string = 'test';

    constructor(age: number) {
        super(testUser.name, age)
    }
}

class testUserWithoutError extends abstractUser {   // all Ok. function getPass exist
    name:string = 'test';

    constructor(age: number) {
        super(testUser.name, age)
    }

    getPass(): string {
        return `${this.age}${testUser.name}`
    }
}

const value5 = new testUserWithoutError(12);
value5.greet();     //  "test" in console
value5.getPass();   //  "12test"