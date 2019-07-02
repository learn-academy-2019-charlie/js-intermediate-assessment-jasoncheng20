// Intermediate Javascript Assessments

// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

reverse = (array) => {
	let newArr = array.reverse()
	return newArr
}

console.log(reverse(originalArray))

// 2. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])

// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// write a function that takes a string as an input
letterCounter = (string) => {
	var counter = []
	// loop through the string
	for (let i=0; i<string.length; i++){
		// if "l" or "L", push arbitrary value into an array
		if (string.charAt(i) === "l" || string.charAt(i) === "L"){
			counter.push(1)
		}
	}
	return counter.length
}

console.log(letterCounter(ourString))
console.log(letterCounter("shouLd be 6. lLllL"))

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

getFib = (desiredLength) => {
	// create an initial array
	var fibArray = [1, 1]
	// account for length less than or equal to 2
	if (desiredLength <=2) {
		fibArray.length = desiredLength
	} else {
		for (let i = 0; i < desiredLength - 2; i++){
			// push sum of array at index i and at index (i-1) into array
			fibArray.push(fibArray[i]+fibArray[i+1])	
		}
	}

	// returns the array
	return fibArray
}
console.log(getFib(10))
console.log(getFib(5))

//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.

var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

oddChecker = (array) => {
	var newNum = []
	for (let i=0; i < array.length; i++){
		newNum.push(parseInt(array[i]))
	}
	var oddNumbers = []
	for (let i=0; i<newNum.length; i++){
		if (isNaN(newNum[i]) !== true){
			if (newNum[i] % 2 !== 0) {
				oddNumbers.push(newNum[i])
			}
		}
	}
	return oddNumbers
}

console.log(oddChecker(fullArr))

refactorOdd = (array) => {
	// map to create an array which will turn '7' into 7, and 'string' into NaN
	var newNum = array.map(function(items){
		return parseInt(items)
	})
	// filter out NaN and even numbers
	var onlyOdd = newNum.filter(function(number){
		return ((isNaN(number)!== true) && (number % 2 !== 0))
	})
	
	return onlyOdd
}

console.log(refactorOdd(fullArr))
