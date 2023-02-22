var Successor1 = /** @class */ (function () {
    function Successor1() {
    }
    Successor1.prototype.handle = function (payload) {
        console.log("Successor1 payload = ".concat(payload));
        var test = Math.floor(Math.random() * 2) + 1;
        if (test === 1) {
            payload += 1;
            payload = new Successor1().handle(payload);
        }
        else {
            payload -= 1;
            payload = new Successor2().handle(payload);
        }
        return payload;
    };
    return Successor1;
}());
var Successor2 = /** @class */ (function () {
    function Successor2() {
    }
    Successor2.prototype.handle = function (payload) {
        console.log("Successor2 payload = ".concat(payload));
        var test = Math.floor(Math.random() * 3) + 1;
        if (test === 1) {
            payload = payload * 2;
            payload = new Successor1().handle(payload);
        }
        else if (test === 2) {
            payload = payload / 2;
            payload = new Successor2().handle(payload);
        }
        return payload;
    };
    return Successor2;
}());
var Chain = /** @class */ (function () {
    function Chain() {
    }
    Chain.prototype.start = function (payload) {
        return new Successor1().handle(payload);
    };
    return Chain;
}());
var CHAIN = new Chain();
var PAYLOAD = 1;
var OUT = CHAIN.start(PAYLOAD);
console.log("Finished result = ".concat(OUT));
