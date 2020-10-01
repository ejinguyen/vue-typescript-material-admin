<template>
  <v-container fluid class="pa-0 mail">
    <v-row no-gutters>
      <v-col lg="2" md="3">
        <v-card flat tile class="mail-menu">
          <v-card-text>
            <v-btn block color="primary" @click="handleCompose">compose</v-btn>
            <mail-menu />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="10" md="9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js" src="./Index.ts"></script>
<style lang="sass" scoped>
.mail
  &-menu
    height: calc(100vh - 112px - 48px)
    overflow: auto
</style>
