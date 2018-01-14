<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{league.name}}
          </h1>
          <h2 class="subtitle">
            {{league.country}}
          </h2>
        </div>
      </div>
    </section>
    <div class="tables">
      <table class="table table-fixed" :class="{'is-scrolled': isScrolled}">
        <thead>
          <tr>
            <th><abbr title="Posição">#</abbr></th>
            <th class="has-text-left">Time</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Posição">#</abbr></th>
            <th class="has-text-left">Time</th>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="(club, index) in data" :key="index">
            <th>{{index+1}}</th>
            <td class="has-text-left">
              {{isScrolled ? club.acronym : club.name}}
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table-scroll" :class="{'is-scrolled': isScrolled}" ref="table" @scroll="scroll">
        <table class="table">
          <thead>
            <tr>
              <th><abbr title="Pontos">P</abbr></th>
              <th><abbr title="Jogos">J</abbr></th>
              <th><abbr title="Vitórias">V</abbr></th>
              <th><abbr title="Empates">E</abbr></th>
              <th><abbr title="Derrotas">D</abbr></th>
              <th><abbr title="Gols pró">GP</abbr></th>
              <th><abbr title="Gols contra">GC</abbr></th>
              <th><abbr title="Saldo de gols">SG</abbr></th>
              <th><abbr title="Aproveitamento">%</abbr></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th><abbr title="Pontos">P</abbr></th>
              <th><abbr title="Jogos">J</abbr></th>
              <th><abbr title="Vitórias">V</abbr></th>
              <th><abbr title="Empates">E</abbr></th>
              <th><abbr title="Derrotas">D</abbr></th>
              <th><abbr title="Gols pró">GP</abbr></th>
              <th><abbr title="Gols contra">GC</abbr></th>
              <th><abbr title="Saldo de gols">SG</abbr></th>
              <th><abbr title="Aproveitamento">%</abbr></th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(club, index) in data" :key="index">
              <td class="is-lighter"><strong>{{club.points}}</strong></td>
              <td>{{club.played}}</td>
              <td class="is-lighter">{{club.won}}</td>
              <td>{{club.drawn}}</td>
              <td class="is-lighter">{{club.lost}}</td>
              <td>{{club.goalsFor}}</td>
              <td class="is-lighter">{{club.goalsAgainst}}</td>
              <td>{{club.goalDifference}}</td>
              <td class="is-lighter">{{club.percentage}}</td>
            </tr>
          </tbody>
        </table>
      </div>    
    </div>  
  </div>
</template>

<script>
import leagues from "@/leagues.json"
import * as scraper from "@/scraper.js"

export default {
	data() {
		return {
			leagues: leagues,
			data: {},
			isScrolled: false
		}
	},
	mounted() {
		this.loadStandings()
	},
	watch: {
		$route(to, from) {
			this.loadStandings()
		}
	},
	computed: {
		league() {
			return leagues.find(league => league.path == this.$route.params.league)
		}
	},
	methods: {
		loadStandings() {
			scraper
				.standings(this.league.url)
				.then(data => {
					this.data = data
				})
				.catch(error => {
					console.error(error)
				})
		},
		scroll() {
			this.isScrolled = this.$refs.table.scrollLeft > 0
		}
	}
}
</script>

<style lang="scss" scoped>
.tables {
	text-align: center;
	position: relative;

	.table {
		margin-bottom: 0;
	}
}
.table-fixed {
	position: absolute;
	top: 0;
	left: 0;
	width: 220px;
	border-right: 1px solid #dbdbdb;

	&.is-scrolled {
		width: 150px;
	}
}
.table-scroll {
	overflow-x: auto;
	padding-left: 220px;

	&.is-scrolled {
		padding-left: 150px;
	}
}
tr {
	height: 50px;
	th,
	td {
		vertical-align: middle;
		line-height: 1;
	}
}
th,
td {
	text-align: center;

	&.is-lighter {
		background: lighten(whitesmoke, 1%);
	}
}
</style>
