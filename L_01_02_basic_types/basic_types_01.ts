//basic types is javascript
    // number
    // string
    // boolean
    // null
    // undefined
    // object
    // Symbol
 
    typeof 42;          // number
    typeof 'string';    // string
    typeof true;        // boolean
    typeof [];          // object
    typeof {};          // object
    typeof null;        // object
    typeof undefined;   // indefined
    typeof Symbol();    // symbol


//basic types is typescript and his definition

    //boolean type
    let isBooleanFalse: boolean = false;
    let isBooleanTrue: boolean = true;

    isBooleanFalse = 42; // error, wront type
    isBooleanFalse = '42'; // error, wront type
    isBooleanFalse = true; // no error, all ok

    //number type
    const decimal: number = 6;
    const integer: number = 7.10;
    const hex: number = 0xf00d;
    const binary: number = 0b1010;
    const octal: number = 0o744;

    //string type
    const string: string = 'String Type';
    const stringWithLink: string = `String With Ling ${ string }`;

    //null and undefined types
    const un: undefined = undefined;
    const n: null = null;

    //void type
    const testFunction = (): void => {  // correct
        console.log('Hello world');
    }

    const testFunctionError: void = () => {     // error, void not in function result
        console.log('Why you do that?!');
    }

