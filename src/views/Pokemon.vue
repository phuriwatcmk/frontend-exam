<template>
  <v-container rounded class="red text-center mt-10">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-container rounded class="primary">
          <h2>Test fecth API</h2>
          <!-- <div class="d-flex justify-center flex-wrap"> -->
          <v-list-item three-line v-if="this.allPokemon.length === 0">
            <v-list-item-content>
              <v-list-item-title class="mt-5 mb-1 text-center">
                ยังข้อมูล Pokemon
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-row justify="center" class="parent mt-10">
            <v-col
              v-for="n in allPokemon"
              :key="n.index"
              cols="12"
              md="auto"
              align="start"
              class=""
            >
              <v-card
                class="mb-5"
                max-width="175"
                max-height="auto"
                elevation="0"
                color="transparent"
              >
                <v-img :src="n.url"></v-img>
              </v-card>
              <v-card
                :elevation="n - 1"
                height="20"
                width="auto"
                class="secondary mb-3 rounded-lg"
              >
                <v-row
                  class="white--text"
                  align="center"
                  justify="center"
                  v-text="n.name"
                ></v-row>
              </v-card>
            </v-col>
          </v-row>
          <!-- <div
              class="green mt-10 mx-10 my-10"
              v-for="pokemon in allPokemon"
              :key="pokemon.name"
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="mt-5 mb-1 text-center">
                    {{ pokemon.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div> -->
          <!-- </div> -->
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Pokemon",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getAllPokemons();
  },
  methods: {
    ...mapActions("pokemons", ["getAllPokemons"]),
  },
  computed: {
    ...mapGetters("pokemons", ["allPokemon"]),
  },
};
</script>

<style scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
  margin-top: -10px;
  margin-left: -10px;
}
.child {
  width: calc(25% - 10px);
  margin-left: 10px;
  margin-top: 10px;
}
</style>
