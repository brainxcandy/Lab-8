
var container =  document.createElement('ol')
container.className = 'contentDiv';
var shoppingItems = [
  {
    name: 'Milk',
    price: 4.00
  },
  {
    name: 'Bread',
    price: 2.99
  },
{
  name: 'Tissue',
  price: 6.50
},
  {
  name: 'Strawberries',
  price: 3.79
}
];
//This is the end of the shoppnglist//


//function//

var grandTotal = 0;
var total = 0;
shoppingItems.forEach(function(items){
  console.log('The ' + items.name + ' is '  + items.price.toFixed(2));
  total += items.price;
  grandTotal += items.price + (items.price * 0.06);
  })

console.log('Your total before tax is $' + total.toFixed(2));
console.log('Your grand total after tax is $' + grandTotal.toFixed(2));
