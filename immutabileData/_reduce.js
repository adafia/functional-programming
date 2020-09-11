const numbers = [1, 2, 3]

function sum(x, y) {
  return x + y
}

const total = numbers.reduce(sum)
console.log(total)