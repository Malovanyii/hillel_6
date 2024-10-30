// // ДЗ 6.1. Написати функцію видалення масиву символів
// let str = prompt('Введіть рядок');
// let strRemove = prompt('Введіть символи які треба видалити');
// let strArray = [];


// function DeleteString(str, strRemove) {
//     if (str && strRemove && str !== '' && strRemove !== '') {
//         for (let i = 0; i < str.length; i++) {
//             let a = false;
//             for (let j = 0; j < strRemove.length; j++) {
//                 if (str[i] === strRemove[j]) {
//                     a = true;
//                     break;
//                 }
//             }
//             if (!a) {
//                 strArray += str[i];
//             }
//         }
//         console.log(strArray);

//     } else {
//         alert('Введіть рядки');
//     }
// }

// DeleteString(str, strRemove);

// ДЗ 6.2. Визначення середнього арифметичного
let arr = [20, false, undefined, '4', 50, 15, {}, '10', null, 5];

function Average(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }

    return count === 0 ? 0 : sum / count;
}

console.log(Average(arr));