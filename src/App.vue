<template>
  <div id="app">
    <img src="./assets/futebol.io.svg">
  <div class="error" v-if="error">
    {{error}}
  </div>
  <div v-if="data">
  <h1>{{data["nome-completo"]}}</h1>
  </div>
  </div>
</template>

<script>
export default {
  name: "app",
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
      })
      .catch(error => {
        this.error = error
      })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
