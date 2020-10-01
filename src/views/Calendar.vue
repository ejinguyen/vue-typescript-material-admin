<template>
  <v-container>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat class="grey lighten-4">
            <v-btn outlined class="mr-4" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small @click="prev">
              <v-icon small>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn fab text small @click="next">
              <v-icon small>mdi-chevron-right</v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="type"
              tile
              color="deep-purple accent-3"
              group
            >
              <v-btn value="day">
                Day
              </v-btn>

              <v-btn value="week">
                Week
              </v-btn>

              <v-btn value="month">
                Month
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="getEvents"
            :event-color="getEventColor"
            :type="type"
            @click:event="handleEditEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @click:day="handleDayClick"
            @click:time="handleTimeClick"
            @click:interval="handleIntervalClick"
            @change="updateRange"
          />
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
    <v-dialog v-model="showEventDialog" width="500">
      <event-form
        :event="selectedEvent"
        ref="form"
        @close="handleCloseDialog"
        @saved="showEventDialog = false"
      />
    </v-dialog>
  </v-container>
</template>

<script lang="js" src="./Calendar.js"></script>
