// interface IObject {
//   id: number,
//   name: string
// }

// function sortFunction<T extends IObject>(data: Array<T>, ascending: boolean): Array<T> {
//   if (ascending) {
//     return data.sort((a, b) => a.id > b.id ? 1 : -1);
//   }
//   return data.sort((a, b) => a.id > b.id ? -1 : 1);
// }


// const data = [
//   { id: 2, name: 'Петя' },
//   { id: 1, name: 'Вася' },
//   { id: 3, name: 'Надя' },
// ];

// console.log(sortFunction(data, true))
// console.log(sortFunction(data, false))

interface ID {
  id: number,
}

function sortFunction<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
  return data.sort((a, b) => {
    switch (type) {
      case 'asc':
        return a.id - b.id
      case 'desc':
        return b.id - a.id
    }
  });
}

const data = [
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Надя' },
];

console.log(sortFunction(data))
console.log(sortFunction(data, 'desc'))