class PaymentFactory {
  static createPaymentType = new Map();
    static checkout (typeName, typeContent) {
      PaymentFactory.createPaymentType.set(typeName, typeContent);
    }
    constructor(type, options) {
      let typeToCreate = PaymentFactory.createPaymentType.get(type); // type: creditCard
      if (typeToCreate) {
        return new typeToCreate(options);
      } else {
        return new Error('Type is not exist!');
      }
    }
}

PaymentFactory.checkout('creditCard', class())