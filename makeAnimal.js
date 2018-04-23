const animals = ["cat", "dog", "hamster", "bird"];
const names = ["fluffy", "mrsnowball", "snuffles", "tbiba"];
const colors = ["brown", "grayish", "black", "golden"];

module.exports = function makeAnimal() {
  return `${names[Math.floor(Math.random() * 4)]} ${
    colors[Math.floor(Math.random() * 4)]
  } ${animals[Math.floor(Math.random() * 4)]}`;
};
