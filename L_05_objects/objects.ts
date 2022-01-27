let userPavlic: object = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12
}

let Pavlic: { name: string, secondName: string, age: number } = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12
}

let firstUsers: { name: string, secondName: string, age: number } = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12,
    lastname: 'Ivanovich'   //error. in object not exist lastname params
}

let secondUsers: { name: string, secondName: string, age: number, lastname: string } = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12,
    lastname: 'Ivanovich'   //ok.
}

// dublicates types in object
let admin: { name: string, secondName: string, age: number } = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12
}

let users: { name: string, secondName: string, age: number } = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12
}

type user = { name: string, secondName: string, age: number }

let adminUser: user = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12
}

let userUser: user = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12
}


// add param in type
type userNew = { name: string, secondName: string, age: number, getPassword?:(name: string, secondName: string, age: number) => string }

let userWithFunction: userNew = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12,
    getPassword(name: string, secondName: string, age: number): string {
        return `${name}${secondName}${age}`
    }
}

let userWithOutFunction: userNew = {
    name: 'Pavlic',
    secondName: 'Morozov',
    age: 12,
}