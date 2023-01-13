const createPayment = ({ paymentName, amount }) => ({
  // if ()
});

const creditCardCheckout = createPayment({
  paymentName: '信用卡',
  amount: 6000,
});

const linePayCheckout = createPayment({
  paymentName: 'linePay',
  amount: 6000,
});

console.log(creditCardCheckout);