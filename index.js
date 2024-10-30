// ДЗ 6.1. Написати функцію видалення масиву символів
let str = prompt('Введіть рядок');
let strRemove = prompt('Введіть символи які треба видалити');
let strArray = [];


function DeleteString(str, strRemove) {
    if (str && strRemove && str !== '' && strRemove !== '') {
        for (let i = 0; i < str.length; i++) {
            let a = false;
            for (let j = 0; j < strRemove.length; j++) {
                if (str[i] === strRemove[j]) {
                    a = true;
                    break;
                }
            }
            if (!a) {
                strArray += str[i];
            }
        }
        console.log(strArray);

    } else {
        alert('Введіть рядки');
    }
}

DeleteString(str, strRemove);