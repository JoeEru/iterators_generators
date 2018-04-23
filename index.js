const makeAnimal = require("./makeAnimal");

//iterators
const zoo = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        if (!(Math.random() > 0.75))
          return {
            value: makeAnimal(),
            done: false
          };
        return { done: true };
      }
    };
  }
};
/* for (const animal of zoo) {
  console.log(animal);
} */

//generators
function* animalGen() {
  while (true) {
    if (Math.random() > 0.75) return;
    yield makeAnimal();
  }
}

const iterator = animalGen();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
