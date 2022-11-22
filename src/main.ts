import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import "../node_modules/@ui5/webcomponents/dist/Avatar.js"; // ui5-button
import "../node_modules/@ui5/webcomponents/dist/Button.js"; // ui5-button
import "../node_modules/@ui5/webcomponents/dist/Input.js"; // ui5-input
import "../node_modules/@ui5/webcomponents/dist/Link.js";
import "../node_modules/@ui5/webcomponents/dist/List.js"; // ui5-list
import "../node_modules/@ui5/webcomponents/dist/StandardListItem.js"; //(for ui5-li)
import "../node_modules/@ui5/webcomponents/dist/CustomListItem.js"; //(for ui5-li-custom)
import "../node_modules/@ui5/webcomponents/dist/StandardListItem.js"; // ui5-li
import "../node_modules/@ui5/webcomponents-base/dist/features/F6Navigation.js";

createApp(App).use(store).use(router).mount("#app");

App.config.isCustomElement = (tag: any) => tag.startsWith("ui5-");
