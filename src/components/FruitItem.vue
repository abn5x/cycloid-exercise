<template>
  <div class="fruit-item-container">
    <div
      @click="deleteFruit(fruitInformation.id)"
      class="delete-button-container"
    >
      <span class="delete-button">&#10005;</span>
    </div>
    <router-link :to="`/fruit/${fruitInformation.id}`" class="fruit-item">
      <h2>{{ fruitInformation.name }}</h2>
      <div class="fruit-image">
        <img :src="fruitInformation.image" alt="" />
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FruitItem",
  props: {
    fruitInformation: {
      type: Object,
      default: null,
    },
  },
  methods: {
    ...mapActions(["deleteFruit"]),
  },
};
</script>

<style lang="scss" scoped>
.delete-button-container {
  display: none;
  position: absolute;
  top: -10px;
  right: -10px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  width: 30px;
  background-color: rgb(255, 72, 0);
  border-radius: 9999px;
  .delete-button {
    display: inline-block;
    vertical-align: middle;
    color: white;
  }
}
.fruit-item {
  display: flex;
  text-decoration: none;
  color: #2c3e50;
  width: 100%;
  align-items: center;
  .fruit-image {
    border-radius: 9999px;
    overflow: hidden;
    width: 50px;
    height: 50px;
    margin-left: auto;
    img {
      object-fit: cover;
      width: 50px;
      height: 50px;
    }
  }
}
.fruit-item-container {
  display: flex;
  flex-grow: 1;
  flex-basis: 50%;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #42b983;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  color: #2c3e50;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #42b983;
    color: white;
    .delete-button-container {
      display: block;
    }
  }
  &:active {
    background-color: #168553;
  }
}
</style>
