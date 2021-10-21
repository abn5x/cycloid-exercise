<template>
  <portal to="modal-overlay">
    <div class="overlay" @click.self="$emit('click-outside')">
      <div class="modal">
        <div class="title-bar">
          <slot name="title">
            Modal Title
          </slot>
          <div class="close-button" @click="$emit('click-close-button')">
            &#10005;
          </div>
        </div>
        <div class="content">
          <slot name="content" />
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    emitClickOutside() {},
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.199);
  z-index: 9999;
  .modal {
    background-color: white;
    width: 100%;
    max-width: 650px;
    margin: 1rem;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .title-bar {
      font-weight: bold;
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 1rem;
      background-color: #42b983;

      .close-button {
        cursor: pointer;
      }
    }
    .content {
      background-color: white;
      padding: 0.5rem 1rem;
    }
  }
}
</style>
