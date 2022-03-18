import { pokemonService } from "../services/pokemon.service";

const state = {
  pokemons: [],
  test: [],
};

const getters = {
  allPokemon: (state) => state.pokemons,
  alltest: (state) => state.test,
};

const actions = {
  // getAllPokemons({commit}) {
  //     console.log("get all pokemon processing ... 🍌");
  //     pokemonService.getAllPokemon()
  //         .then(
  //             pokemons => {
  //                 console.log("🍥 Pokemon can back to module => ")
  //                 // console.log(pokemons.data.results)
  //                 commit('setPokemons', pokemons.data.results)
  //             }
  //         )
  // },

  getAllPokemons({ commit }) {
    //console.log("get all pokemon processing ... 🍌");
    pokemonService.getAllPokemon().then((pokemons) => {
      // console.log(pokemons)
      const pokemonsByMap = pokemons.map((item) => {
        const container = {};

        container.id = item.id;
        container.name = item.name;
        container.url = item.sprites.front_default;

        return container;
      });

      commit(
        "setPokemons",
        pokemonsByMap.sort((a, b) => a.id - b.id)
      );
    });
  },
};

const mutations = {
  setPokemons(state, pokemons) {
    state.pokemons = pokemons;
  },
};

export const pokemons = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
