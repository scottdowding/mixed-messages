// Object that contains 3 different parts of the message to be constructed
const message = {
    noun: ['sun', 'rain', 'cloud', 'tree', 'flower'],
    adjectiveOne: ['bright', 'wet', 'grey', 'tall', 'beautiful'],
    adjectiveTwo: ['ugly', 'short', 'hot', 'cold', 'gorgeous']
}

// Declare empty string that will contain mixed message later
let mixedMessage = '';

// declare variables to hold noun, adjectiveOne, and adjectiveTwo
let noun;
let adjectiveOne;
let adjectiveTwo;

// for loop to loop through each property/value pair in message object
for (let key in message) {
    // Get a random index for each array in message object
    const randIndex = Math.floor(Math.random() * message[key].length);
  
    // switch statement to set noun, adjectiveOne, and adjectiveTwo variables
    switch (key) {
        case 'noun':
            noun = message[key][randIndex];
            break;
        case 'adjectiveOne':
            adjectiveOne = message[key][randIndex];
            break;
        case 'adjectiveTwo':
            adjectiveTwo = message[key][randIndex];
            break;
    
    }
}

// Set mixedMessage value
mixedMessage = `The ${noun} is very ${adjectiveOne}, but it is also a little ${adjectiveTwo}.`;

// Print out mixedMessage value
console.log(mixedMessage);