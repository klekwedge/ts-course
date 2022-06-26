"use strict";
// interface IObject {
//   id: number,
//   name: string
// }
function sortFunction(data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
console.log(sortFunction(data));
console.log(sortFunction(data, 'desc'));
