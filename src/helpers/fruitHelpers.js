export function isValidFruit(fruit) {
  const hasAllValidKeys = fruitKeys.every((key) =>
    Object.keys(fruit).includes(key)
  );
  if (fruit.isFruit === false) return false;
  return hasAllValidKeys;
}

export function parseFruits(data, fruitCount, fruitStore) {
  // If we have got all the fruits, return early
  if (fruitStore.length === fruitCount) return;

  // Get all the traversable paths
  const onlyObjectsKeys = Object.keys(data).filter(
    (key) => typeof data[key] === "object"
  );

  // Recurse until no more paths available
  onlyObjectsKeys.forEach((key) => {
    parseFruits(data[key], fruitCount, fruitStore);
  });

  // Check if current path is valid fruit
  if (isValidFruit(data)) {
    // Add only relevant fruit keys
    const onlyFruit = {};
    fruitKeys.forEach((key) => (onlyFruit[key] = data[key]));
    fruitStore.push(onlyFruit);
    return;
  }
}
const fruitKeys = [
  "color",
  "description",
  "expires",
  "id",
  "image",
  "isFruit",
  "name",
  "price",
  "taste",
];
