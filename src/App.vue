<template>
  <div id="app">
    <portal-target name="modal-overlay" />
    <router-view />
  </div>
</template>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  cursor: pointer;
  height: fit-content;
  padding: 1rem 2rem;
  align-self: center;
  margin-left: auto;
  border: 1px solid #42b983;
  border-radius: 5px;
  background-color: white;
  font-weight: bold;
  &:hover {
    background-color: #42b983;
    color: white;
  }
  &:active {
    background-color: #168553;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
