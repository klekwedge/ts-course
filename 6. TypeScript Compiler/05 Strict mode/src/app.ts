// noImplicitAny
// function test(a){

// }


// strictNullChecks
// function test(a: number): number {
//   if (a > 0) {
//     return a
//   }
// }


// strictFunctionTypes
// function test(a: number): number {
//   return a
// }

// type StrOrNumFunc = (a: number | string) => number;
// let f: StrOrNumFunc = test;
// f('sdf')


// strictBindCallApply
// function test(a: number): number {
//   return a
// }

// test.apply(undefined, [1, 3])


// strictPropertyInitialization
// class A {
//   b: number
// }


// noImplicitThis
// class A {
//   b: number

//   test() {
//     return function () {
//       this.b = 5
//     }
//   }
// }

// useUnknownInCatchVariables
// try {

// }
// catch (e) {
//   console.log(e.message);
// }


// alwaysStrict
