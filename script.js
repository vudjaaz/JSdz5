/*Задание 1

Текст задания
1. Создайте объект с ключами от 1 до 7, в качестве
значений содержащий имена дней недели. Выведите на
экран “Вторник”
2. Создайте объект user с ключами 'name', 'surname', ‘age’.
Выведите на экран фамилию, имя и возраст через дефис.
3. Добавьте в объект user свойство отчество, которое
пользователь должен ввести с клавиатуры
4. Удалите свойство surname*/



// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// }

// console.log(week['2']);




// const user = {
//     name: 'Yurii',
//     surName: 'Borskii',
//     age: 29
// }

// console.log(user.name + '-' + user.surName + '-' + user.age);

// user.lastName = prompt('Введите отчество');

// delete user.surName;




/*Задание 2

1. Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут
названия дней, а значениями - их номера.
2. const obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат.*/




// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// let week = {};

// for (let i = 0; i < arr1.length; i++) {
//     week[arr1[i]] = arr2[i];
// }

// console.log(week);




// const obj = { x: 1, y: 2, z: 3 };

// for (let key in obj) {
//     console.log(obj[key] * obj[key]);
//     // obj[key] **= 2;
// }





/*Задание 3

const obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
Найдите сумму элементов приведенного объекта.*/



// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }



// function sum(obj) {
//     let sum = 0;
//     for (const key in obj) {
//         sum += (obj[key]);
//     }
//     return sum;
// }

// let allsum = 0;
// for (const key in obj) {
//     let res = sum(obj[key]);
//     allsum += res;
// }
// console.log(allsum);


// function objSum(obj) {
//     let result = Object.values(obj).reduce((acc, element) => {
//         return acc + element
//     }, 0);
//     return result;
// }

// let object1 = Object.values(obj);
// let sum = object1.reduce((acc, element) => {
//     return acc + objSum(element)
// }, 0);
// console.log(sum);




/*Задание 4

1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя
вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы
проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил
неверно*/



// const ridlles = {
//     question: 'Что можно увидеть с закрытыми глазами?',
//     answer: 'Сон',
//     hints: ['Этопроиходит каждую ночь', 'Обычно это приятное состояние'],

//     askQuestion() {
//         let userAnswer = prompt(this.question);

//         if (userAnswer.toLowerCase() === this.answer.toLowerCase()) {
//             console.log('Поздравляю, вы правильно ответили!');
//         } else {
//             console.log('Вы ответили не правильно');

//             let hintChoice = prompt('Хотите подсказку? (да/нет)');
//             if (hintChoice.toLowerCase() === 'да') {
//                 let randomHintIndex = this.hints.pop();
//                 console.log('Подсказка: ' + randomHintIndex);
//             }
//         }
//     }
// }

// ridlles.askQuestion();






// ДЗ




// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.




// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }


// for (const key in numbers) {
//     if (numbers[key] >= 3) {
//         console.log(numbers[key]);
//     }
// }




// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.



// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };


// console.log(post.author, post.comments[0].rating.dislikes, post.comments[1].userId, post.comments[1].text);





// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15 % используя метод forEach.

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// products.forEach((item) => console.log(item.price * 0.85));





// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter.Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.


// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];


// const product = products.filter(function (item) {
//     if (item.photos !== undefined && item['photos'].length > 0) {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(product);


// const sortPrice = products.sort(function (a, b) {
//     return a.price - b.price
// })

// console.log(sortPrice);




// **Задание 5**
// Дано 2 массива
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// ```


// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями




const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let week = {};

for (let i = 0; i < en.length; i++) {
    week[en[i]] = ru[i];
}

console.log(week);


