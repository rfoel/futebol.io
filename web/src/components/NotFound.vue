<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="section column is-three-quarters has-text-centered">
        <h1 class="title">Ooops...</h1>
        <figure class="image is-block">
          <img src="/static/red-card.svg">
        </figure>
        <h2 class="subtitle">
          A página que você tentou acessar parece não existir... Que tal dar uma olhada na tabela
          <router-link :to="{name: 'league', params: {league: league.path}}">{{league.name}}</router-link>?
        </h2>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import leagues from '@/leagues.json'

export default {
  computed: {
    league() {
      return leagues[Math.floor(Math.random() * leagues.length)]
    }
  }
}
</script>

<style lang="scss" scoped>
figure {
  width: 200px;
  margin: 20px auto;
  img {
    width: 100%;
  }
}
</style>
