interface Shooting {
  jumpShot(): void;
  threePointShot(): void;
}

abstract class Player implements Shooting {
  abstract jumpShot(): void;
  abstract threePointShot(): void;
}

class StephenCurry extends Player {
  jumpShot() {
      console.log('Curry jump shot.');
  }

  threePointShot() {
      console.log('Curry 3pt shot.');
  }
}

class KlayThompson  extends Player {
  jumpShot() {
      console.log('Thompson jump shot.');
  }

  threePointShot() {
      console.log('Thompson 3pt shot.');
  }
}

class PlayerFactory{
  constructor() {
      console.log('init');
  }
  
  static create(name: string): Player{
      switch(name){
          case 'curry':
              return new StephenCurry();
          case 'thompson':
              return new KlayThompson();
          default:
              throw Error('not shot');
      }
  }
}

PlayerFactory.create('curry').threePointShot();