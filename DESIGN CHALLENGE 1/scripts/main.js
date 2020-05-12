//Step 1: Add Random Input

var fuelStart = 1000000; 
var distanceStart = 0;
var oxygenStart = 100;

var currentFuel = ((fuelStart -10)*1.5);
var currentDistance = ((distanceStart +2)*100);
var currentOxygen= ((oxygenStart -1)*0.9);

//Step 2: Add 3 functions
//Step 3: Make it visible

function newFuel (){ 
    var elem = document.getElementById("fuel");
	elem.innerHTML = Math.floor(currentFuel);
}

newFuel();

function newDistance (){ 
    var elem = document.getElementById("distance");
	elem.innerHTML = Math.floor(currentDistance);
}

newDistance();

function newOxygen (){ 
    var elem = document.getElementById("oxygen");
	elem.innerHTML = Math.floor(currentOxygen);
}

newOxygen();

console.log(newFuel, newDistance, newOxygen);

