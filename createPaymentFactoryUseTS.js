var totalAmount = 6000;
var amount = 0;
var CreatePayment = /** @class */ (function () {
    function CreatePayment(paymentType, amount) {
        this.paymentType = paymentType;
        this.amount = amount;
    }
    CreatePayment.prototype.credit = function () {
        return Math.floor(totalAmount * 0.8);
    };
    CreatePayment.prototype.linePay = function () {
        var discount = 0;
        if (totalAmount >= 1000) {
            discount = Math.floor(totalAmount / 1000) * 100;
        }
        return totalAmount - discount;
    };
    CreatePayment.prototype.checkout = function () {
        if (this.paymentType === 'creditCard') {
            this.paymentType = '信用卡';
            this.amount = this.credit();
        }
        if (this.paymentType === 'linePay') {
            this.paymentType = '行動支付';
            this.amount = this.linePay();
        }
        return "".concat(this.paymentType, " \u7D50\u5E33\u7E3D\u91D1\u984D\u70BA ").concat(this.amount);
    };
    return CreatePayment;
}());
var useCreditCard = new CreatePayment('creditCard', amount);
var useLinePay = new CreatePayment('linePay', amount);
console.log(useCreditCard.checkout());
console.log(useLinePay.checkout());
// console.log(useCreditCard.paymentType);
