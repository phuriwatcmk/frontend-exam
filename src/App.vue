<template>
  <v-app>
    <v-main>
      <v-row justify="center">
        <v-col cols="11">
          <v-container fluid rounded class="topbar text-center mt-10 mx-0">
            <h1 class="white--text ma-4">Test Frontend</h1>
          </v-container>
        </v-col>
      </v-row>
      <menu-bar></menu-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
export default {
  name: "App",
  components: {
    MenuBar,
  },

  data: () => ({
    active: "home",
  }),

  methods: {},
};
</script>

<style>
.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  border: 2px solid rgb(237, 242, 247);
}
</style>
