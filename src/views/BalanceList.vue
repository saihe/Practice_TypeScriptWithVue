<template>
  <v-main>
    <v-btn
      class="mt-10"
      fab
      absolute
      right
      top
      color="blue"
      @click.stop="$refs.filter.open()"
    >
      <v-icon class="blue-grey--text text--lighten-5">mdi-filter</v-icon>
    </v-btn>
    <v-btn
      class="mt-10"
      fab
      absolute
      right
      bottom
      color="blue"
      style="top: 100px"
      @click="$refs.dialog.open(add)"
    >
      <v-icon class="blue-grey--text text--lighten-5">mdi-plus</v-icon>
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      :timeout="-1"
      :value="true"
      absolute
      centered
      right
      tile
      color="blue accent-2"
    >
      登録しました。
    </v-snackbar>

    <BalanceListContents ref="content" />
    <BalanceListItemDialog ref="dialog" />
    <BalanceListFilterDialog ref="filter" />
  </v-main>
</template>

<script lang="ts" src="./BalanceList" />
