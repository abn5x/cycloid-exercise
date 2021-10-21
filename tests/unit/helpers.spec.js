import { parseFruits, isValidFruit } from "../../src/helpers/fruitHelpers";
import fruits from "../data/fruits";

const {
  fetchedObject,
  trueFruit,
  falseFruit,
  trueFruitBadKeys,
  trueFruitLessKeys,
} = fruits;

describe("FruitHelpers – isValidFruit method:", () => {
  it("returns true on isFruit: true, with all valid keys", () => {
    expect(isValidFruit(trueFruit)).toBe(true);
  });
  it("returns false on valid fruit keys but isFruit: false", () => {
    expect(isValidFruit(falseFruit)).toBe(false);
  });
  it("returns false on isFruit: true, but has bad keys", () => {
    expect(isValidFruit(trueFruitBadKeys)).toBe(false);
  });
  it("returns false on true isFruit, but hasn't got enough valid keys", () => {
    expect(isValidFruit(trueFruitLessKeys)).toBe(false);
  });
});

describe("FruitHelpers – parseFruits method:", () => {
  it("adds to specified array the same fruitCount from fetchedObject", () => {
    const fruits = [];
    const { fruitCount } = fetchedObject;
    parseFruits(fetchedObject, fruitCount, fruits);
    expect(fruits.length).toBe(fruitCount);
  });
});
