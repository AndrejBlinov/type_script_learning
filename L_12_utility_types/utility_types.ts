// readOnly
interface user {
    name: string;
}

const user: Readonly<user> = {
    name: 'test'
}

user.name = '123'   // error

//required
interface prop {
    a?: number;
    b?: string;
}

const obj: prop = {a: 5}

const obj2: Required<prop> = {a: 4};            // error. Param b is required
const obj3: Required<prop> = {a: 4, b: '10'};   // all ok

//recodr <K, T>
interface pageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, pageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
}

// same code in JS
// "use strict";
// const x = {
//     about: { title: 'about' },
//     contact: { title: 'contact' },
//     home: { title: 'home' },
// };

// Pick<T, K>
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type todoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: todoPreview = {
    title: 'Clean room',
    completed: false,
};

// Omit<T, K>
interface todoInterface {
    title: string;
    description: string;
    completed: boolean;
}

type todoPreviewAnother = Omit<todoInterface, 'description'>;

const todoAnother: todoPreviewAnother = {
    title: 'Clean room',
    completed: false,
};

// Exclude<T, U>
type excludeT0 = Exclude<"a" | "b" | "c", "a">;                      // return  "b" | "c"
type excludeT1 = Exclude<"a" | "b" | "c", "a" | "b">;                // return "c"
type excludeT2 = Exclude<string | number | (() => void), Function>;  // return string | number

// Extract<T, U>
type extractT0 = Extract<"a" | "b" | "c", "a" | "f">;                // return "a"
type extractT1 = Extract<string | number | (() => void), Function>;  // return () => void

// NonNullable<T>
type nonNullableT0 = NonNullable<string | number | undefined>;   // return string | number
type nonNullableT1 = NonNullable<string[] | null | undefined>;   // return string[]

// ReturnType<T>
declare function f1(): { a: number, b: string };

type returnTypeT0 = ReturnType<() => string>;                                  // return string
type returnTypeT1 = ReturnType<(s: string) => void>;                           // return void
type returnTypeT2 = ReturnType<(<T>() => T)>;                                  // return {}
type returnTypeT3 = ReturnType<(<T extends X, X extends number[]>() => T)>;    // return number[]
type returnTypeT4 = ReturnType<typeof f1>;                                     // return { a: number, b: string }
type returnTypeT5 = ReturnType<any>;                                           // return any
type returnTypeT6 = ReturnType<never>;                                         // return any
type returnTypeT7 = ReturnType<string>;                                        // error
type returnTypeT8 = ReturnType<Function>;                                      // error

// InstanceType<T>
class C {
    x = 0;
    y = 0;
}

type instanceTypeT0 = InstanceType<typeof C>;     // C
type instanceTypT1 = InstanceType<any>;          // any
type instanceTypT2 = InstanceType<never>;        // any
type instanceTypT3 = InstanceType<string>;       // Error
type instanceTypT4 = InstanceType<Function>;     // Error