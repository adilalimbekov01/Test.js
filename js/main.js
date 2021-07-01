// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Butter'
// ]
// console.log(list[0]);
// let [first, second, ...other] = list
// console.log(first, second, other);

// let arr = [
//     [1,2,3,4,5,6,[15,16]],
//     [7,8,9,0]
// ];
// let [[a, b, c, d, [fif, six]], [newArr, ...other]] = arr;
// console.log(a,b,c,d, newArr, other);
// console.log(fif, six);



// let person = {
//     age: 30,
//     name : 'John',
//     lastName: 'Snow'
// }
// let {age,name,lastName} = person
// console.log(age,name,lastName);

// let obj1 = {
//     subObj:{
//         name: 'Jack'
//     }
// }
// let {subObj:{name}} = obj1;
// console.log(name);


// let obj = {
//     arr:[
//         {
//             name:'Adil'
//         }
//     ]
// }
// let {arr:[{name}]} = obj
// console.log(name);


// function foo ({name}){
//     console.log(name);
// }
// let person = {
//     name : 'Maker',
//     lastName:'Bootcamp'
// }
// foo(person)


// let arr = [1,2,3,4,5,6];
// let [,,,,,first] = arr;
// console.log(first);

// spread
// function foo(a){
//     console.log(a);
// }

// let arr = [1,2,3,4,5]
// foo(...arr)


// let a = {
//     age: 20
// };
// // let b = {
// //     age:20
// // }
// let b = {...a}

// console.log(a === b);   



// let obj1 = {
//     name: 'Adil',
//     color: 'Black'
// }
// let obj2 = {
//     lastName: 'Alimbekov'
// }

// let {name,color}= obj1;
// let newObj = {...obj1, ...obj2}
// console.log(newObj);

// let person = {
//     name:'Adil',
//     age : 16,
//     positions:[
//         'Student',
//         'FrontEnd - developer',
//         'BackEnd - developer'
//     ],
//     dog:{
//         name: 'Oreo',
//         age : 2
//     }
// }
// // let {name,age} = person;
// let {name, age, positions:[a,b,c], dog:{name: dogName,age: dogAge}} = person
// console.log(name , age, a, b, c, dogName,dogAge);
// function sayHello ({name , age, dog: {name: dogName}}){
//     console.log(`Hello my name is ${name}. I am ${age} yaers, I have dog ${dogName}.`);
// }
// sayHello(person)

/////////////////////////////////////////////////////////////

// Деструктуризация. Домашняя работа.

// Группа С =======================================================
// Задание №1
// Дан массив ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// Вам надо поместить в переменную
// firstName 1-элемент массива, а в
// переменную titul  3-элемент.


// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// let [first,,third] = arr;
// console.log(first, third);


// Задание №2
// Дана строка `Albert Einstein`.
// Поместите в переменную firstName первое слово,
// в переменную lastName второе слово.


// let str = 'Albert Einstein';
// let arr = str.split(' ');
// console.log(arr);
// let [firstName, lastName] = arr;
// console.log(firstName, lastName);


// Задание №3
// Создайте объект let obj = {};
// В свойство firstName поместите первое
// слово из задания №2
// В свойство lastName поместите второе
// слово из задания №2


// let obj = {
//   firstName: 'Albert',
//   lastName: 'Einstein'
// }
// let {firstName,lastName} = obj
// console.log(firstName,lastName)

// Задание №4
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет'}.
// Запишите соответствующие значения в переменные name, surname и age


// let obj = {
//     name: 'Петр', 
//     surname: 'Петров', 
//     age: '20 лет'
// }
// let {name,surname,age} = obj
// console.log(name,surname,age);


// Задание №5
// Дан объект: { hello: "World", console: "log", java: "script" }
// Поместите в переменные, первые два свойства.
// Следующие два выведите в консоль. Используйте оператор ...rest (spread).


// let obj = { 
//     hello: "World", 
//     console: "log", 
//     java: "script",
//     say:'Hello'
// }
// let {hello, console: enter,...other} = obj;
// console.log(hello, enter, other);


// Группа B =======================================================

// Задание №6
// Вам нужно поменять местами значения
// переменных.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0


// let a  = 1;
// let b = 0;
// c = a;
// a = b;
// b = c
// console.log(a,b);


// Задание №7
// Дан массив ['первый', 'второй'].
// Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee',
// а если нет второго - в переменную elem2 запишите значение 'bbb'.
// Первый элемент никуда записывать не надо.


// let arr = ['первый', 'второй'];
// let [,elem2,elem3] = arr;
// if(elem3 == undefined) elem3 = 'bbb'
// if(elem2 == undefined) elem2 = 'eee'
// console.log(elem2, elem3);


// Задание №8
// Дан объект {name: 'Jack', age: '22', hobbys: [football, swimming]}
// Запишите в переменные hobby1 и hobby2 слова football и swimming соответственно.


// let person = {
//     name: 'Jack', 
//     age: '22', 
//     hobbys: ['football', 'swimming']
// }
// let {hobbys:[hobby1, hobby2]} = person;
// console.log(hobby1, hobby2);


// Задание №9
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию: {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}


