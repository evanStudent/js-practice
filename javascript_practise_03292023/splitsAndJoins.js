const fs = require('fs');
const books = fs.readFileSync('data.txt', 'utf-8');

console.log(books); // expect: 'Walden,Emma,Dracula,Imagica' (contents from data.txt)






// const books = 'Walden,Emma,Dracula,Imagica'; // CSV (comma separated values)

// take the string and turn it into an array 

// const arrBooks = books.split(',');
// console.log(arrBooks)

// only display books whose titles include the letter 'e' - can be upper or lower case
// for(const book of arrBooks)
// {
//     if(book.includes('e') || book.includes('E'))
//     {
//     console.log('*',book,'*')
//     }
// }


// or

// for(const book of arrBooks)
// {
//     const capBook = book.toUpperCase();
//     if(capBook.includes('E'))
//     {
//     console.log('*',book,'*')
//     }
// }


// take the array of books and turn it back into a string but 
// separate each book name by two colons (::)

// changes from array to string but does not switch from comma to colons
// console.log(arrBooks.toString());

// console.log(arrBooks.join('\t::\n'));





// output in this format
// Line #: list of books separated by |||
// Line 1: Walden|||Emma|||Dracula|||Imajica|||Babe|||Quaran
// Line 2: Republic|||Odyssey|||Frankenstein|||Hamlet|||MacBeth|||1984

const arrLines = books.split('\r\n');
let lineNum = 1;
for(const line of arrLines)
{
    let arrBooks = line.split(',');
    let displayLine = arrBooks.join('|||');
    console.log('Line',lineNum + ':',displayLine);
    lineNum++;    
}




