import React from 'react';


function pullRiders(ridersArray) {
	var finalArray = [];
	while (ridersArray.length > 0 && finalArray.length < 5) {
		finalArray.push(ridersArray.pop());
	}
	return finalArray;
}

const RidesOrganizer = (data) => {
	finalCars = []

	// note that oc drivers/riders default to north
	var northDrivers = []
	var southDrivers = []
	var northRiders = []
	var southRiders = []

	// parse all users into driver and rider arrays 
	data.forEach(function(x) {
		if (x.driver = "yes") { 
			if (x.location = "north") {
				northDrivers.push(x);
			} else if (x.location = "south") {
				southDrivers.push(x);
			} else if (x.location = "oc") {
				northDrivers.push(x);
			} else {
				console.log("error: no location specified");
			}
		} else if (x.driver = "no") {
			if (x.location = "north") {
				northRiders.push(x);
			} else if (x.location = "south") {
				southRiders.push(x);
			} else if (x.location = "oc") {
				northRiders.push(x);
			} else {
				console.log("error: no location specified");
			}		
		} else {
			console.log("error: no driving preference specifided")
		}
	})

	while (northDrivers.length > 0) {
		var fullCar = {}
		fullCar[northDrivers.pop()] = pullRiders(northRiders)
		finalCars.push(fullCar)
	}

	while (southDrivers.length > 0) {
		var fullCar = {}
		fullCar[southDrivers.pop()] = pullRiders(southRiders)
		finalCars.push(fullCar)
	}

	var remainder = {}
	remainder["remainder"] = []

	if (northRiders.length > 0) {
		northRiders.forEach(function(northRider) {
			remainder["remainder"].push(northRider);
		})
	}

	if (southRiders.length > 0) {
		southRiders.forEach(function(southRider) {
			remainder["remainder"].push(southRider);
		})
	}

	finalCars.push(remainder);

    return finalCars
}

export default RidesOrganizer;
