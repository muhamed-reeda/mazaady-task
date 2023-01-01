import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./icons";
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
