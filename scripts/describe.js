import pets from "../data.json";

function sayLength(size) {
  console.log("This cat measures " + size + ".");
}

function describe(pet) {
  console.log(pet.name + " comes from " + pet.origin + ".");
}

sayLength("12 to 16 inches");
sayLength("15 to 20 inches");
sayLength("30 to 40 inches");

describe(pets[0]);
describe(pets[1]);
describe(pets[2]);

console.log(pets[0]);

function describe(pet) {
  console.log(pet.name + " comes from " + pet.origin + " and weighs up to " + pet.max_weight + " pounds.");
}

describe(pets[0]);
describe(pets[1]);
describe(pets[2]);


function greet(name, breed) {
  let message = "Welcome, " + name + "! Say hello to your new " + breed + ".";
  console.log(message);
  
  let output = document.getElementById("greet-output");
  let line = document.createElement("p");
  line.textContent = message;
  output.appendChild(line);
}

greet("Alex", "Tabby");
greet("Jordan", "Siamese");



function greet(name, breed) {
  console.log("Welcome, " + name + "! Say hello to your new " + breed + ".");
}

function sayOrigin(origin) {
  console.log("This cat originally came from " + origin + ".");
}

greet("Alex", "Tabby");
greet("Jordan", "Siamese");
greet("Sam", "Persian");


sayOrigin("United States");
sayOrigin("Ethiopia");
sayOrigin("Thailand");
