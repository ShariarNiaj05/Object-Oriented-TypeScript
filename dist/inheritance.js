"use strict";
{
    /*  class Student {
      name: string;
      age: number;
      address: string;
  
      constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
      }
  
      getSleep(numberOfHours: number) {
        console.log(`${this.name} should sleep at least ${numberOfHours} hours`);
      }
    }
  
    const student1 = new Student("Niaj", 24, "GEC");
    //   student1.getSleep(5);
   */
    /* class Teacher {
      name: string;
      age: number;
      address: string;
      designation: string;
  
      constructor(
        name: string,
        age: number,
        address: string,
        designation: string
      ) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
      }
  
      getSleep(numberOfHours: number) {
        console.log(`${this.name} should sleep at least ${numberOfHours} hours`);
      }
  
      takeClass(numberOfClass: number) {
        console.log(`${this.name} take ${numberOfClass} hours of classes`);
      }
    }
  
    const teacher = new Teacher("Shariar", 24, "GEC", "Web Instructor");
      // teacher.takeClass(6);
      
  
   */
    class Parent {
        // designation: string;
        constructor(name, age, address
        //   designation: string
        ) {
            this.name = name;
            this.age = age;
            this.address = address;
            //   this.designation = designation;
        }
        getSleep(numberOfHours) {
            console.log(`${this.name} should sleep at least ${numberOfHours} hours`);
        }
    }
    class Student1 extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student1("Niaj", 24, "GEC");
    //   student1.getSleep(5);
    class Teacher1 extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numberOfClass) {
            console.log(`${this.name} take ${numberOfClass} hours of classes`);
        }
    }
    const teacher1 = new Teacher1("Shariar", 24, "GEC", "Web Instructor");
    // teacher1.takeClass(6);
}
