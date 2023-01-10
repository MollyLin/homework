const creditCard = (amount: number) => {
  console.log(`信用卡結帳總金額為 ${Math.floor(amount * 0.8)}`);
};

const linePay = (amount: number) => {
  let discount = 0;
  if (amount >= 1000) {
    discount = Math.floor(amount / 1000) * 100;
  }
  console.log(`LinePay 結帳總金額為 ${amount - discount}`);
};
const priceStrategies = {
  'creditCard': creditCard,
  'linePay': linePay,
};
const checkout = (payment: string, amount: number): number => {
  return priceStrategies[payment](amount);
};

checkout('creditCard', 6000);
checkout('linePay', 6000);