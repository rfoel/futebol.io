<template>
  <div class="container">
    <table class="table is-hoverable">
      <thead>
        <tr>
          <th><abbr title="Posição">#</abbr></th>
          <th class="has-text-left">Time</th>
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
          <th><abbr title="Posição">#</abbr></th>
          <th class="has-text-left">Time</th>
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
          <th>{{index+1}}</th>
          <td class="has-text-left">{{club.name}}</td>
          <td><strong>{{club.points}}</strong></td>
          <td>{{club.played}}</td>
          <td>{{club.won}}</td>
          <td>{{club.drawn}}</td>
          <td>{{club.lost}}</td>
          <td>{{club.goalsFor}}</td>
          <td>{{club.goalsAgainst}}</td>
          <td>{{club.goalDifference}}</td>
          <td>{{club.percentage}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import leagues from "@/leagues.json"
import * as scraper from "@/scraper.js"

export default {
	data() {
		return {
			leagues: leagues,
			data: {}
		}
	},
	mounted() {
		scraper
			.standings(this.url)
			.then(data => {
				this.data = data
			})
			.catch(error => {
				console.error(error)
			})
	},
	computed: {
		url() {
			return leagues.find(league => league.path == this.$route.params.league).url
		}
	}
}
</script>

<style scoped>
th, td {
  text-align: center;
}
</style>
