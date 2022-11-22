<template lang="pug">
ui5-shellbar(id="shellbar" primary-title="Grupo MAVI" secondary-title="Muebles America" notifications-count="99+" show-notifications	show-product-switch	show-co-pilot)
  ui5-avatar(slot="profile")
    img(src="../assets/woman_avatar_5.png" height="30" width="30")
  img(slot="logo" height="40" width="60" src="../assets/images/sap-logo-svg.png")
  ui5-button(icon="nav-back" slot="startButton")
  ui5-shellbar-item(id="disc" icon="disconnected" text="Disconnect")
  ui5-shellbar-item(id="call" icon="incoming-call" text="Incoming Calls" count="4")
  ui5-input(slot="searchField")
  ui5-li(slot="menuItems") 
    router-link(to="/") Home
  ui5-li(slot="menuItems" onclick="toAbout") About
    
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
import { RouterLink } from "vue-router";
import router from "@/router/index";

export default defineComponent({
  name: "NavBar1",
  props: {
    msg: String,
  },
  components: {
    RouterLink,
  },
  methods: {
    toAbout: function () {
      router.push("/about");
    },
  },
});
</script>
