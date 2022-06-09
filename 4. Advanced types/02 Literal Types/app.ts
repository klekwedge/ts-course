// enum RequestType {
//   GET = 'get',
//   POST = 'post'
// }

function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
  return 1;
}

const a = 'example';
const b = 123;

fetchWithAuth('s', 'post')
// fetchWithAuth('s', 'post2')

let exampleVar: 21 = 21;
// exampleVar = 40;

let method = 'post'
fetchWithAuth('s', method as 'post')