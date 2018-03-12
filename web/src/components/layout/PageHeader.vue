<template>
  <header class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <router-link :to="{name: 'home'}">
          <div class="header-icon">
            <figure class="image">
              <img src="/static/logo.svg" alt="futebol.io">
            </figure>
          </div>
          <div class="header-title">
            <h1 class="title">
              futebol.io
            </h1>
            <h2 class="subtitle">
              Sem frescura. Só tabelas.
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
  .hero-body {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
	.header-icon,
	.header-title {
    display: inline-block;
    vertical-align: bottom;
	}
	.header-icon {
    margin-right: 25px;
    width: 40px;
	}
	.header-title {
		text-align: left;
	}
	.subtitle {
		font-size: 1rem;
	}
}
</style>
