abstract class Logger {
  abstract log(message: string): void

  printDate(date: Date) {
    this.log(date.toString())
  }
}

class MyLogger extends Logger {
  log(message: any): void {
    console.log(message)
  }

  logWithDate(message: string) {
    this.printDate(new Date())
    console.log(message)
  }
}

const logger = new MyLogger()
logger.logWithDate('Hello!')