// 回傳新物件的函式又稱為工廠函式
// class 的目的: 為一個統一介面，根據不同傳入的參數取得不同物件
class Payment {
    constructor(options) {
      this.payment = options.payment;
      if (this.payment === 'creditCard') {
        return new Creditcard(options);
      }
      if (this.payment === 'linePay') {
        return new Linepay(options);
      }
    }
  }
  
  // 不需要每次都必須要使用 new 運算子
  function paymentFactory(options) {
    return new Payment(options);
  }
  
  const checkout1 = paymentFactory({ payment: 'creditCard', amount: 6000});
  const checkout2 = paymentFactory({ payment: 'linePay', amount: 6000});