<template>
  <div id="app">
    <img src="./assets/futebol.io.svg">
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    this.$jsonp(
      "https://jsuol.com.br/c/monaco/utils/gestor/commons.js?callback=simulador_dados_jsonp&file=commons.uol.com.br%2Fsistemas%2Fesporte%2Fmodalidades%2Ffutebol%2Fcampeonatos%2Fdados%2F2017%2F30%2Fdados.json"
    )
      .then(json => {
        console.log(json)
      })
      .catch(err => {
        console.log(err)
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
