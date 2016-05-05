/* 
Create a monkey object, which has the following properties:

name
species
foodsEaten
And the following methods:

eatSomething(thingAsString)
introduce: producers a string introducing itself, including its name, species,
and what it's eaten. Create 3 monkeys total. Make sure all 3 monkeys have all 
properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. 
Practice using both syntaxes for retrieving properties (dot notation and brackets).
*/

var monkeys = {name: "Simba", species: "Ape", foodsEaten: "Bananas"};

function eatSomething(obj, objName) {
	var result = "";
	for (var i in obj) {
		if (obj.hasOwnProperty(i)) {
			result += objName + "." + i + " = " + obj[i] + "\n";
		}
	}
	return result;
}

eatSomething(monkeys, "string");	

