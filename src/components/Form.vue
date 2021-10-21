<template>
  <form @submit.prevent>
    <component
      v-for="input in inputs"
      :key="input.name"
      :is="input.constructor"
      v-bind="input.props"
    />
    <slot name="submitButton" v-bind:data="{ data, validateForm }"> </slot>
  </form>
</template>

<script>
import Input from "./Input.vue";
import ImageInput from "./ImageInput.vue";
export default {
  name: "Form",
  components: {
    Input,
    ImageInput,
  },
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    formData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      Input,
      ImageInput,
      isValidForm: true,
    };
  },
  computed: {
    inputs() {
      return this.fields.map((field) => {
        let input = { props: {} };
        input.constructor = field.inputConfig.withImage ? ImageInput : Input;
        input.props = field;
        return input;
      });
    },
    data() {
      return this.inputs.map((input) => ({
        [input.props.name]: input.props.value,
      }));
    },
  },
  methods: {
    validateForm() {
      this.isValidForm = true;
      this.$emit("validate-form", this.formData);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.image-url-input {
  display: flex;
  align-items: center;
  .image-container {
    display: flex;
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin-right: 1rem;
    border-radius: 9999px;
    img {
      object-fit: cover;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
