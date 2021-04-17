//REGULAR FUNCTION
// function declaration
function sayHello(greet) {
    console.log(`${greet}!`);
}
 
 
// function expression
const sayName = function (name) {
    console.log(`Nama saya ${name}`)
}

//ARROW FUNSTION
// function expression
const sayHello = greet => console.log(`${greet}!`);
const sayName = name => console.log(`Nama saya ${name}`);