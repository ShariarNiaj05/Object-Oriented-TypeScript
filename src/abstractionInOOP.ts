{
  //
  // Abstraction
  /****
   * Abstraction can be use by using two type
   * 1. interface
   * 2.abstract class
   *
   * */
  /*interface Vehicle1 {
    name: string;
    model: number;
  }

   const vehicle1: Vehicle1 = {
    name: "Toyota",
    model: 2020,
  }; */

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`car is moving`);
    }
    test() {
      console.log(`This is a test method`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  // abstract class

  // idea
  abstract class Car2 {
    abstract startEngine(): void;

    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`This is a test method`);
    }
  }

  // const hondaCar = new Car2(); //Cannot create an instance of an abstract class
  // hondaCar.startEngine();

  // implementation
  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`car is moving`);
    }
  }
  //
}
