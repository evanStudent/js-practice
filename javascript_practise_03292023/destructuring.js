// import {useState} from 'react';

const person = {name: 'Evan', age: 33, job: 'developer'};

// const age = person.age;
// const job = person.job;
// console.log(age, job) // expect: 33 developer 

// destructuring is better, more compact syntax for doing this 
// const {age, job} = person;
// console.log(age, job); // expect: 33 developer

// change names of variables 
const { age:myAge, job:occupation } = person;
console.log(myAge, occupation); // expect: 33 developer


// destructuring with arrays 
const books = ['Tale of Two Cities', 'Bible', 'Women in Love', 'Emma', 'Walden'];
// const onThePond = books[4];
// const theBestOfTimes = books[0];
// const [theBestOfTimes,,,,onThePond] = books;
// console.log(onThePond,theBestOfTimes); // expect: Walden Tale of Two Cities


const [theBestOfTimes,...allTheRest] = books;
console.log(allTheRest); // expect: ['Bible', 'Women in Love', 'Emma', 'Walden']



