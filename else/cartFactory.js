// 公共的父建構式
function CarMaker() {}

CarMaker.prototype.drive = function () {
  return 'Vroom, I have ' + this.doors + ' doors';
};

// CarMaker 的靜態方法，用來建立 car 物件
CarMaker.factory = function (type) {
  var constr = type,
    newcar;

  if (typeof CarMaker[constr] !== 'function') {
    throw {
      name: 'Error',
      message: constr + ' does not exist',
    };
  }

  if (typeof CarMaker[constr].prototype.drive !== 'function') {
    CarMaker[constr].prototype = new CarMaker();
  }

  newcar = new CarMaker[constr]();

  return newcar;
};

// 繼承自 CarMaker，且被定義為 CarMaker 的靜態屬性
CarMaker.Compact = function () {
  this.doors = 4;
};

CarMaker.Convertible = function () {
  this.doors = 2;
};

CarMaker.SUV = function () {
  this.doors = 24;
};

var corolla = CarMaker.factory('Compact');
var soltice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

console.log(corolla.drive()); // Vroom, I have 4 doors
console.log(soltice.drive()); // Vroom, I have 2 doors
console.log(cherokee.drive()); // Vroom, I have 24 doors
