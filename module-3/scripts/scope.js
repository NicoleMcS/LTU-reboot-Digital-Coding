// global scope

// local scope

var globalScope = 'GLOBAL SCOPE';

console.log( globalScope );

function scope() {

    var localScope = 'LOCALSCOPE'

    return localScope;

}

var scopeValue = scope();

console.log( scopeValue );

scope();