<template>
  <div class="h-screen bg-orange-400">
    <div
      class="container fixed justify-center rounded-md bg-white top-48 right-0 left-0 bottom-0 my-0 mx-auto"
    >
      <card-weather-main-content></card-weather-main-content>
      <card-weather-additional-content></card-weather-additional-content>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CardWeatherMainContent from "./CardWeatherMainContent.vue";
import CardWeatherAdditionalContent from "./CardWeatherAdditionalContent.vue";

export default {
  components: { CardWeatherMainContent, CardWeatherAdditionalContent },
  created() {
    this.getInfoWeatherCity();
  },
  methods: {
    ...mapActions(["getInfoWeatherCity"]),
  },
};
</script>

<style scoped>
.container {
  width: 400px;
  height: 400px;
}
</style>