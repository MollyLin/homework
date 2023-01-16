/**
 * Ref:
 * https://www.patterns.dev/posts/factory-pattern/
 * https://medium.com/dailyjs/building-and-composing-factory-functions-50fe90141374
 *  */

const totalAmount = 6000;
let amount = 0;

// Constructor Function
class CreatePayment {
  // constructor() 用來對實體的初始化 initialization
  constructor(paymentType) {
    this.paymentType = paymentType;
  }
  checkout() {
    if (this.paymentType === 'creditCard') {
      this.paymentType = '信用卡';
      CreatePayment.creditCard();
    }
    if (this.paymentType === 'linePay') {
      this.paymentType = '行動支付';
      CreatePayment.linePay();
    }
    return `${this.paymentType} 結帳總金額為 ${amount}`;
  }
}

CreatePayment.creditCard = function() {
  amount = Math.floor(totalAmount * 0.8);
  return amount;
};

CreatePayment.linePay = function() {
  let discount = 0;
  if (amount >= 1000) {
    discount = Math.floor(amount / 1000) * 100;
  }
  amount = totalAmount - discount; 
  return amount;
};

const useCreditCard = new CreatePayment('creditCard');
const useLinePay = new CreatePayment('linePay');

console.log(useCreditCard.checkout());
console.log(useLinePay.checkout());

