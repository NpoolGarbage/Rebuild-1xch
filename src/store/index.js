import { createStore } from "vuex";
import lang from "./modules/lang";
import user from "./modules/user";
import order from "./modules/order";

export default createStore({
  modules: {
    lang,
    user,
    order
  }
})