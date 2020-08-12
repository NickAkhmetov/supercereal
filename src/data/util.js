let caloriesDataGenerator = (calories, fatCalories, carbCalories, proteinCalories) => (d, idx) => {
  calories.push({
    x: idx,
    y: d.calories / d.cups,
    cal: d.calories / d.cups,
    cereal: d,
    label: "Calories per Cup",
  })
  fatCalories.push({
    x: idx,
    y: Math.ceil((9 * d.fat) / d.cups),
    cal: Math.ceil((9 * d.fat) / d.cups),
    cereal: d,
    label: "Calories from Fat per Cup",

  })
  carbCalories.push({
    x: idx,
    y: Math.ceil((4 * (d.carbo + d.sugars + d.fiber)) / d.cups),
    cal: Math.ceil((4 * (d.carbo + d.sugars + d.fiber)) / d.cups),
    cereal: d,
    label: "Calories from Carbohydrates per Cup",
  });
  proteinCalories.push({
    x: idx,
    y: Math.ceil((4 * d.protein) / d.cups),
    cal: Math.ceil((4 * d.protein) / d.cups),
    cereal: d,
    label: "Calories from Protein per Cup",
  });
};

let processData = (data) => {
  let calories = [], fatCalories = [], carbCalories = [], proteinCalories = [];
  let generator = caloriesDataGenerator(calories, fatCalories, carbCalories, proteinCalories);
  data.map(generator);
  return {calories, fatCalories, carbCalories, proteinCalories}
}

export default {processData};