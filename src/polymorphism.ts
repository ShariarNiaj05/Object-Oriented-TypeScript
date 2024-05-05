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

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);
}
