<template>
  <v-card>
    <v-list two-line>
      <v-list-item-group>
        <v-list-item v-for="(balance, index) in balances" :key="index">
          <v-list-item-content class="mt-3 pl-3" width="90%" elevation="24">
            <v-list-item-title v-text="balance.date" />
            <v-list-item-subtitle>
              <v-row>
                <v-spacer class="md-10" />
                <v-col v-text="balance.category" />
                <v-col v-text="balance.amount" />
              </v-row>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts" src="./BalanceListContents" />
