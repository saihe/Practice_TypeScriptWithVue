import Vue from "vue";
import Vuex from "vuex";
import { BalanceModule } from "./module/balance";
import { extractVuexModule } from "vuex-class-component";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(BalanceModule),
  },
});
export default store;
