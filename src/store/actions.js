import axios from "axios";

export default {
  async getFruits({ commit }) {
    const data = await axios.get("http://localhost:3000/fruit");
    const jsonData = data.data.data;
    commit("SET_BAD_DATA", jsonData);
  },

  async getFruitDetail({ commit }, id) {
    const data = await axios.get(`http://localhost:3000/fruit/${id}`);
    commit("SET_CURRENT_FRUIT", data.data);
  },

  async postFruit({ dispatch }, fruit) {
    await axios.post("http://localhost:3000/fruit", fruit);
    dispatch("getFruits");
  },

  async deleteFruit({ dispatch }, id) {
    await axios.delete(`http://localhost:3000/fruit/${id}`);
    dispatch("getFruits");
  },
};
