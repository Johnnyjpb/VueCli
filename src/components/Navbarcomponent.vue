<template lang="pug">
ui5-shellbar#shellbar(primary-title="Grupo MAVI" secondary-title="Muebles America" notifications-count="99+" show-notifications	show-product-switch	show-co-pilot)
  ui5-avatar(slot="profile")
    img(src="../assets/woman_avatar_5.png" height="30" width="30")
  img(slot="logo" height="40" width="60" src="../assets/images/sap-logo-svg.png")
  ui5-button(icon="nav-back" slot="startButton")
  ui5-shellbar-item(id="disc" icon="disconnected" text="Disconnect")
  ui5-shellbar-item(id="call" icon="incoming-call" text="Incoming Calls" count="4")
  ui5-input(slot="searchField")
  ui5-li#Home(slot="menuItems") Home
  ui5-li#About(slot="menuItems") About
    
ui5-popover#popover( placement-type="Bottom")
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
import router from "@/router/index";

export default defineComponent({
  name: "NavBar1",
  mounted: function () {
    const shellbar = document.getElementById("shellbar");
    const popover = document.getElementById("popover");

    shellbar?.addEventListener("profile-click", function (event) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      popover?.showAt(event.detail.targetRef);
    });
    shellbar?.addEventListener("menu-item-click", function (event) {
      // @ts-expect-error @typescript-eslint/ban-ts-comment - It exists but the compiler doesn't recognize it
      switch (event.detail.item.id) {
        case "Home":
          router.push("/");
          break;
        case "About":
          router.push("/about");
          break;
      }
    });
  },
});
</script>
