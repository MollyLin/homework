// ES6 Class syntax
class PaymentFactory {
	constructor() {
		this.createPayment = function(type) {
			let payment;
			if (type === 'credit-card'|| type === 'credit-card-bonus' || type === 'credit-card-installment') payment = new CreditCard();
			else if (type === 'line-pay') payment = new Wallet();
			// payment.roll = function() {
			// 	return `The ${this._type} is rolling.`;
			// };
			return payment;
		};
	}
}

class CreditCard {
	constructor() {
		this._type = 'credit-card';
		this.kick = function() {
			return 'You kicked the football.';
		};
	}
}

class Wallet {
	constructor() {
		this._type = 'line-pay';
		this.bounce = function() {
			return 'You bounced the basketball.';
		};
	}
}

// creating objects

const factory = new PaymentFactory();

const checkoutCreditcard = factory.createPayment('credit-card');

// const myBasketball = factory.createBall('basketball');

// console.log(myFootball.roll()); // The football is rolling.
// console.log(myBasketball.roll()); // The basketball is rolling.
// console.log(myFootball.kick()); // You kicked the football.
// console.log(myBasketball.bounce()); // You bounced the basketball.
