var creditCard = function (amount) {
    console.log("\u4FE1\u7528\u5361\u7D50\u5E33\u7E3D\u91D1\u984D\u70BA".concat(Math.floor(amount * 0.8)));
};
var linePay = function (amount) {
    var discount = 0;
    if (amount >= 1000) {
        discount = Math.floor(amount / 1000) * 100;
    }
    console.log("LinePay \u7D50\u5E33\u7E3D\u91D1\u984D\u70BA".concat(amount - discount));
};
var priceStrategies = {
    'creditCard': creditCard,
    'linePay': linePay
};
var checkout = function (payment, amount) {
    return priceStrategies[payment](amount);
};
checkout('creditCard', 6000);
checkout('linePay', 6000);
