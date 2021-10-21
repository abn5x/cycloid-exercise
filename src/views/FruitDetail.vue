<template>
  <Suspense :callback="callback" :fallbackTimeout="150">
    <template #loadingFallback>
      <h2>Loading fruit details...</h2>
    </template>
    <template #errorFallback>
      <div>
        <h2>Oops... seems like there was an error.</h2>
        <button @click="retry()">Try again?</button>
      </div>
    </template>
    <template #default>
      <div class="fruit-detail-container col">
        <div class="title row">
          <div class="col equal go-back">
            <h3 @click="$router.back()">Go back</h3>
          </div>
          <div class="col equal">
            <h1>{{ currentFruit.name }}</h1>
          </div>
          <!-- <div class="col equal"></div> -->
        </div>
        <div class="content row">
          <img :src="currentFruit.image" />
          <div class="information col">
            <h2>Information</h2>
            <div class="col">
              <p>{{ currentFruit.description }}</p>
            </div>
            <div class="col info-card">
              <div class="item">
                <h4>Taste</h4>
                <h3>{{ currentFruit.taste }}</h3>
              </div>
              <div>
                <h4>Price</h4>
                <h3>{{ currentFruit.price }}</h3>
              </div>
              <div>
                <h4>Color</h4>
                <h3
                  :style="{
                    backgroundColor: currentFruit.color,
                    color: getContrast(currentFruit.color, '#2c3e50', 'white'),
                    padding: '0.5rem',
                    borderRadius: '5px',
                  }"
                >
                  {{ currentFruit.color }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Suspense>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Suspense from "@/components/Suspense";
import getContrast from "@/helpers/getContrast";

export default {
  name: "FruitDetail",
  components: {
    Suspense,
  },
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapState(["currentFruit"]),
  },
  methods: {
    getContrast,
    async callback() {
      await this.getFruitDetail(this.id);
    },
    retry() {
      this.$emit("refetch");
    },
    ...mapActions(["getFruitDetail"]),
  },
};
</script>

<style lang="scss" scoped>
.col {
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  &.equal {
    height: 100%;
    min-width: max-content;
    max-width: calc(100% / 3);
  }
}
.go-back {
  cursor: pointer;
  width: fit-content;
  color: #42b983;
  transition: all ease-in-out 0.2s;
  &:hover {
    transition: all ease-in-out 0.2s;
    transform: translateX(-5px);
  }
}
.row {
  display: flex;
  flex-direction: row;
}

.fruit-detail-container {
  padding: 1rem;
  img {
    margin: auto;
    object-position: center center;
    object-fit: cover;
    height: 100%;
    width: 100%;
    max-width: 500px;
  }
  .title {
    flex-wrap: wrap;
    align-items: baseline;
    h1 {
      align-self: center;
    }
    h2 {
      align-self: flex-start;
    }
  }
  .content {
    gap: 1rem;
    flex-wrap: wrap;
    align-content: stretch;
    .info-card {
      padding: 1rem;
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid #42b983;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .information {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }
}
</style>
