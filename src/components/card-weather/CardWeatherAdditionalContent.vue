<template>
  <div>
    <div v-if="hasWeaterCity" class="additional-params flex p-2">
      <div
        class="flex flex-auto items-center w-1/2 mb-2"
        v-for="item in additionalParamsWeater"
        :key="item.id"
      >
        <img
          class="w-10 h-10 mr-1 flex-shrink-0"
          :src="require(`../../assets/img/${item.img}`)"
          alt="additional weater icon"
        />
        <div>
          <div class="text-2xl font-bold">{{ item.value }}</div>
          <div class="text-neutral-600">{{ item.name.toUpperCase() }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ additionalParams: "getCityWeather" }),
    hasWeaterCity() {
      return (
        this.additionalParams && Object.keys(this.additionalParams).length > 0
      );
    },
    additionalParamsWeater() {
      return [
        {
          id: 0,
          name: "cloudcover",
          img: "cloud.png",
          value: `${this.additionalParams.current.cloudcover}%`,
        },
        {
          id: 1,
          name: "visibility",
          img: "visibility.png",
          value: `${this.additionalParams.current.visibility}%`,
        },
        {
          id: 2,
          name: "uv index",
          img: "uv-index.png",
          value: `${this.additionalParams.current.uv_index}/100`,
        },
        {
          id: 3,
          name: "humidity",
          img: "humidity.png",
          value: `${this.additionalParams.current.humidity}%`,
        },
        {
          id: 4,
          name: "pressure",
          img: "gauge.png",
          value: `${this.additionalParams.current.pressure}%`,
        },
        {
          id: 5,
          name: "wind speed",
          img: "wind.png",
          value: `${this.additionalParams.current.wind_speed} km/h`,
        },
      ];
    },
  },
};
</script>

<style scoped>
.additional-params {
  flex-flow: row wrap;
}
</style>
