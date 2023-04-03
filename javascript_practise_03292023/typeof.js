// typeof does what it sounds like
// it returns the type of var passed to it 

console.log(typeof('Dean')); // expect string 


// come up with examples of the other JS types and use typeof to display the types 
// string, number, boolean, null, undefined 

// number
console.log(typeof(7));

// boolean
console.log(typeof(6 == 6));

// undefined 
console.log(typeof(undefined_Variable));

// object
console.log(typeof({name:'Fred'}))

// function
console.log(typeof(function blah() {}));

// undefined 
console.log(typeof(undefined));

// null
console.log(typeof(null)) // prints object

// symbol
const somethingUnique = Symbol();
console.log(typeof(somethingUnique));

