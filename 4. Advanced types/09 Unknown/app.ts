let input: unknown;
let input2: any;

input = 3;
input = ['ccc', 'fff'];

// let res: number = input;
let res: number = input2;

function run(i: unknown) {
  if (typeof i === 'number') {
    i++
  }
  else {
    console.log(i);
  }
}

async function getData() {
  try {
    await fetch('')
  }
  catch (error) {
    if(error instanceof Error){
      console.log(error.message);
    }
  }
}

// async function getDataForce() {
//   try {
//     await fetch('')
//   }
//   catch (error) {
//    const e = error as Error;
//    console.log(e.message);
//   }
// }

type U1 = unknown | string;
type U2 = unknown | any;

type I1 = unknown & string;
type I2 = unknown & any;
