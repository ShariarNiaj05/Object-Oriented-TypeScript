"use strict";
{
    // static
    class Counter {
        static increment() {
            return (Counter.count += 1);
        }
        static decrement() {
            return (Counter.count -= 1);
        }
    }
    Counter.count = 0;
    // The following instances are allocating different different memory
    /*
    const instance1 = new Counter();
    console.log(instance1.increment());
  
    const instance2 = new Counter();
    console.log(instance2.decrement());
   */
    // i want to address the same memory allocation for the above example =>> have to use static
    const instance1 = new Counter();
    //   console.log(instance1.increment());
    //   console.log(instance1.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());
    const instance2 = new Counter();
    console.log(Counter.decrement());
}
