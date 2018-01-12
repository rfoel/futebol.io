<template>
  <div class="container">
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Goals for">GF</abbr></th>
          <th><abbr title="Goals against">GA</abbr></th>
          <th><abbr title="Goal difference">GD</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Goals for">GF</abbr></th>
          <th><abbr title="Goals against">GA</abbr></th>
          <th><abbr title="Goal difference">GD</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
        </tr>
      </tfoot>
      <tbody>
        <tr v-for="(club, index) in data" :key="index">
          <th>{{index+1}}</th>
          <td>{{club.name}}</td>
          <td>{{club.played}}</td>
          <td>{{club.won}}</td>
          <td>{{club.drawn}}</td>
          <td>{{club.lost}}</td>
          <td>{{club.goalsFor}}</td>
          <td>{{club.goalsAgainst}}</td>
          <td>{{club.goalDifference}}</td>
          <td>{{club.points}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as scraper from "@/scraper.js"

export default {
	data() {
		return {
			data: {}
		}
	},
	mounted() {
		scraper
			.standings("brasileirao-serie-a")
			.then(data => {
        console.log(data)
        this.data = data
			})
			.catch(error => {
				console.error(error)
			})
	}
}
</script>

<style scoped>

</style>
