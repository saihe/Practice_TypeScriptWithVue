<template>
  <v-dialog v-model="dialog">
    <v-card>
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
      <v-row>
        <v-col cols="4" offset="2">
          <v-select
            v-model="selectedItem"
            label="科目"
            single-line
            return-object
            :items="categoryStore.categories"
          />
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./BalanceListFilterDialog" />
