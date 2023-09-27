//task2
const ziuaSaptamanii = 'Vineri';

switch (ziuaSaptamanii) {
    case 'Luni':
        console.log('Azi e luni.');
        break;
    case 'Marti':
        console.log('Azi e marti.');
        break;
    case 'Miercuri':
        console.log('Azi e miercuri.');
        break;
    case 'Joi':
        console.log('Azi e joi.');
        break;
    case 'Vineri':
        console.log('Azi e vineri.');
        break;
    case 'Sambata':
        console.log('Azi e sambata.');
        break;
    case 'Duminica':
        console.log('Azi e duminica.');
        break;
    default:
        console.log('Nu e zi a saptamanii.')
}
console.log(' ');

//task3
const str = 'abcdeFGHIJklmnOpqrStUvwxyz';
const lungimeaStr = str.length > 10 ? 'lungimea str e mai mare ca 10' : str.length === 10 ? 'lungimea este egala cu 10' : 'Lungimea este mai mica decat 10';
console.log(' ');

//task4
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(' ');

//task5
let str1 = "Audi, BMW, Toyota, Nissan, Mazda";
let str2 = str1.slice(11, 17)
console.log(str1, '    ', str2)
let str3 = str1.split(' ')[2];
console.log(str1, '    ', str3)
let str4 = str1.substring(11, 17)
console.log(str1, '    ', str4)
