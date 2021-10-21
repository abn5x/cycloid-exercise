<template>
  <div class="home">
    <Modal
      v-if="showModal"
      @click-outside="hideModal"
      @click-close-button="hideModal"
    >
      <template #title>
        Add a new fruit
      </template>
      <template #content>
        <Form :fields="fields" :formData="formData">
          <template #submitButton="{data: {validateForm}}">
            <button class="button" @click="submitFruit(formData, validateForm)">
              Add Fruit
            </button>
          </template>
        </Form>
      </template>
    </Modal>
    <div class="header">
      <router-link to="/" class="header-logo">
        <h1>Fruit Store</h1>
      </router-link>
      <button @click="openModal">Add fruit</button>
    </div>
    <Suspense :callback="getFruits" :fallbackTimeout="0">
      <template #loadingFallback>
        <div>
          <h2>Loading fruits...</h2>
        </div>
      </template>
      <template #errorFallback>
        <div>
          <h2>Oops... seems like there was an error.</h2>
          <button @click="retry">Try again?</button>
        </div>
      </template>
      <template #default>
        <FruitList />
      </template>
    </Suspense>
  </div>
</template>

<script>
// @ is an alias to /src
import FruitList from "@/components/FruitList.vue";
import Modal from "@/components/Modal.vue";
import Suspense from "@/components/Suspense.vue";
import Form from "@/components/Form.vue";
import createFormItems from "@/helpers/createFormItems";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    FruitList,
    Modal,
    Suspense,
    Form,
  },
  data: function() {
    return {
      formData: {
        image: "",
      },
      showModal: false,
    };
  },
  computed: {
    fields() {
      return createFormItems(this.formData);
    },
  },
  methods: {
    async openModal() {
      this.showModal = true;
    },
    async submitFruit(data, validateForm) {
      await this.postFruit(data);
      this.hideModal();
    },
    hideModal() {
      this.showModal = false;
    },
    retry() {
      this.$emit("refetch");
    },
    ...mapActions(["getFruits", "postFruit"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  .header {
    padding: 0 1rem;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
    border-bottom: 1px solid rgb(223, 223, 223);
    .header-logo {
      text-decoration: none;
      color: #2c3e50;
    }
  }
}
</style>
