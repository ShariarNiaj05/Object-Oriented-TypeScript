"use strict";
{
    // oop- class
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
    }
    const dog = new Animal("Dog name", "German", "Ghew Ghew");
    console.log(dog.name);
    // ------------------
}
