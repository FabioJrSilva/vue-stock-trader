<template>
  <v-toolbar app color="teal lighten-3">
    <v-toolbar-title class="headline text-uppercase ml-5">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Protfólio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar o Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="loadDataLocal">
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center>
        <span class="text-upercase grey--text text--darken-2">Saldo: {{ funds | currency }}</span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      }
    },
    methods: {
      ...mapActions(["randomizeStocks", "loadData"]),
      endDay() {
        this.randomizeStocks();
      },
      saveData() {
        // destructure
        const { funds, stockPortfolio, stocks } = this.$store.getters;
        this.axios.put("data.json", { funds, stockPortfolio, stocks });
      },
      loadDataLocal() {
        this.loadData();
      }
    }
  };
</script>

<style>
</style>
