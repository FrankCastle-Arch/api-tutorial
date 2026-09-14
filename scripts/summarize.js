import pets from "../data.json";

function summarize(pet) {
	return pet.name + " comes from " + pet.origin + ".";
}

function weightLine(pet) {
	let line = pet.name + " weighs up to ";
	line = line + pet.max_weight + " pounds.";
	return line;
}

function playScore(pet) {
  return pet.playfulness * 2;
}

function playfulVerdict(pet) {
	if (pet.playfulness >= 4) {
		return pet.name + " is extremely playful!";
	  } else {
		return pet.name + " is more of a calm cat.";
	  }
}		
	
function compare(petA, petB) {
  if (petA.max_weight > petB.max_weight) {
    return petA.name + " is heavier than " + petB.name + ".";
  } else if (petB.max_weight > petA.max_weight) {
    return petB.name + " is heavier than " + petA.name + ".";
  } else {
    return petA.name + " and " + petB.name + " weigh the same.";
  }
}


function scoreLine(score) {
	return "Play score: " + score + " out of 10.";
}

let first = summarize(pets[0]);
let second = weightLine(pets[1]);
let third = scoreLine(playScore(pets[2]));






console.log(first);
console.log(second);
console.log(third);

console.log(playfulVerdict(pets[0]) + "\n" + playfulVerdict(pets[1]));

console.log(compare(pets[0], pets[2]));