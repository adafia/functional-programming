// Objects

const meal = {
  id: 1,
  description: 'Breakfast'
}

const updatedMeal = {
  ...meal,
  description: 'Brunch',
  calories: 600,
}

console.log(meal, updatedMeal)
const {description, calories} = updatedMeal;
console.log(description, calories)

const { id, ...mealWithoutId } = updatedMeal
console.log("---------->>><<<---------------")
console.log(mealWithoutId)
