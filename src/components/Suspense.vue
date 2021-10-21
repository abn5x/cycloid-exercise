<template>
  <div>
    <slot name="loadingFallback" v-if="status === 'loading'">
      Loading...
    </slot>
    <slot name="errorFallback" v-else-if="status === 'error'">
      There was an error...
    </slot>
    <slot v-else-if="status === 'loaded'" />
  </div>
</template>

<script>
export default {
  name: "Suspense",
  props: {
    callback: {
      type: Function,
      default: () => new Promise(),
    },
    fallbackTimeout: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      timeoutID: null,
      status: "beforeLoading",
    };
  },
  async beforeMount() {
    await this.fetchData();
  },
  mounted() {
    // Event handler for refetching functionality
    this.$parent.$on("refetch", () => {
      this.status = "beforeLoading";
      this.fetchData();
    });
  },
  methods: {
    async fetchData() {
      // Method for fetching and status handling

      // Don't show the fallback until x timeout
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => {
        this.status = "loading";
      }, this.fallbackTimeout);
      try {
        await this.callback();
        clearTimeout(this.timeoutID);
        this.status = "loaded";
      } catch (error) {
        this.status = "error";
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
