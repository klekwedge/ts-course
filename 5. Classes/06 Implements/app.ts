interface ILogger {
  log(...args: any[]): void
  error(...args: any[]): void
  // log: (...args) => void
  // error: (...args)=> void
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }

  error(...args: any[]): void {
    console.log(...args);
  }

  // async error(...args: any[]): Promise<void> {
  //   console.log(...args);
  // }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void;
}

class User implements IPayable, IDeletable {
  delete(): void {
    throw new Error('Method not implemented.');
  }

  pay(paymentId: string | number): void {
    console.log('Pay function');
  }
}