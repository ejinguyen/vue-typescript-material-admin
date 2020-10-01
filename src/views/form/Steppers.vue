<template>
  <div class="page-steppers">
    <v-container>
      <v-row>
        <v-col :cols="12">
          <v-card tile>
            <v-card-title>
              Book A Room
            </v-card-title>
            <v-card-text class="pa-0">
              <v-stepper ref="stepper" class="rounded-0" v-model="step">
                <v-stepper-header class="elevation-1">
                  <template v-for="item in steps">
                    <v-stepper-step
                      :step="item.step"
                      :complete="item.complete"
                      color="success"
                      :key="'book' + item.step"
                      :rules="item.rules"
                      >{{ item.text }}
                    </v-stepper-step>
                    <v-divider :key="'d_book' + item.step" />
                  </template>
                </v-stepper-header>
                <v-stepper-items>
                  <v-stepper-content :step="1">
                    <form-account ref="formAccount" class="pa-1" />
                  </v-stepper-content>
                  <v-stepper-content :step="2">
                    <form-room ref="formRoom" class="pa-1" />
                  </v-stepper-content>
                  <v-stepper-content :step="3">
                    <v-list two-line>
                      <v-list-item v-for="(item, key) in formValue" :key="key">
                        <v-list-item-content>
                          <v-list-item-title v-text="item.text" />
                          <v-list-item-subtitle v-text="item.value" />
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-card-text>
            <v-card-actions>
              <v-btn v-show="step > 1" @click="handleBack" text>Back</v-btn>
              <v-spacer />
              <v-btn tile color="primary" @click="handleContinue">{{
                step === 3 ? 'confirm' : 'next'
              }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="js" src="./Steppers.js"></script>
