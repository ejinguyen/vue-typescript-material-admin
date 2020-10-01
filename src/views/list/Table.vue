<template>
  <div class="page-table">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-toolbar flat color="white">
              <v-text-field
                text
                solo
                flat
                prepend-icon="mdi-magnify"
                placeholder="Type something"
                v-model="search"
                hide-details
                class="hidden-sm-and-down"
              />
              <v-btn icon>
                <v-icon>mdi-filter</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :items-per-page-options="[
                  10,
                  25,
                  50,
                  { text: 'All', value: -1 }
                ]"
                class="elevation-1"
                item-key="name"
                show-select
                v-model="complex.selected"
              >
                <template v-slot:item.avatar="{ item }">
                  <v-avatar class="ma-3">
                    <img :src="item.avatar" alt="avatar" />
                  </v-avatar>
                </template>
                <template v-slot:item.action="{ item }">
                  <v-menu>
                    <template v-slot:activator="{ on: menu }">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on: tooltip }">
                          <v-btn icon v-on="onTooltip({ ...tooltip, ...menu })">
                            <v-icon>mdi-dots-vertical</v-icon>
                          </v-btn>
                        </template>
                        <span>Action</span>
                      </v-tooltip>
                    </template>
                    <v-list class="pa-0" dense>
                      <v-list-item
                        v-for="action in actions"
                        :key="action.text"
                        @click="action.click(item)"
                      >
                        <v-list-item-icon class="mr-2">
                          <v-icon small>{{ action.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ action.text }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-subheader>Basic Table</v-subheader>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="60vh">
      <v-card>
        <v-toolbar card>Edit User</v-toolbar>
        <v-card-text>
          <form>
            <v-text-field
              v-model="formModel.name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="formModel.email"
              label="E-mail"
              required
            ></v-text-field>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-btn @click="handleSubmit">submit</v-btn>
          </form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./Table.ts"></script>
