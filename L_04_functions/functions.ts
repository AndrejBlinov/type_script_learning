// function example
const exampleFunction = (name: string, age: number) => {`${name}${age}`};    
exampleFunction('test', 25)     // test25

const exampleAnotherFunction = (name: string, age: number | string) => {`${name}${age}`};   
exampleAnotherFunction('test', 25)      // test25
exampleAnotherFunction('test', '25')    // test25

//predefaultParams
const predefaultFunctionParams = (name: string = 'test', age: number | string = 20) => {`${name}${age}`};  
predefaultFunctionParams()     // test20
predefaultFunctionParams('noTest', 'no20') //noTestno20

//optionalParams
const optinalFunctionParams = (name: string = 'test', age?: number) => {`${name}${age}`};  
optinalFunctionParams('itisNotATest')   // itisNotATest
optinalFunctionParams('itisTest' , 25)   // itisNotATest25

//rest type
const createSkills = (name, ...skilss) => `${name}, my skils are ${skilss.join()}`;

const createSkillsArray = (name, ...skills: Array<string>) => `${name}, my skils are ${skills.join()}`;
createSkillsArray('VasuaPupkin', 'test2', 'test3')  //  VasuaPupkin, my skils are test2,test3

//function return types
const returnFunction = (name: string, number: string | number) : string => `${name} and ${number}`;

const calculate = (first: number, second: number) : number => first + second;

const createObect = (objName: string) : object => ({objName});

//type function
function oldFunct(name: string): void {
    console.log('its old function');
}
let muFunct: (firstParam: string) => void;  // ok. type void == type void in results functions
muFunct = oldFunct;

let muFunctMore: (firstParam: string) => string;  // error. type string != type void in results functions
muFunctMore = oldFunct;



