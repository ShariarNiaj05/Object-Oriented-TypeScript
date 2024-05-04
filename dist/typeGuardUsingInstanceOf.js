"use strict";
{
    // instanceof guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("dog is barking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMew() {
            console.log("cat is mewing");
        }
    }
    /****
     * smart way of handling type using function
     */
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("doggy", "german");
    const cat = new Cat("catty", "cat species");
    getAnimal(dog);
    getAnimal(cat);
}
