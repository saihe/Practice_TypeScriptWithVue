<template>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-btn
        fab
        right
        top
        outlined
        absolute
        color="blue"
        class="mt-10 pr-auto"
        @click="close()"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-text class="input">
        <v-menu
          v-model="datePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Picker without buttons"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker v-model="date" @input="datePicker = false" />
        </v-menu>
        <v-select
          v-model="selectedItem"
          label="科目"
          single-line
          return-object
          :items="categoryStore.categories"
        />
        <v-text-field
          type="number"
          v-model="amount"
          label="金額"
          max="10000000"
          min="0"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue" class="white--text" @click="submit()">
          {{ submitTitle }}
        </v-btn>
        <v-btn color="blue" outlined @click="close()">キャンセル</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./BalanceListItemDialog" />

<style lang="scss">
input-filed {
  width: 100px;
}
</style>
