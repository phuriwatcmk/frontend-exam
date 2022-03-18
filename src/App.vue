<template>
  <v-app>
    <v-main>
      <v-row justify="center">
        <v-col cols="11">
          <v-container fluid rounded class="primary text-center mt-10 mx-0">
            <h1>Test Frontend</h1>
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

  methods: {
    makeActive: function (item) {
      // When a model is changed, the view will be automatically updated.
      this.active = item;
    },
  },
};
</script>

<style scoped></style>
