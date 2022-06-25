class UserService {
  // static name: string = 'sdf'; error
  name: string = 'sdf';
  private static db: any

  static async getUser(id: number) {
    return UserService.db.findById(id)
  }

  constructor(id: number) {

  }

  create() {
    UserService.db;
  }

  static {
    // await new Promise() error
    UserService.db = 'sdf'
  }
}

UserService.getUser(1)
const inst = new UserService(23)
// inst.getUser(1) error
inst.create()