
/** 
 * 1. 設置原始資料: 明細金額。
 * 2. 封裝運算模式
 * 3. 當 user 呼叫計算時，將請求委託給之前存放好的策略物件
 * */

// const linepayDiscount = parseInt(amount / 1000) * 100;
// Math.floor(amount / 1000) * 100
// const creditDiscount = 
// creditRule & linepayRule

// create a 接受 all payments 及 amount 的輸入，輸出依不同 payments 最後算出符合的折扣結果。
// checkoutProcess();
// 目的: 不需動結構即可增加新折扣規則
// user pick linepay > if (amount > 1000 ) 呼叫 linepayDiscount()

// 策略物件:
/**
 * const payments = {
 *  creditCard: function() {},
 *  linepay: function() {},
 * }
 * or
 * creditCard fn()
 * linepay fn()
 * checkout fn()
 * 
 * // const context = function()
 * checkout('creditCard', 10000)
 * checkout('linePay', 10000)
 */

const message = 'Hello World!';

function say(something: string): void {
  console.log(something);
}

say(message);
// => Hello World

// const message = 'Hello World!';

// Should Raise Error!
// console.log(message.touppercase());
