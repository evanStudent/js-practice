const arrCities = ['Liverpool', 'Bridgewater', 'Kentville', 'Yarmouth', 'Sydney', 'Pictou', 'Dartmouth'];

// symbols are hidden
// they won't be found in a for loop except if specified 
// unique value that can be used as a key in an object's key value pair
// keys in objects are always strings (when not symbols)

const first = Symbol('first');


// first is a symbol 
// the rest of the keys are strings, however the terminal displays them without quote marks
const objCities = {
    first: 'Liverpool',
    cityB: 'Bridgewater',
    cityK: 'Kentville',
    cityY: 'Yarmouth',
    cityS: 'Sydney',
    cityP: 'Pictou',
    cityD: 'Dartmouth'
}

console.log(arrCities);
console.log(objCities);

// Maps are like enhanced objects 

const ourMap = new Map([[{order:'first'}, 'Evan'], [{order:'second'}, 'Maddie'], [{order:'third'}, 'Rebecca']]);
ourMap.delete('second');
ourMap.delete('third');


console.log(ourMap);