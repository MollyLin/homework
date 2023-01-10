const creditCard = (amount: number) => {
  return Math.floor(amount * 0.8);
};
const linePay = (amount: number) => {
  console.log(amount);
};
const priceStrategies = {
  'creditCard': creditCard,
  'linePay': linePay,
};
const checkout = (payment: string, amount: number): number => {
  return priceStrategies[payment](amount);
};

checkout('creditCard', 10000);