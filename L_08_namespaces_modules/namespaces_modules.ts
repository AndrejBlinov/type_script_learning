namespace Utils {
    const NAME = 'test';
    const SECRET = '12323';

    const getPass = (): string => `${NAME}${SECRET}`
}

const UtilsValue = Utils.NAME   // property dons not exist

namespace ExportUtils {
    const NAME = 'test';
    export const SECRET = '12323';

    export const getPass = (name: string, age: number): string => `${name}${SECRET}${age}`
}

const ExportUtilsValue = ExportUtils.SECRET   // allOk
const ExportUtilsValue2 = ExportUtils.getPass('test', 12)   // allOk

const NAME = '123';     // NAME and ExportUtils.NAME and Utils.NAME  its different value

//export namespace in enother files

//look in file Namespace.ts

import {getPass, SECRET } from "./namespace_export";

const myPass = getPass(SECRET, 31); //12331