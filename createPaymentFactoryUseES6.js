/**
 * Ref:
 * https://www.patterns.dev/posts/factory-pattern/
 * https://medium.com/dailyjs/building-and-composing-factory-functions-50fe90141374
 *  */

const totalAmount = 6000;
let amount = 0;
let paymentType = '';

// Constructor Function
class CreatePayment {
  // constructor() 用來對實體的初始化 initialization
  constructor() {
    this.checkout = function(paymentType) {
      if (paymentType === 'creditCard') {
        paymentType = '信用卡';
        CreatePayment.creditCard();
      }
      if (paymentType === 'linePay') {
        paymentType = '行動支付';
        CreatePayment.linePay();
      }
      return `${paymentType} 結帳總金額為 ${amount}`;
    }
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

const factory = new CreatePayment();
const useCreditCard = factory.checkout('creditCard');
console.log(useCreditCard);
const useLinePay = factory.checkout('linePay');
console.log(useLinePay);

