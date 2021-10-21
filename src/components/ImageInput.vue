<template>
  <div class="image-url-input">
    <div class="image-container">
      <img :src="$attrs.inputConfig.image" alt="Fruit Image" @error="error" />
    </div>
    <Input v-bind="$attrs" />
  </div>
</template>

<script>
import Input from "./Input.vue";
export default {
  name: "ImageInput",
  components: { Input },
  computed: {
    error() {
      return this.$attrs.events.filter((item) => item.type === "error")[0]
        .handler;
    },
  },
};
</script>

<style lang="scss" scoped>
.image-url-input {
  display: flex;
  .image-container {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 9999px;
    overflow: hidden;
    margin-right: 1rem;
    img {
      object-fit: cover;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
