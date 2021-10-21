<template>
  <div class="input-container">
    <label :for="inputConfig.name">{{ inputConfig.label }}</label>
    <textarea
      class="input"
      v-bind="inputConfig"
      v-on="debouncedEvents"
      v-if="inputConfig.type === 'textarea'"
    />
    <input
      :class="`input ${inputConfig.name === 'color' && 'color'}`"
      v-bind="inputConfig"
      v-on="debouncedEvents"
      v-else
    />
    <div
      :class="errorMessages && 'error-message'"
      v-if="errorMessages.length !== 0"
    >
      <ul>
        <li v-for="error in errorMessages" :key="error">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import debounce from "@/helpers/debounce";

export default {
  name: "Input",
  props: {
    inputConfig: {
      type: Object,
      default: () => ({
        type: {
          type: String,
          default: "text",
        },
        label: {
          type: String,
          default: "Label",
        },
        name: {
          type: String,
          default: "name",
        },
      }),
    },
    events: {
      type: Array,
      default: () => [],
    },
    rules: {
      type: Array,
      default: () => [],
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    isRequiredText: {
      type: String,
      default: "",
    },
  },
  data: function() {
    return {
      debouncedEvents: {},
      valueToCheck: null,
      firstTimeMounted: true,
      errorMessages: [],
    };
  },
  methods: {
    validate(value) {
      const brokenRules = [];

      this.handleIsRequired(value, brokenRules);
      this.handleRules(value, brokenRules);

      return brokenRules;
    },
    handleRules(value, brokenRules) {
      if (this.rules.length) {
        this.rules.forEach((rule) => {
          if (rule.callback(value)) {
            brokenRules.push(rule.message);
          }
        });
      }
    },
    handleIsRequired(value, brokenRules) {
      const fieldEmpty = value === "" || value === null || value === undefined;
      const isRequiredAndHasMessage = this.isRequired && this.isRequiredText;

      if (isRequiredAndHasMessage && fieldEmpty) {
        brokenRules.push(this.isRequiredText);
        return;
      }

      if (this.isRequired && fieldEmpty) {
        brokenRules.push("Field is required!");
        return;
      }

      return;
    },

    handleValidate(value) {
      let localValue;
      if (this.firstTimeMounted && !this.valueToCheck) {
        this.firstTimeMounted = false;
        this.valueToCheck = localValue;
      } else {
        this.valueToCheck = localValue;
        this.errorMessages = this.validate(localValue);
      }
    },
  },
  created() {
    this.events.forEach((event) => {
      const vue = this;
      this.debouncedEvents[event.type] = debounce(
        event.handler.bind(vue),
        event.debounce
      );
    });
  },
  mounted() {
    this.$on("validate-input", this.handleValidate);
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  .input {
    border: none;
    background-color: rgb(240, 240, 240);
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
  .color {
    padding: 0;
  }
  label {
    align-self: flex-start;
  }
  .error-message {
    color: white;
    background-color: rgb(255, 59, 34);
    padding: 0.3rem 0.5rem;
    margin-top: 0.5rem;
    border-radius: 5px;
    width: fit-content;
    ul {
      margin: 0;
      padding: 0;
    }
  }
}
</style>
