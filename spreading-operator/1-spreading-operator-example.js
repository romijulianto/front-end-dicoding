//sebelum spread
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);
 
/* output:
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

//sesudah spread
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

/* output:
Seafood Salad Nugget Soup
*/