// let person = {
//     name: 'Петр', 
//     // surname: 'Петров',                                                                              
//     age: '20 лет'
// }
// let anonim = {
//     name: 'Аноном', 
//     surname: 'Анонимович', 
//     age: '? лет'
// }
// let {name, surname, age} = person
// let {name:nameAn, surname:surnameAn, age:ageAn} = anonim
// if(name == undefined) name = nameAn;
// if(surname == undefined) surname = surnameAn;
// if(age == undefined) age = ageAn;

// console.log(name, surname, age);


// Задание №10
// Перезапишите все свойства объекта person данными из массива info.


// let info = ['Sam', 'Christenson', 22];
// let person = {
//     name: '',
//     surname: '',
//     age: null
// };
// let [iname,isurname,iage] = info;
// let {name, surname, age} = person;
// name = iname;
// surname = isurname;
// age = iage;
// console.log(name, surname, age); 



// Группа А =======================================================

// Задание №11
// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.


// let person = {
//     name:'John', 
//     // age:22
// }
// let {name, age} = person;
// if (name == undefined) name = prompt('Enter your name', 'Steve')
// if(age == undefined) age = +prompt('Enter your age', 25)
// alert(name +' '+ age)


// Задание №12
// Переделайте следующую функцию через деструктуризацию.
// Сделайте так, чтобы если какое-либо из значений отсутствует, то переменной присваивалось значение по умолчанию.
// function func(person) {
//     let name = person.n;
//     let surname = person.s;
//     let age = person.a
//     console.log(name, surname, age);
// }
// func({ n: 'Luck', a: 22 });


// let person = {
//         name:'John', 
//         // surname: 'Doe',
//         age: 23
//     }
// let = {name, surname, age} = person
// if(name == undefined || surname == undefined || age == undefined) func({ n: 'Luck',s:'King', a: 22 })
// if(name !== undefined && surname !== undefined && age !== undefined) console.log(name,surname,age)

// function func(person) {
//     let name = person.n;
//     let surname = person.s;
//     let age = person.a
//     console.log(name, surname, age);
// }


// Задание №13
// Дан объект {"Sam": 22,"Kate": 28,"Luck": 16}.
// Напишите функцию, которая возвращает имя самого старшего студента.
// Для решения задачи используйте Object.entries и деструктурирование.


// let students = {
//     Sam: 22,
//     Kate: 28,
//     Luck: 16
// };
// let {Sam,Kate,Luck} = students;
// if(Sam > Kate && Sam > Luck) console.log(Sam);
// if(Sam < Kate && Kate > Luck) console.log(Kate);
// if(Luck > Kate && Sam < Luck) console.log(Luck);


// Задание №14
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.


// let arr = { 
//     size: { 
//         width: 100, 
//         height: 200 
//     }, 
//     items: ["Cake", "Donut"], 
//     extra: true
// }
// let {size:{width,height},items:[cake,donut],extra: boolean} = arr;
// console.log(width,height,cake,donut,boolean);


// Задание №15
// Дан массив [[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]].
// Используя цикл for...of и деструктуризацию вывести в консоль все числа вложенных массивов.
// Пример ввода:
// [[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]]
// Пример вывода:
// Первое - 15, второе - 15.1, третье - 15.2
// Первое - 16, второе - 16.1, третье - 16.2
// и т.д


let arr15 = [[15, 15.1, 15.2], [16,16.1,16.2], [17,17.1,17.2]];




// let bish = {
//     yesterday: 32,
//     today: 37,
//     tommorov: 27
// };
// const {yesterday: previous, today: curren, tommorov: next} = bish;
// function getAvg (a,b,c){
//     return (a + b + c) / 3
// }
// console.log(getAvg(previous,curren,next));


// const courseCatalogMetadata = [
//     {
//       title: 'The Hobbit, or There and Back Again',
//       description: 'The hobbit tells a fantastic story of adventure, danger, friendship, and courage',
//       texts: [ {
//         author: 'J. R. R. Tolkien',
//         price: 120,
//         ISBN: '912-6-44-578441-0'
//       } ]
//     }
//    ];
//    let [{texts: [{ISBN}]}] = courseCatalogMetadata;
// console.log(ISBN);


// const browsers = [
//     {
//         name: 'Firefox',
//         company: 'Mozzila',
//         marketShare:'8.01%'
//     },
//     {
//         name: 'Chrome',
//         company: 'Google',
//         marketShare:'68.26%'
//     },
//     {
//         name: 'Edge',
//         company: 'Microsoft',
//         marketShare:'6.67%'
//     },
//     {
//         name: 'Opera',
//         company: 'Opera Software',
//         marketShare:'1.31%'
//     }
// ]
// let i = 0
// function showoInfo({name, company, marketShare}){
//     document.writeln(`<h2>${company} developed ${name} which holds ${marketShare} of the Market Share </h2>`);
//     i++;
//     if(i == browsers.length){
//         clearInterval(showoInfoInterval)
//     }
// }
// let showoInfoInterval = setInterval(() => showoInfo(browsers[i]),2000);


let person = {
    firstName : 32,
    lastName :'Michael', 
    age : 'Jakson'
  }
  let {firstName, lastName, age} = person;
  let s = firstName;
  firstName = lastName
  lastName = age;
  age = s;
  console.log(firstName, lastName, age)