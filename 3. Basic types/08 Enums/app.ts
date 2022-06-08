enum StatusCode {
  SUCCESS = 1,
  IN_PROGRESS = 'p',
  FAILED = 'f'
}

const res = {
  message: 'Платеж успешен',
  statusCode: StatusCode.SUCCESS
}

if (res.statusCode === StatusCode.SUCCESS) {

}

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS)
action(1)
// action(3);
// action('p')


function compute() {
  return 3;
}

enum Roles {
  ADMIN = 1,
  USER = compute(),
}

function test(x: { ADMIN: number }) {

}

test(Roles);

const enum Cities {
  LA = 1,
  NY = 2,
}

const res2 = Cities.NY;
