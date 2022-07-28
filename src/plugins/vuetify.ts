import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { 0: { locale: "ja" } },
    current: "ja",
  },
});
