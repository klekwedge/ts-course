class User {
  _login: string;
  _password: string;
  createdAt: Date;

  set login(l: string | number) {
    this._login = 'user-' + l
    this.createdAt = new Date();
  }

  get login() {
    return this._login;
  }

  // set password(P: string){
  //   // sync
  // }

  async getPassword(P: string) {
    // async
  }

}

const user = new User();
user.login = 'myLogin';
console.log(user);
console.log(user.login);