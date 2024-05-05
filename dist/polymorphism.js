"use strict";
{
    class Person {
        getSleep() {
            console.log("i am sleeping 8 hours a day");
        }
    }
    class Student extends Person {
        getSleep() {
            console.log("i am sleeping 7 hours a day");
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log("i am sleeping 6 hours a day");
        }
    }
    const getSleepingHours = (param) => {
        param.getSleep();
    };
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShapeArea = (param) => {
        console.log(param.getArea);
    };
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(5, 3);
    getShapeArea(shape1);
    getShapeArea(shape2);
    getShapeArea(shape3);
}
