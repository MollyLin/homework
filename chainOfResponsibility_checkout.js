var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** The default chaining behavior */
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (amount) {
        if (this.nextHandler) {
            return this.nextHandler.handle(amount);
        }
    };
    return AbstractHandler;
}());
var LinePayHandler = /** @class */ (function (_super) {
    __extends(LinePayHandler, _super);
    function LinePayHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinePayHandler.prototype.handle = function (amount) {
        var discount = 0;
        if (amount >= 1000) {
            discount = Math.floor(amount / 1000) * 100;
        }
        var hasDiscountAmount = amount - discount;
        console.log("LinePay \u7D50\u5E33\u91D1\u984D\u70BA ".concat(hasDiscountAmount));
        return _super.prototype.handle.call(this, amount);
    };
    return LinePayHandler;
}(AbstractHandler));
var CreditCardHandler = /** @class */ (function (_super) {
    __extends(CreditCardHandler, _super);
    function CreditCardHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreditCardHandler.prototype.handle = function (amount) {
        var hasDiscountAmount = Math.floor(amount * 0.8);
        console.log("\u4FE1\u7528\u5361\u7D50\u5E33\u91D1\u984D\u70BA ".concat(hasDiscountAmount));
        return _super.prototype.handle.call(this, amount);
    };
    return CreditCardHandler;
}(AbstractHandler));
;
var chainLinePay = new LinePayHandler();
var chainCreditCard = new CreditCardHandler();
chainLinePay.setNext(chainCreditCard);
chainLinePay.handle(6000);
/** option 2 */
// chainCreditCard.setNext(chainLinePay);
// chainCreditCard.handle(6000);
