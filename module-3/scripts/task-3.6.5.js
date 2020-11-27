let div = document.querySelector('div');

let input = document.querySelector('input');

let button = document.querySelector('button');

    button.addEventListener('click', function(event) {

        event.preventDefault();

        DataView.textContent = 'Hello' + input.value;

        


        console.log( input.value );
    });