import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    searchCityInput: "Tokio",
    searchCityWeather: null,
    hasErrorServer: false
  },
  getters: {
    getCityWeather(state) {
      return state.searchCityWeather 
    }
  },
  mutations: {
    SET_SERVER_ERROR(state) {
      state.hasErrorServer = true
    },
    SET_WEATHER_CITY(state, weather) {
      state.searchCityWeather = weather
    }
  },
  actions: {
    getInfoWeatherCity({commit, state}) {
      axios.get(`http://api.weatherstack.com/current?access_key=8cb36e490be12de8cacfae0307478881&query=${state.searchCityInput}`)
      .catch(() => commit('SET_SERVER_ERROR'))
      .then((res) => {
        commit('SET_WEATHER_CITY', res.data)
      } )
    }
  },
  modules: {
  }
})
