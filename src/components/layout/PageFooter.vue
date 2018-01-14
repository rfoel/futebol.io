<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <div class="share">
          <div class="fb-share-button" data-href="http://futebol.io" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ffutebol.io%2F&amp;src=sdkpreparse">Compartilhar</a></div>
          <a href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-size="large" data-text="⚽️" data-url="http://futebol.io/" data-via="rfoel" data-related="rfoel" data-hashtags="SemFrescuraSoTabelas" data-dnt="true" data-show-count="false">Tweet</a>
        </div>
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
footer {
	padding: 1.5rem 0;
	.share {
    padding-bottom: 1rem;
		.fb-share-button {
			vertical-align: top;
		}
	}
	.footer-heart {
		display: inline-block;
		figure {
			margin: 0;
		}
	}
}
</style>
