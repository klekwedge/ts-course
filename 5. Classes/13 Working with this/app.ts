class Payment {
  private date: Date = new Date();

  getDate(this: Payment) {
    return this.date;
  }

  getDataArrow = () => {
    return this.date;
  }
}

const p = new Payment();
const user = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateArrow: p.getDataArrow
}

console.log(p.getDate());
console.log(user.paymentDate());
console.log(user.paymentDateArrow());


class PaymentPersistent extends Payment{
  save(){
    return super.getDate()
  }

  // Error
  // antotherSave(){
  //   return super.getDataArrow()
  // }

  antotherSave(){
    return this.getDataArrow()
  }
}

console.log(new PaymentPersistent().save());
console.log(new PaymentPersistent().antotherSave());