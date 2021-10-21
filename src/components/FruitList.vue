<template>
  <div class="fruit-items-container">
    <FruitItem
      v-for="fruit in parsedFruits"
      :fruitInformation="fruit"
      :key="fruit.id"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FruitItem from "./FruitItem.vue";

export default {
  name: "FruitList",
  components: {
    FruitItem,
  },
  computed: {
    ...mapGetters(["parsedFruits"]),
  },
};
</script>

<style lang="scss" scoped>
.fruit-items-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
