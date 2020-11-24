var restaurantBill = 25.50;

var billTip = ( restaurantBill * 12.5 )/100;

var totalBill = restaurantBill + billTip;

console.log('Your total bill with tip is ' + '£ ' +  totalBill.toFixed(2) );