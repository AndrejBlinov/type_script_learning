
//basic types is typescript and his definition №2

    //array type
    let arrayList: number[] = [1,2,3,4,5];
    let anotherArrayList: Array<number> = [1,2,3,4,5];  //generic type onli number

    //tuple type
    let x: [string, number, null] = ['test', 123, null];
    x = [10, '123'];     // error, array must be [string, number, null] format

    let y: [number, boolean];
    y = [1, true];

    //any in value
    let list: Array<any> = [1, '23' , {}];   // for all types in array
    let anotherList: [any, any] = [1,'23'];

    let notShureType: any = false;
    notShureType = '123';

    //EnubType
    enum Directions {
        left,
        right,
        up,
        down,
        turn,
        run,
        apple
    }

    Directions.apple    // 6
    Directions.left     // 0
    Directions.down     // 3

    enum DirectionsAnother {
        left = 3,
        right = 4,
        up = 10,
        down,
    }

    Directions.right    // 4
    Directions.left     // 3
    Directions.down     // 11

    // never type
    const msg: string = 'error';    // function return Error
    const error = (msg: string): never => {
        throw new Error(msg);
    }

    const infiniteLoop = (): never => { //function infinite loop
        while (true) {

        }
    }

    // object type
    const create = (o: object | null): void => {};

    create(1);  // error, paramert need onli object or null
    create('1');  // error, paramert need onli object or null
    create({'ob':1});  // no error, paramert object

    // multipl types
    let stringOrNumber: string | number;
    stringOrNumber = 1;
    stringOrNumber = '123';

    // custom type in type
    type customType = string;
    let id: customType;
    id = '123';
    id = 123;   //error, id need customType and customType is string
