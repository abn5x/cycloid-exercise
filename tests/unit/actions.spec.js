import actions from "@/store/actions";
import defaultState from "@/store/state";
import { trueFruit } from "../data/fruits";

jest.mock("axios", () => ({
  get: () => {
    return new Promise((resolve) => {
      resolve({
        data: { data: "data" },
      });
    });
  },
}));

describe("Actions", () => {
  const commit = jest.fn();

  it("Dispatches the 'getFruitDetail' action", async () => {
    const id = 1;

    await actions.getFruitDetail({ commit }, id);

    expect(commit).toHaveBeenCalledWith("SET_CURRENT_FRUIT", {
      data: "data",
    });
  });
});
