<template>
  <v-container>
    <v-subheader>Mini Card</v-subheader>
    <v-row>
      <v-col cols="3" v-for="(item, index) in users" :key="'mini' + index">
        <name-card mini v-bind="item"></name-card>
      </v-col>
    </v-row>
    <v-subheader>Basic Name Card</v-subheader>
    <v-row>
      <v-col cols="3" v-for="(item, index) in users" :key="'basic' + index">
        <name-card v-bind="item"></name-card>
      </v-col>
    </v-row>
    <v-subheader>Basic Name Card with top nav</v-subheader>
    <v-row>
      <v-col
        cols="3"
        v-for="(item, index) in users"
        :key="'basic-top-nav' + index"
      >
        <name-card top-nav v-bind="item"></name-card>
      </v-col>
    </v-row>
    <v-subheader>Bottom Nav Name Card</v-subheader>
    <v-row>
      <v-col
        cols="3"
        sm12
        v-for="(item, index) in users"
        :key="'bottom-nav' + index"
      >
        <name-card bottom-nav v-bind="item"></name-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js" src="./Social.js"></script>
