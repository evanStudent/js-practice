let arr1 = [ [1, 2, 3],
             [3, 4, 5],
             [6, 7, 8] ]

let arr2 = [ [5, 8],
             [6, 3] ]


// this let us print out rows of arr1 and got us started 
// for(let i=0; i < arr1.length; i++)
//     {
//         console.log('row:',i,':',arr1[i])
//     }

for(let i=0; i < arr1.length; i++)
    {
        console.log('row:',i,':',arr1[i])
            for(let j=0; j<arr1[i].length; j++)
            {
                // console.log('cols of the row: arr[i][j])
                // alter this to print only 
                // 1. the matric elemnts on the diagnal
                // 2. the matric elemnts on the off diagnol 
                // 3. the matrix elements in the 4 corners of the matrix 
                console.log('columns of the row:', arr1[i][j])
            }
    }




// function multiArrMultiply(a, b)
// {
//     for (let a=0; a < a.length, a++)
//     {

//     };

//     for (let b=0; b < b.length, b++)
//     {

//     };

//     for ()


// }