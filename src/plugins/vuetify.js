// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify/lib";

// import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      options: {
        customProperties: true,
      },
      light: {
        primary: "#cbd5e0", //
        secondary: "#000000", //
        skelton: "#b1bccc", //
        skelton1: "#d1dae4",
        menucolor: "#2c3e50",
        topbar: "#718096",
      },
    },
  },
});
