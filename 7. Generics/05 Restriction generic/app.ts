class Venicle {
  run: number | undefined
}

function kmToMiles<T extends Venicle>(venicle: T): T {
  if (venicle.run) {
    venicle.run = venicle.run / 0.62
  }

  return venicle
}

class LCV extends Venicle {
  capacity: number | undefined
}

const venicle = kmToMiles(new Venicle())
const lcv = kmToMiles(new LCV())
// kmToMiles({ a: 1 }) error
kmToMiles({ run: 1 })

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

interface IVenicle {
  run: number | undefined
}

function kmToMiles2<T extends IVenicle>(venicle: T): T {
  if (venicle.run) {
    venicle.run = venicle.run / 0.62
  }

  return venicle
}

interface ILCV extends IVenicle {
  capacity: number | undefined
}


kmToMiles({ run: 1 })

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

type TypeVenicle = {
  run: number | undefined
}

function kmToMiles3<T extends TypeVenicle>(venicle: T): T {
  if (venicle.run) {
    venicle.run = venicle.run / 0.62
  }

  return venicle
}

type TypeCV = TypeVenicle & { capacity: number | undefined }

kmToMiles({ run: 1 })

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// function logId<T extends string | number>(id: T): T {
//   console.log(id);
//   return id;
// }

function logId<T extends string | number, Y>(id: T, additionalData: Y): { id: T, data: Y } {
  console.log(id);
  console.log(additionalData);
  return { id, data: additionalData }
}