<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-fifth" v-for="league in leagues" :key="league.path">
        <router-link :to="{name: league.path}">
          <figure class="image is-32x32">
            <img :src="'/static/'+league.icon+'.svg'">
          </figure>
          {{league.name}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import leagues from "@/leagues.json"

export default {
	data() {
		return {
			leagues: leagues
		}
	}
}
</script>
<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
.container {
	overflow: hidden;
}
.columns {
	width: 100%;
	height: 100%;
	overflow: auto;
	padding-bottom: 10px;

	a {
		display: block;
		text-align: center;
		font-weight: bold;
		color: $text;
		.image {
			margin: 0 auto;
		}
	}

	&:last-child {
		margin-bottom: -1rem;
	}
}
</style>
