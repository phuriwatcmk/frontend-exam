import Vue from "vue";
import Vuex from "vuex";
import { pokemons } from "./pokemon.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    pokemons,
  },
});
