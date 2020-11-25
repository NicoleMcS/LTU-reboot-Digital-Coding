/*  
Declaring a function


To declare a function, you use the function keyword, followed by the function name, a list of parameters, and the function bdy.

(e.g. functionAdd)
function functionName( parameters ) {

    function body

    CODE GOES HERE

}

*/

function greeting( name ) {

    console.log( 'Hello ' + name );
    
}

greeting('Nicole');


function nameAndAge( name, age ) {

console.log( name + ' is ' + age + ' years old');

}

nameAndAge('Nicole', 28 );



// Returning a value

function say( message ) {

    console.log( message );

}

//var result = say('Hello');

//console.log( 'Result: ', result );

function add( a, b ) {

    return a + b;

}

console.log( add( 1, 2 ) );

 var onePlusTwo = add(1, 2);

 var twoPlusTwo = add( 2, 2 );

 console.log( onePlusTwo );

 console.log(twoPlusTwo );