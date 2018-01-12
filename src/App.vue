<template>
  <div id="app">
    <page-header></page-header>
    <page-content class="flex-grow"></page-content>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/layout/PageHeader.vue"
import PageContent from "@/components/layout/PageContent.vue"
import PageFooter from "@/components/layout/PageFooter.vue"
import * as scraper from "./scraper.js"

export default {
	name: "app",
	components: {
		PageHeader,
		PageContent,
		PageFooter
	},
	data() {
		return {
			data: {}
		}
	},
	mounted() {
		// scraper
		// 	.matches("brasileirao-serie-a")
		// 	.then(data => {
		// 		console.log(data)
		// 	})
		// 	.catch(error => {
		// 		console.error(error)
		// 	})
	}
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
$primary: #00e676;
$text: $dark;
$primary-invert: findColorInvert($primary);
$colors: (
	"white": ($white, $black),
	"black": ($black, $white),
	"light": ($light, $light-invert),
	"dark": ($dark, $dark-invert),
	"primary": ($primary, $primary-invert),
	"info": ($info, $info-invert),
	"success": ($success, $success-invert),
	"warning": ($warning, $warning-invert),
	"danger": ($danger, $danger-invert)
);
$input-shadow: none;
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}
::selection {
	background: $primary;
}
.flex-grow {
	flex-grow: 1;
}
</style>