<template>
  <v-container>
    <v-row>
      <v-col cols="12"><v-subheader>Social</v-subheader></v-col>
      <!-- mini statistic start -->
      <v-col cols="3">
        <mini-statistic
          icon="mdi-facebook"
          title="100+"
          sub-title="Likes"
          color="indigo"
        />
      </v-col>
      <v-col cols="3">
        <mini-statistic
          icon="mdi-google"
          title="150+"
          sub-title="Connections"
          color="red"
        />
      </v-col>
      <v-col cols="3">
        <mini-statistic
          icon="mdi-twitter"
          title="200+"
          sub-title="Followers"
          color="light-blue"
        />
      </v-col>
      <v-col cols="3">
        <mini-statistic
          icon="mdi-instagram"
          title="50+"
          sub-title="Shots"
          color="purple"
        />
      </v-col>
      <!-- linear statistic  end -->
      <v-col cols="12"><v-subheader>Linear Trending</v-subheader></v-col>
      <v-col
        cols="4"
        v-for="(item, index) in trending"
        :key="'trending' + index"
      >
        <linear-statistic
          :title="item.subheading"
          :sub-title="item.caption"
          :icon="item.icon.label"
          :color="item.icon.color"
          :value="item.linear.value"
        />
      </v-col>
      <!-- circle statistic  end -->
      <v-col cols="12"><v-subheader>Circle Trending</v-subheader></v-col>
      <v-col
        cols="4"
        v-for="(item, index) in trending2"
        :key="'c-trending' + index"
      >
        <circle-statistic
          :title="item.subheading"
          :sub-title="item.headline"
          :caption="item.caption"
          :icon="item.icon.label"
          :color="item.linear.color"
          :value="item.linear.value"
        ></circle-statistic>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js" src="./Statistic.js"></script>
<style lang="sass" scoped></style>
