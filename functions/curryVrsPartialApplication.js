
//Curry

function greet(greeting){
  return function(name){
    return `${greeting} ${name}`
  }
}


// Partial Application
const afternoonGreet = greet('Good Afternoon');
const greetNate = afternoonGreet('Nate')