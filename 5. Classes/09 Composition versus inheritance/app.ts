class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Users extends Array<User>{ // Wrong
  searchByName(name: string) {
    return this.filter(u => u.name === name)
  }

  override toString(): string {
    return this.map(u => u.name).join(', ')
  }
}

const users = new Users();
users.push(new User('Alex'));
users.push(new User('John'));
console.log(users.toString());


class UserList { // Right
  users: User[];

  push(u: User) {
    this.users.push(u);
  }
}


class Payment {
  date: Date;
}

class UserWithPayment extends Payment { // Wrong
  name: string
}

class UserWithPayment2 { // Right
  user: User;
  payment: Payment;

  constructor(user: User, payment: Payment) {
    this.payment = payment;
    this.user = user;
  }
}