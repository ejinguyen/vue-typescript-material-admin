<template>
  <v-container>
    <v-row>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.column.title.text }}</v-toolbar-title>
            <v-spacer />
            <v-menu>
              <template v-slot:activator="{ on: menu }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                    <v-btn icon v-on="{ ...tooltip, ...menu }">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <span>Action</span>
                </v-tooltip>
              </template>
              <v-list class="pa-0" dense>
                <v-list-item
                  v-for="action in chart.column.actions"
                  :key="action.text"
                  @click="action.click()"
                >
                  <v-list-item-icon class="mr-2">
                    <v-icon small>{{ action.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ action.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-g2-column
            :data="chart.column.data"
            :x-field="chart.column.xField"
            :y-field="chart.column.yField"
            :color-field="chart.column.colorField"
          />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.line.title.text }}</v-toolbar-title>
            <v-spacer />
            <v-menu>
              <template v-slot:activator="{ on: menu }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on: tooltip }">
                    <v-btn icon v-on="{ ...tooltip, ...menu }">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <span>Action</span>
                </v-tooltip>
              </template>
              <v-list class="pa-0" dense>
                <v-list-item
                  v-for="action in chart.line.actions"
                  :key="action.text"
                  @click="action.click()"
                >
                  <v-list-item-icon class="mr-2">
                    <v-icon small>{{ action.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ action.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
          <v-g2-line
            :data="chart.line.data"
            :x-field="chart.line.xField"
            :y-field="chart.line.yField"
            :color-field="chart.line.colorField"
          />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.gauge.title.text }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-g2-gauge />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.donut.title.text }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-g2-donut :data="chart.donut.data" />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.cloud.title.text }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-g2-cloud :data="chart.cloud.data" />
        </v-card>
      </v-col>
      <v-col lg="6">
        <v-card tile>
          <v-toolbar flat>
            <v-toolbar-title>{{ chart.bullet.title.text }}</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-g2-bullet :data="chart.bullet.data" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./G2.ts"></script>
