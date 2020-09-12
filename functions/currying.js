function greet(greeting) {
  return function(name) {
    return `${greeting} ${name}`
  }
}

console.log(greet('Good Morning')('James'))

const friends = ['Nate', 'Jim', 'Scott', 'Dean']

const friendGreetings = friends.map(greet('Good Morning'))

console.log(friendGreetings)