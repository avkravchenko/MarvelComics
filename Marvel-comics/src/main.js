import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomePaginate from "vue-awesome-paginate";

const app = createApp(App);

app.use(VueAwesomePaginate);
app.use(store);
app.use(router);

app.mount("#app");
