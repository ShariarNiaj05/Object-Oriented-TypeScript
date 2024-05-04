"use strict";
{
    // oop- class
    /****
     *  from the below class name, species, sound are the classes's property.
     * If i write a function into the Class, it'll be called "METHOD"
     *  */
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} make sounds like ${this.sound}`);
        }
    }
    const dog = new Animal("Dog name", "German", "Ghew Ghew");
    //   console.log(dog.name);
    const cat = new Animal("cat bhai", "don't know", "Mew Mew");
    //   console.log(cat.sound);
    //   cat.makeSound()
    // parameter property ---------------- for cleaner code
    class Animal1 {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} make sounds like ${this.sound}`);
        }
    }
    const cat1 = new Animal1("cat bhai", "don't know", "Mew Mew");
    cat1.name;
    // ------------------
}
