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
