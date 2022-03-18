<template>
  <v-app>
    <v-main>
      <v-container grid-list-lg rounded class="green text-center mt-10">
        <h1>Test Frontend</h1>
      </v-container>
      <v-container class="red lighten-5 mt-1">
        <v-row justify="center">
          <v-col cols="4" sm="4"></v-col>
          <v-col cols="12" sm="8">
            <nav v-bind:class="active" v-on:click.prevent>
              <!-- When a link in the menu is clicked, we call the makeActive method, 
        defined in the JavaScript Vue instance. It will change the value of "active". -->

              <router-link active-class="active" to="/" exact><a class="home" v-on:click="makeActive('home')">Home</a></router-link>
              <router-link active-class="active" to="/pokemon" exact><a class="projects" v-on:click="makeActive('projects')">Pokemon</a></router-link>
              
              <router-link active-class="active" to="/function1" exact><a class="services" v-on:click="makeActive('services')">Function 1</a></router-link>
              <router-link active-class="active" to="/function2" exact><a class="contact" v-on:click="makeActive('contact')">Function 2</a></router-link>
              <router-link active-class="active" to="/function3" exact><a class="contact1" v-on:click="makeActive('contact')">Function 3</a></router-link>
            </nav>
          </v-col>
          <v-col cols="4" sm="4"></v-col>
        </v-row>
      </v-container>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

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

<style scoped>
nav {
  display: inline-block;
  margin: auto;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

nav a {
  display: inline-block;
  padding: 18px 10px;
  color: rgb(0, 0, 0) !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}

nav.home .home,
nav.projects .projects,
nav.services .services,
nav.contact .contact {
  background-color: #e35885;
}

p {
  font-size: 22px;
  font-weight: bold;
  color: #7d9098;
}

p b {
  color: #ffffff;
  display: inline-block;
  padding: 5px 10px;
  background-color: #c4d7e0;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 18px;
}
</style>
