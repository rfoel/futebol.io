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

export default {
	name: "app",
	components: {
		PageHeader,
		PageContent,
		PageFooter
	}
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
$primary: #00e676;
$primary-invert: findColorInvert($primary);
$link: $primary;
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