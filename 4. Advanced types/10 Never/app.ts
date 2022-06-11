function generateError(message: string): never {
  throw new Error(message);
}

function dumpError(): never {
  while (true) { }
}

function rec(): never {
  return rec();
}

// const a: never = 1;

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
  switch (action) {
    case 'refund':
      // ...
      break;
    case 'checkout':
      // ...
      break;
    case 'reject':
      // ...
      break;
    default:
      const _check: never = action;
      throw new Error('Нет такого action')
  }
}

function isString(x: string | number): boolean {
  if (typeof x === 'string') {
    return true;
  }
  else if (typeof x === 'number') {
    return false;
  }
  generateError('example')
}