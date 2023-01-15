// Ref: https://www.patterns.dev/posts/factory-pattern/
const amount = 6000;

// with no arguments would throw an error
const createPayment = (type) => ({
  checkout: function () {
    console.log(type);
  },
});

// const creditCardCheckout = createPayment({
//   paymentName: '信用卡'
// });

// const linePayCheckout = createPayment({
//   paymentName: 'linePay'
// });

// const factory = new PaymentFactory();
const creditCard = createPayment('credit-card');
creditCard.checkout();
const linePay = createPayment('line-pay');
linePay.checkout();
