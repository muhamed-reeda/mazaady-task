import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUser,
  faBell,
  faWallet,
  faEye,
  faShare,
  faHeart,
  faFlag,
  faPaperPlane,
  faLocationDot,
  faEarthAfrica,
  faCubes,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faBell,
  faWallet,
  faEye,
  faShare,
  faHeart,
  faFlag,
  faPaperPlane,
  faLocationDot,
  faEarthAfrica,
  faCubes,
  faMicrophone
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
