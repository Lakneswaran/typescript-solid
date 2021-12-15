"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var old_1 = require("./old");
var Animal_1 = require("./Animal");
// import { IAnimal } from './IAnimal';
var zoo = new old_1.Zoo;
var cat = new Animal_1.Animal('cat', 'meaou meaou');
var dog = new Animal_1.Animal('dog', 'woef woef');
var tijger = new Animal_1.Animal('tijger', 'growwwww1');
zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(tijger);
zoo.animals.forEach(function (Animal) {
    document.querySelector('#target').innerHTML += (Animal.name + ": " + Animal.sound + "<br>");
});
