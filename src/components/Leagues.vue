<template>
  <div class="container">
		<!-- <div class="arrows">
			<figure class="image is-32x32">
				<img src="/static/left.svg">
			</figure>
		</div> -->
    <div class="columns is-mobile is-vcentered">
      <div class="column is-one-fifth" v-for="league in leagues" :key="league.path">
        <router-link :to="{name: 'league', params: {league: league.path}}">
          <figure class="image is-32x32">
            <img :src="'/static/'+league.icon+'.svg'">
          </figure>
          {{league.name}}
        </router-link>
      </div>
    </div>
		<!-- <div class="arrows">
			<figure class="image is-32x32">
				<img src="/static/right.svg">
			</figure>
		</div> -->
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
	margin-top: 25px;

}
.arrows {
	position: absolute
}
.columns {
	width: 100%;
	height: 100%;
	overflow: auto;
	padding-bottom: 10px;
	margin: 0;
	.column {
		min-width: 180px;
		background: #fff;
		margin: 0 10px;
	}

	a {
		display: block;
		text-align: center;
		font-weight: bold;
		color: $text;
		white-space: nowrap;
		.image {
			margin: 0 auto;
		}
	}

	&:last-child {
		margin-bottom: -1rem;
	}
}
</style>
