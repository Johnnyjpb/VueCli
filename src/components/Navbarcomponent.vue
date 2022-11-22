<template lang="pug">
router-link(to="/about") about
ui5-shellbar(id="shellbar" primary-title="Grupo MAVI" secondary-title="Muebles America" notifications-count="99+" show-notifications	show-product-switch	show-co-pilot)
  ui5-avatar(slot="profile")
    img(src="../assets/woman_avatar_5.png" height="30" width="30")
  img(slot="logo" height="40" width="60" src="../assets/images/sap-logo-svg.png")
  ui5-button(icon="nav-back" slot="startButton")
  ui5-shellbar-item(id="disc" icon="disconnected" text="Disconnect")
  ui5-shellbar-item(id="call" icon="incoming-call" text="Incoming Calls" count="4")
  ui5-input(slot="searchField")
  router-link(to="/" slot="menuItems" style="display: flex !important; padding: 1em !important; color: black !important; text-decoration: none !important; font-family: system-ui !important; font-weight: 400 !important;") Home
  router-link(to="/about" slot="menuItems" style="display: flex !important; padding: 1em !important; color: black !important; text-decoration: none !important; font-family: system-ui !important; font-weight: 400 !important;") About
    
ui5-popover(id="popover" placement-type="Bottom")
  div(class="popover-header")
    ui5-title(style="padding: 0.25rem 1rem 0rem 1rem") An Kimura
  div(class="popover-content")
    ui5-list(separators="None")
      ui5-li(icon="sys-find") App Finder
      ui5-li(icon="settings") Settings
      ui5-li(icon="edit") Edit Home Page
      ui5-li(icon="sys-help") Help
      ui5-li(icon="log") Sign out

</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-fiori/dist/ShellBarItem.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/StandardListItem.js";
import "@ui5/webcomponents/dist/CustomListItem.js";
import "@ui5/webcomponents/dist/GroupHeaderListItem.js";
import { RouterLink } from "vue-router";
import router from "@/router/index";

export default defineComponent({
  name: "NavBar1",
  components: {
    RouterLink,
  },
});
</script>
