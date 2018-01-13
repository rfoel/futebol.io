<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <small>
          <strong>Futebol.io</strong> com
          <div class="footer-heart">
            <figure class="image is-16x16">
              <img src="/static/love.svg">
            </figure>
          </div>
          por <a href="http://rafaelfran.co" target="_blank">Rafael Franco</a>.
        </small>
      </div>
    </div>
  </footer>
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
footer {
	padding: 1.5rem 0;
	.footer-heart {
		display: inline-block;
		figure {
			margin: 0;
		}
	}
}
</style>
