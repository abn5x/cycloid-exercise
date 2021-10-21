import mutations from "@/store/mutations";
import defaultState from "@/store/state";
import { trueFruit } from "../data/fruits";

describe("Mutations", () => {
  let state;
  beforeEach(() => {
    state = { ...defaultState };
  });
  it("Sets the scrambled data returned from the fruit-api to the state", () => {
    mutations.SET_BAD_DATA(state, trueFruit);
    expect(state.trueFruit).toEqual(trueFruit);
  });
  it("Sets the current fruit state to the payload", () => {
    mutations.SET_CURRENT_FRUIT(state, trueFruit);
    expect(state.currentFruit).toEqual(trueFruit);
  });
});
