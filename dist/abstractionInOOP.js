"use strict";
{
    // implementation
    class Car1 {
        startEngine() {
            console.log(`I am starting the car engine`);
        }
        stopEngine() {
            console.log(`I am stopping the car engine`);
        }
        move() {
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
    class Car2 {
        test() {
            console.log(`This is a test method`);
        }
    }
    // const hondaCar = new Car2(); //Cannot create an instance of an abstract class
    // hondaCar.startEngine();
    // implementation
    class ToyotaCar extends Car2 {
        startEngine() {
            console.log(`I am starting the car engine`);
        }
        stopEngine() {
            console.log(`I am stopping the car engine`);
        }
        move() {
            console.log(`car is moving`);
        }
    }
    //
}
