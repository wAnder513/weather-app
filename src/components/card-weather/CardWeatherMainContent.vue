<template>
  <div class="weather-left-corner bg-cyan-800 w-full h-1/2 rounded-t-md rounded-br-3xl">
    <div v-if="hasWeaterCity" class="p-2 text-white">
      <div class="text-sm">Weater Today in</div>
      <h2 class="mb-2 font-bold text-3xl w-max p-1 rounded-md bg-violet-700">
        {{ weater.location.name }}
      </h2>

      <div class="flex justify-between items-center">
        <div>
          <img
            class="w-16 h-16 mb-2 flex-shrink-0"
            :src="
              require(`../../assets/img/${weater.current.weather_descriptions[0].toLowerCase()}.png`)
            "
            alt="weater icon"
          />

          <div class="text-2xl font-bold">
            {{ weater.current.weather_descriptions[0] }}
          </div>
        </div>

        <div class="flex flex-col text-right">
          <div class="text-sm">as of {{ weater.current.observation_time }}</div>
          <div class="text-6xl font-bold">{{ weater.current.temperature }}&deg;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ weater: "getCityWeather" }),
    hasWeaterCity() {
      return this.weater && Object.keys(this.weater).length > 0;
    },
  },
};
</script>

<style></style>
