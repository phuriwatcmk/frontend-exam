<template>
  <v-container class="mt-1">
    <v-row justify="center">
      <v-col cols="8" sm="auto">
        <nav v-on:click.prevent class="text-center d-inline-flex">
          <!-- When a link in the menu is clicked, we call the makeActive method, 
        defined in the JavaScript Vue instance. It will change the value of "active". -->

          <router-link active-class="active" to="/" exact>
            <h2 class="ma-5">Home</h2>
          </router-link>
          <router-link active-class="active" to="/pokemon" exact>
            <h2 class="ma-5">Pokemon</h2>
          </router-link>
          <router-link active-class="active" to="/function1" exact>
            <h2 class="ma-5">Function 1</h2>
          </router-link>
          <router-link active-class="active" to="/function2" exact>
            <h2 class="ma-5">Function 2</h2>
          </router-link>
          <router-link active-class="active" to="/function3" exact>
            <h2 class="ma-5">Function 3</h2>
          </router-link>
        </nav>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MenuBar",
};
</script>

<style></style>
