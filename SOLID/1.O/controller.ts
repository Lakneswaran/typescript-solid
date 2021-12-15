import { Zoo } from './old';
import { Animal } from './Animal';
// import { IAnimal } from './IAnimal';

let zoo = new Zoo;
let cat = new Animal('cat', 'meaou meaou');
let dog = new Animal('dog', 'woef woef');
let tijger = new Animal('tijger', 'growwwww1');
zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(tijger);

zoo.animals.forEach((Animal) => {
    document.querySelector('#target').innerHTML += (Animal.name + ": " + Animal.sound + "<br>");
});