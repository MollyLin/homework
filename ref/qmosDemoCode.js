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
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var StephenCurry = /** @class */ (function (_super) {
    __extends(StephenCurry, _super);
    function StephenCurry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StephenCurry.prototype.jumpShot = function () {
        console.log('Curry jump shot.');
    };
    StephenCurry.prototype.threePointShot = function () {
        console.log('Curry 3pt shot.');
    };
    return StephenCurry;
}(Player));
var KlayThompson = /** @class */ (function (_super) {
    __extends(KlayThompson, _super);
    function KlayThompson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KlayThompson.prototype.jumpShot = function () {
        console.log('Thompson jump shot.');
    };
    KlayThompson.prototype.threePointShot = function () {
        console.log('Thompson 3pt shot.');
    };
    return KlayThompson;
}(Player));
var PlayerFactory = /** @class */ (function () {
    function PlayerFactory() {
        console.log('init');
    }
    PlayerFactory.create = function (name) {
        switch (name) {
            case 'curry':
                return new StephenCurry();
            case 'thompson':
                return new KlayThompson();
            default:
                throw Error('not shot');
        }
    };
    return PlayerFactory;
}());
PlayerFactory.create('curry').threePointShot();
