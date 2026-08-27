// Concatination and Interpolation
var price = 50;
var itemName = "Cup";

// Concatination
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars";
console.log(messageToPrint);

// Interpolation
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`;
console.log(messageToPrint2);

// Multi-line string using concatination
var multiLineMessage = "Hello User,\n" +
                       "Thank you for purchasing the " + itemName + ".\n" +
                       "The total amount is " + price + " dollars.\n" +
                       "Have a great day!";
console.log(multiLineMessage);

// Multi-line string using interpolation
var multiLineMessage2 = `Hello User,
Thank you for purchasing the ${itemName}.
The total amount is ${price} dollars.
Have a great day!`;
console.log(multiLineMessage2);

// Exercise: Create a message for a user who bought multiple items
var itemCount = 3;
var totalPrice = price * itemCount;
var purchaseMessage = `You have purchased ${itemCount} ${itemName}s for a total of ${totalPrice} dollars.`;
console.log(purchaseMessage);

// End of Concatination and Interpolation lesson