
// await stops the process until the data is retrieved but only works inside an async function
// after the fetch what we get back is a repsonse

async function getStuff()
{
const result = await fetch('https://jsonplaceholder.typicode.com/todos')
const json = await result.json();

console.log('the result', json);
}

getStuff();




// fetch says to go to network and grab the data 
// .then says when you get the result back i want you to do the next thing 
// ie: extract the json from it 

// curly brances are replaced when var is redclared later on 
// let output = {};

fetch('https://jsonplaceholder.typicode.com/todos')
.then(result=>result.json())
.then(json=>{
    console.log('our response',json)
    showFancyOutput(json);
});


function showFancyOutput(json)
{
    // only display elements that have titles beginning with the lettter 't'
    // number the results 

    let number = 1;

    for (const todo of json)
    {
        if (todo.title.startsWith('t'))
        console.log(number, ':', todo.title);
        number = number + 1
    }
    
    
}