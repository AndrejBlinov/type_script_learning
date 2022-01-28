interface UserInterface {
    name: string;
    age: number;
}

interface UserOprional {
    name: string;
    age?: number;   // optional Param
}

const customClass: UserOprional = {
    name: 'test',
}

const anoterCustomClass: UserOprional = {
    age: 123,   // error. No params 'name'
}

interface AnotherInterface {
    readonly name: string;
    age?: number;
}

const classInterface: AnotherInterface = {
    name: 'test',
}

classInterface.name = '123';    // error. Param 'name' readonly in interface AnotherInterface

//compare interface type and object
interface test {
    name: string,
    age: number,
}

const testClass: test = {
    name: 'test',
    age: 12,
    AnotherParam: 'WHAT ARE YOU DOING?!',      // error. Param 'AnotherParam' dont not exist in interface test
}

//interface extension
interface extensionInterface {
    name: string,
    age: number,
    [propName: string]: any
}

const extensionClass = {
    name: 'test',
    age: 12,
    AnotherParam: 'now its all ok',
    param: 'its ok too'
}


interface interfaceForClass {
    name: string,
    age: number,
    getPass(): string
}

class interfaceClass implements interfaceForClass {
    name: string = 'test';
    age: number;
    param: number;

    getPass() {
        return `${this.name}${this.age}`
    }

    getToken(): string {
        return 'testToken';
    }
}

//interface Extends

interface userTest {
    name: string;
    age: number;
}

interface adminTest extends userTest {
    getPass(): string
}

class extendInterfaceClass implements adminTest {
    name: string;
    age: number;

    getPass(): string {
        return `${this.name}${this.age}`
    }
}