//Creative assignment #1 

//Step 1: Add random rocket data:
var fuelStart = 1000000; 
var distanceStart = 0;
var oxygenStart = 100;


//Step 2: Add random formulas to determine rockets current data:
var currentFuel = ((fuelStart -10)*1.5);
var currentDistance = ((distanceStart +2)*100);
var currentOxygen= ((oxygenStart -1)*0.9);


//Step 3: Add 3 functionalities 
//Step 4: Make results visible on the website
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

