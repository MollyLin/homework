/** 策略模式
 * 目的: 不需動結構即可增加新的付款方式及折扣規則
 * 1. 設置原始資料: 明細金額。
 * 2. 封裝運算模式
 * 3. 當 user 呼叫計算時，將請求委託給之前存放好的策略物件
 * */

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

const checkout = (payment: string, amount: number): void => {
  const config = priceStrategies[payment as 'creditCard' | 'linePay'](amount);
  return config;
};

checkout('creditCard', 6000);
checkout('linePay', 6000);