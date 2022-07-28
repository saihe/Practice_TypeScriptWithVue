<template>
  <v-app>
    <v-main>
      <v-toolbar
        class="blue-grey--text text--lighten-5"
        color="blue"
        height="50"
      >
        <v-toolbar-title v-text="'お小遣い帳'" />
      </v-toolbar>
      <v-snackbar v-model="snackbar" />
      <BalanceList />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import BalanceList from "./views/BalanceList.vue";
import snackbarStore from "./store/module/snackber";
export default {
  name: "App",

  components: {
    BalanceList,
  },

  data: () => ({
    snackbar: snackbarStore.state,
  }),
};
</script>
