<template>
  <header class="hero is-light">
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
  </div>
</header>
</template>

<script>
export default {
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
header {
	.header-icon, .header-title {
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
