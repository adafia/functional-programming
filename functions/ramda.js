const R = require('ramda')


const greet = R.curry((greeting, name) => `${greeting} ${name}`);

console.log('--------------Curry-----------------')
console.log(greet('Good Morning')('James'));

console.log('--------------Non curry-----------------')
console.log(greet('Good Morning', 'James'));

console.log('--------------Partial Application-----------------')
const morningGreeting = greet('Top of the morning to ya')
console.log(morningGreeting('Edem'))

const friends = ['Nate', 'Jim', 'Scott', 'Dean'];

const friendGreetings = friends.map(greet('Good Morning'));

console.log('--------------friendGreetings-----------------')
console.log(friendGreetings)