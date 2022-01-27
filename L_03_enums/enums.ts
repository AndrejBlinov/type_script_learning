enum enumValue {
    left,
    right,
    up,
    down,
    turn,
    run,
    apple
}

enumValue[6]        // apple
enumValue[0]        // left
enumValue[3]        // down

enum links {
    urlFirst = 'https://testSuite.ru',
    vk = 'https://vk.com',
    urlSecond = 'http://testSuiteSecond.ru'
}

links.urlFirst  // https://testSuite.ru
links.vk        // https://vk.com
links.urlSecond // http://testSuiteSecond.ru

const enum constLink {
    urlFirst = 'https://testSuite.ru',
    vk = 'https://vk.com',
    urlSecond = 'http://testSuiteSecond.ru'
}

const arrLinks = [constLink.urlSecond, constLink.urlSecond]     
// compiled code
const arr = ['http://testSuiteSecond.ru', 'http://testSuiteSecond.ru'];