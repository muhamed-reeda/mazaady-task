import Vue from "vue";
import Vuex from "vuex";
import listsModule from "./lists/lists";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lists: listsModule,
  },
});
