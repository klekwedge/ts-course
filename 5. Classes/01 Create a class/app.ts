class User {

  constructor(name: string) {
    this.name = name;
  }

  name: string
}

const user = new User('Alex');
console.log(user);
user.name = 'John';
console.log(user);

class Admin {
  role: number
  // role!: number
}

const admin = new Admin();
admin.role = 1;