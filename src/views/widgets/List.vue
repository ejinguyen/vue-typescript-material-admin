<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <message-list />
      </v-col>
      <v-col cols="6">
        <notification-list />
      </v-col>
      <v-col cols="12">
        <plain-table />
      </v-col>
      <v-col cols="12">
        <plain-table-order />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./List.ts"></script>
