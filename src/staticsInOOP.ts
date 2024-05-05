{
  // static
  class Counter {
    count: number = 0;
    increment() {
      return (this.count = this.count + 1);
    }
    decrement() {
      return (this.count = this.count - 1);
    }
  }

  // The following instances are allocating different different memory
  const instance1 = new Counter();
  console.log(instance1.increment());

  const instance2 = new Counter();
    console.log(instance2.decrement());
    
    
}
