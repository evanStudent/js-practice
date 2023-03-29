// 

function evenNumGen()
{
    let number = 0;
    const nextEven = function()
    {
        number += 2;
        return(number);
    }
    return(nextEven)
}

// if you return a fn from w/n a fn 
// any vars you use that are one level of scope out are returned with the fn

const getNext = evenNumGen();

console.log(getNext());