<template>
  <v-app :dark="true">
    <router-view></router-view>
    <!-- theme setting -->
    <v-btn
      small
      fab
      dark
      fixed
      top="top"
      right="right"
      class="setting-fab"
      color="red"
      @click="openThemeSettings"
    >
      <v-icon>mdi-silverware-variant</v-icon>
    </v-btn>
    <!-- setting drawer -->
    <v-navigation-drawer
      class="setting-drawer"
      temporary
      right
      v-model="rightDrawer"
      hide-overlay
      fixed
    >
      <theme-settings />
    </v-navigation-drawer>
    <!-- global snackbar -->
    <v-snackbar
      :timeout="3000"
      app
      top
      centered
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>
<script lang="js" src="./App.js"></script>

<style lang="sass" scoped>
.setting-fab
  top: 50% !important
  right: 0
  border-radius: 0
</style>
