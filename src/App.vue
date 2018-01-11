<template>
  <div id="app">
 		<div v-for="item of data" :key="item.name">
			{{item.name}}
		</div>
    <router-view/>
  </div>
</template>

<script>
import * as scraper from "./scraper.js"

export default {
	name: "app",
	data() {
		return {
			data: {}
		}
	},
	mounted() {
		scraper
			.matches("futebol-internacional/futebol-ingles")
			.then(data => {
				console.log(data)
			})
			.catch(error => {
				console.error(error)
			})		
	}
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>