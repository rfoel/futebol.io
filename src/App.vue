<template>
  <div id="app">
    <header>
      <img src="./assets/futebol.io.svg" class="logo">
      <h1>futebol.io</h1>
    </header>
    <div class="error" v-if="error">
      {{error}}
    </div>
    <div v-if="data">
      <h2>{{data["nome-completo"]}}</h2>
      <StandingsTable :data="data" />
    </div>
  </div>
</template>

<script>
  import StandingsTable from "./components/StandingsTable"
  
  export default {
    name: "app",
    components: {
      StandingsTable
    },
    data() {
      return {
        data: null,
        error: null
      }
    },
    created() {
      this.$jsonp(
          "https://jsuol.com.br/c/monaco/utils/gestor/commons.js?file=commons.uol.com.br/sistemas/esporte/modalidades/futebol/campeonatos/dados/2017/30/dados.json"
        )
        .then(json => {
          this.data = json
          console.log(json)
        })
        .catch(error => {
          this.error = error
        })
    }
  }
</script>

<style>
  #app {
    font-family: "Dosis", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  header {}
  
  header h1 {
    display: inline-block;
    padding: 20px;
    line-height: 100px;
  }
  
  .logo {
    display: inline-block;
    width: 50px;
  }
</style>
