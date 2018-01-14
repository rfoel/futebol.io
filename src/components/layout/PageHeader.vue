<template>
  <header class="hero is-light">
    <div class="hero-body">
      <div class="container has-text-centered">
        <router-link :to="{name: 'home'}">
          <div class="header-icon">
            <figure class="image is-56x56">
              <img src="/static/logo.svg">
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
		vertical-align: top;
	}
	.header-icon {
		margin-right: 25px;
    .is-56x56 {
      width: 56px;
      height: 56px;
    }
	}
	.header-title {
		text-align: left;
	}
	.subtitle {
		font-size: 1rem;
	}
}
</style>
