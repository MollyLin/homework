// 工廠方法就是一個會回傳全新物件的方法
// 可利用函式建構子或 class 生產具有相同屬性的物件

// v1 ====
let options = {
  amount
};

class PaymentFactory {
  constructor(type) {
    if (type === 'creditCard') {
      return new Creditcard(options);
    }
    if (type === 'linePay') {
      return new Linepay(options);
    }
  }
};

let checkoutCreditCard = new PaymentFactory('creditCard');
let checkoutLinePay = new PaymentFactory('linePay');

// else ===
class Payment {
  constructor(type) {
    this.type = type;
  }
}
class Creditcard extends Payment {
  constructor()
}