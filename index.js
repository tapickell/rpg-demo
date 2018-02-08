var block_break = function() {
  console.log("\n\nagain....\n\n");
};

// var list = [1, 2, 3, 4, 5];
var animal_list = ["Lions", "Tigers", "Bears", "Flying Monkeys", "Dodo Birds"];

for (var index = 0; index < animal_list.length; index++) {
  var element = animal_list[index];
  console.log("{index: " + index + " =>  element: " + element + "}");
}

block_break();

for (let index = 0; index < 5; index++) {
  console.log("I am " + index);
}

block_break();

[0,1,2,3,4].forEach(index => {
  console.log("I am " + index);
});

block_break();

animal_list.forEach(animal => {
  console.log("I am " + animal);
  if (animal.indexOf(" ") != -1) {
    console.log("Hey the name '" + animal + "' has 2 words");
  }
});

block_break();