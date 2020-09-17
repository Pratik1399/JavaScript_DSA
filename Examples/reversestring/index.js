// Given a string, return a new string with the reversed order of characters

/*Examples*/

// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

/*Solution #1*/

// function reverse(str) {
//  // One way
// 	// const arr = str.split("");
// 	// arr.reverse();
// 	// return arr.join("");
//  // Second way
// 	return str.split("").reverse().join("");
// }

// reverse("abcd");

// module.exports = reverse;

/*Solution #2*/

// function reverse(str) {
// 	let reversed = "";
// 	for (let character of str) {
// 		reversed = character + reversed;
//   debugger;
// 	}
// 	return reversed;
// }

// reverse("abcd");

// module.exports = reverse;

/*Solution #3*/

function reverse(str) {
	// debugger;
	return str.split("").reduce((rev, char) => char + rev, "");
}

// reverse("abcd");

module.exports = reverse;

/*Above used*/

//reverse()
//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

//split()
//The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.

//join()
//The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

//for..of
//The for...of creates a loop iterating over iterable objects, including: built-in String, Array, Array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.

//debugger
//The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect.
