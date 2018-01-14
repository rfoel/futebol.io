<template>
  <header class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <router-link :to="{name: 'home'}">
          <div class="header-icon">
            <figure class="image is-96x96">
              <img src="/static/logo.svg">
            </figure>
          </div>
          <div class="header-title">
            <h1 class="title">
              futebol.io
            </h1>
            <h2 class="subtitle">
              Sem frescuras. Só tabelas.
            </h2>
          </div>
        </router-link>
      </div>
      <leagues/>
    </div>
  </header>
</template>

<script>
import Leagues from "@/components/Leagues.vue"

export default {
	components: {
		Leagues
	}
}
</script>

<style lang="scss" scoped>
header {
	.header-icon,
	.header-title {
		display: inline-block;
		vertical-align: middle;
	}
	.header-icon {
		margin-right: 25px;
	}
	.header-title {
		text-align: left;
	}
	.subtitle {
		font-size: 1rem;
	}
}
</style>
