<template>
  <v-container class="my-5">
    <v-row justify="center">
      <v-col cols="8" sm="auto">
        <nav
          v-bind:class="active"
          v-on:click.prevent
          class="text-center hidden-sm-and-down"
        >
          <ul class="d-flex">
            <li>
              <router-link to="/" class="text-decoration-none">
                <a class="home ma-5" v-on:click="makeActive('home')">Home</a>
              </router-link>
            </li>
            <li>
              <router-link to="/pokemon" class="text-decoration-none">
                <a class="pokemon ma-5" v-on:click="makeActive('pokemon')">
                  Pokemon
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/function1" class="text-decoration-none">
                <a class="func1 ma-5" v-on:click="makeActive('func1')">
                  Function 1
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/function2" class="text-decoration-none">
                <a class="func2 ma-5" v-on:click="makeActive('func2')">
                  Function 2
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/function3" class="text-decoration-none">
                <a class="func3 ma-5" v-on:click="makeActive('func3')">
                  Function 3
                </a>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- if mobile -->
        <nav
          v-bind:class="active"
          v-on:click.prevent
          class="text-center hidden-md-and-up"
        >
          <ul class="d-block">
            <li>
              <router-link to="/" class="text-decoration-none">
                <a class="home ma-5" v-on:click="makeActive('home')">Home</a>
              </router-link>
            </li>
            <li>
              <router-link to="/pokemon" class="text-decoration-none">
                <a class="pokemon ma-5" v-on:click="makeActive('pokemon')">
                  Pokemon
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/function1" class="text-decoration-none">
                <a class="func1 ma-5" v-on:click="makeActive('func1')">
                  Function 1
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/function2" class="text-decoration-none">
                <a class="func2 ma-5" v-on:click="makeActive('func2')">
                  Function 2
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/function3" class="text-decoration-none">
                <a class="func3 ma-5" v-on:click="makeActive('func3')">
                  Function 3
                </a>
              </router-link>
            </li>
          </ul>
          <!-- <router-link active-class="active" to="/pokemon" exact>
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
          </router-link> -->
        </nav>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MenuBar",
  data() {
    return {
      active: "home",
    };
  },
  methods: {
    makeActive(item) {
      this.active = item;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
nav ul li a {
  font-size: 1.5rem;
  font-weight: 500;
  color: #2c3e50;
  letter-spacing: 1px;
}
nav ul li a:hover {
  color: #42b983;
  box-shadow: 5px 10px 30px rgba(64, 198, 196, 0.03);
  transition: all ease 0.9s;
}
nav.home .home,
nav.pokemon .pokemon,
nav.func1 .func1,
nav.func2 .func2,
nav.func3 .func3 {
  color: #42b983;
}
</style>
