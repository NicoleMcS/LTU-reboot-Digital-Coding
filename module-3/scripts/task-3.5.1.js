let shoppingCart = [
    {​​​​
    name:"loaf of bread",
    type:"food",
    quantity:1,
    price:.85
    }​​​​,
    {​​​​
    name:"multipack beans",
    type:"food",
    quantity:1,
    price:1
    }​​​​,
    {​​​​
    name:"mushrooms",
    type:"food",
    quantity:10,
    price:.1
    }​​​​,
    {​​​​
    name:"can of beer",
    type:"alcohol",
    quantity:4,
    price:1.1
    }​​​​,
    {​​​​
    name:"prosecco",
    type:"alcohol",
    quantity:1,
    price:8.99
    }​​​​,
    {​​​​
    name:"steak",
    type:"food",
    quantity:2,
    price:3.99
    }​​​​,
    {​​​​
    name:"blue cheese",
    type:"food",
    quantity:1,
    price:2.99
    }​​​​,
    {​​​​
    name:"candles",
    type:"home",
    quantity:3,
    price:1.99
    }​​​​,
    {​​​​
    name:"cheesecake",
    type:"food",
    quantity:1,
    price:4.99
    }​​​​,
    {​​​​
    name:"onions",
    type:"food",
    quantity:3,
    price:.4
    }​​​​];

    function shoppingCartTotalPrice( arr ) { //1. Create a function that takes 1 parameter ( The Array )

        let totalPrice = 0; // 2. Create a variable inside the function called totalPrice

        // 3. loop through each item of the array and adding the value of the item to the total price

        for ( let index = 0; index <arr.length, index++ ) {

            totalPrice = totalPrice + ( arr[index].price * arr[index].qantity )

            //totalPrice = 0 + ( 0.85 * 1 )

        }

        // 4. Return the totalprice variable
        
        return totalPrice.toFixed(2); 

    }

    let message = 'The cost of all your items comes to: £';

    console.log( message + shoppingCartTotalPrice ( shoppingCart ) );