<template>
  <header class="hero is-success">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <figure class="image is-64x64">
          <img src="static/logo.svg">
        </figure>
        Futebol.io
      </h1>
      <h2 class="subtitle">
        Primary subtitle
      </h2>
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
	.image {
    display: inline-block;
  }
}
</style>
