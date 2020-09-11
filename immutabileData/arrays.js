// Arrays
const meals = [
  { id: 1, description: 'Breakfast', calories: 420 },
  { id: 2, description: 'Lunch', calories: 520 },
];

const meal = {
  id: 3,
  description: 'Snack',
  calories: 180,
};

const updatedMeals = [...meals, meal];

console.log(meals);
console.log('------------- updatedMeals');
console.log(updatedMeals);


console.log('------------- updatedMealsDescription');
const updatedMealsDescription = updatedMeals.map(updateDescription)

function updateDescription(meal) {
  if(meal.id === 2) {
    return {
      ...meal,
      description: 'Early Lunch',
    }
  }
  return meal;
}

console.log(updatedMealsDescription);

console.log('------------- filteredMeals');

const filteredMeals = updatedMeals.filter(function(meal){
  return meal.id !== 1;
})

console.log(filteredMeals)