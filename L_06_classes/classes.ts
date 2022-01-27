class testClass {
    firstParams: string;
    secondParams: number;
    thirdParams: boolean;
}

class testClassWithConstructor {
    firstParams: string;
    secondParams: number;
    thirdParams: boolean;

    constructor(
        firstParams: string, 
        secondParams: number, 
        thirdParams: boolean
    ) {
        this.firstParams = firstParams;
        this.secondParams = secondParams;
        this.thirdParams = thirdParams;
    }
}

const classExempl = new testClassWithConstructor('test', 123, true);
classExempl // {firstParams: 'test', secondParams: 123, thirdParams: true}

//class type modifications
class testClassModifications {
    public firstParams: string;
    private secondParams: number;
    readonly thirdParams: boolean;
    protected fourParams: boolean;

    constructor(
        firstParams: string, 
        secondParams: number, 
        thirdParams: boolean
    ) {
        this.firstParams = firstParams;
        this.secondParams = secondParams;
        this.thirdParams = thirdParams;
    }
}

const classValue = new testClassModifications('test', 123, true);
classValue.firstParams      // 'test'
classValue.secondParams     // error. secondParams is private
classValue.thirdParams      // 'true'
classValue.fourParams       // error. fourParams protected

//predefault Params in class
class predefaultParams {
    firstParams: string = '123';
    secondParams: number = 123;
    thirdParams: boolean;

    constructor (firstParams: string, thirdParams: boolean) {
        this.firstParams = firstParams;
        this.thirdParams = thirdParams;
    }
}

const valueClass = new predefaultParams('test', false);
valueClass      // { firstParams: 'test', secondParams: 123, thirdParams: false } 

//minimalization class
class minimalization {
    constructor(
        public name: string,        //modification is needed!! (private, public, protected, etc.)
        public lastName: string,    //modification is needed!! (private, public, protected, etc.)
        public age: number,         //modification is needed!! (private, public, protected, etc.)
        public role: string         //modification is needed!! (private, public, protected, etc.)
    ) {}
}

//class getter and setter
class getterSetterClass {
    private age: number = 20;

    constructor(public name: string) {}

    set Age(age: number) {
        this.age = age;
    }

    get getAge() {
        return this.age;
    }
}

const testClassGetSet = new getterSetterClass('test');
testClassGetSet.Age = 5;
testClassGetSet.getAge;     // 5