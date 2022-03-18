<template>
  <v-container rounded class="text-center mt-5">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-container rounded class="primary">
          <h2 class="menucolor--text">Test fecth API</h2>
          <!-- <div class="d-flex justify-center flex-wrap"> -->
          <!-- <v-list-item three-line v-if="this.allPokemon.length === 0">
            <v-list-item-content>
              <v-list-item-title class="mt-5 mb-1 text-center">
                ยังข้อมูล Pokemon
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item> -->
          <div class="parent">
            <v-row justify="center" class="mt-10">
              <v-col
                v-for="n in allPokemon"
                :key="n.id"
                cols="12"
                md="auto"
                align="center"
                class="child"
              >
                <v-card
                  class="mb-5"
                  max-width="175"
                  max-height="175"
                  elevation="0"
                  color="transparent"
                >
                  <template v-if="firstLoad">
                    <v-skeleton-loader
                      class="skelton1 mb-5"
                      width="175"
                      height="175"
                      elevation="0"
                      type="image"
                    ></v-skeleton-loader>
                  </template>
                  <v-img :src="n.url" v-if="!firstLoad"> </v-img>
                </v-card>
                <template v-if="firstLoad">
                  <v-skeleton-loader
                    class="skelton"
                    height="25"
                    width="175"
                    elevation="0"
                    type="card"
                  ></v-skeleton-loader>
                </template>
                <v-card
                  :elevation="0"
                  height="25"
                  width="200"
                  v-if="!firstLoad"
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
          </div>
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
    return {
      firstLoad: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.firstLoad = false;
    }, 2000);
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
  width: calc(15% - 10px);
  margin-left: 10px;
  margin-top: 10px;
}
</style>
