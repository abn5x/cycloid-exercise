import { parseFruits } from "@/helpers/fruitHelpers";

export default {
  parsedFruits(state) {
    const { badData } = state;
    const fruits = [];

    // get the fruits
    parseFruits(badData, badData.fruitCount, fruits);

    // order them, so that no shifting occurs when fetching again
    fruits.sort((a, b) => a.id - b.id);

    return fruits;
  },
};
