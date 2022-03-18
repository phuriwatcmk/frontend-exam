// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

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
        accent: colors.indigo.base, // #3F51B5
      },
    },
  },
});
