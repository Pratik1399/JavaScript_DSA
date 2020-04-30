/*BUILT-IN DATA STRUCTURES*/

//Through the lens of Big O

/*OBJECTIVES*/

//Understand how objects and arrays work, through the lens of Big O

//Explain why adding elements to the beginning of an array is costly

//Compare and contrast the runtime for arrays and objects, as well as built-in methods

/*OBJECTS*/

//Unordered,key value pairs!

//When to use objects

//When you don't need order

//When you need fast access / insertion and removal

/*Big O of Objects*/

//Insertion-O(1)

//Removal-O(1)

//Searching-O(N)

//Access-O(1)

//When you don't need any ordering, objects are an excellent choice!

/*Big O of Object Methods*/

//Object.keys-O(N)

//Object.values-O(N)

//Object.entries-O(N)

//hasOwnProperty-O(1)

let instructor = {
	firstName: "Kelly",
	isInstructor: true,
	favoriteNumbers: [1, 2, 3, 4],
};

Object.keys(instructor);

console.log(Object.keys(instructor));

Object.entries(instructor);

console.log(Object.entries(instructor));

instructor.hasOwnProperty("firstName");

console.log(instructor.hasOwnProperty("firstName"));

/*ARRAYS*/

//Ordered lists!

//WHEN TO USE ARRAYS

//When you need order

//When you need fast access / insertion and removal (sort of....)

/*Big O of Arrays*/

//Insertion-It depends....

//Removal-It depends....

//Searching-O(N)

//Access-O(1)

/*Big O of Array Operations*/

//push-O(1)

//pop-O(1)

//shift-O(N)

//unshift-O(N)

//concat-O(N)

//slice-O(N)

//splice-O(N)

//sort-O(N * log N)

//forEach/map/filter/reduce/etc.-O(N)

//Limitations of Arrays

//Inserting at the beginning is not as easy as we might think! There are more efficient data structures for that!

let names = ["Michael", "Melissa", "Andrea"];

console.log(names);

let values = [true, {}, [], 2, "awesome"];

console.log(values);
