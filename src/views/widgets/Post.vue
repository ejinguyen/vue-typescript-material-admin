<template>
  <div id="social">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6> <message-list></message-list> </v-flex>
        <v-flex lg6> <notification-list></notification-list> </v-flex>
        <v-flex lg6> <plain-table></plain-table> </v-flex>
        <v-flex lg6> <plain-table-order></plain-table-order> </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script lang="js" src="./Post.ts"></script>
