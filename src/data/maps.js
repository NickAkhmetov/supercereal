const manufacturerMap = {
  "A": "American Home Food Products",
  "G": "General Mills",
  "K": "Kelloggs",
  "N": "Nabisco",
  "P": "Post",
  "Q": "Quaker Oats",
  "R": "Ralston Purina"
};

const propertyNameMap = {
  "calories": "Calories per Serving",
  "protein": "Protein",
  "fat": "Fat",
  "sodium": "Sodium",
  "fiber": "Dietary Fiber",
  "carbo": "Complex Carbohydrates",
  "sugars": "Sugar",
  "potass": "Potassium",
  "weight": "Ounces per Serving",
  "cups": "Cups per Serving"
}

const suffixMap = {
  "calories": "",
  "protein": "g",
  "fat": "g",
  "sodium": "mg",
  "fiber": "g",
  "carbo": "g",
  "sugars": "g",
  "potass": "mg",
  "weight": "",
  "cups": ""
}

export default {manufacturerMap, propertyNameMap, suffixMap}
