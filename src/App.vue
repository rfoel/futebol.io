<template>
  <div id="app">
    <img src="./assets/logo.png">
		<div v-for="item of data" :key="item.name">
			{{item.name}}
		</div>
    <router-view/>
  </div>
</template>

<script>
import * as api from "./api.js"

export default {
	name: "app",
	data() {
		return {
			data: {}
		}
	},
	mounted() {
		api
			.standings("/brasileirao-serie-b")
			.then(data => {
				console.log(data)
				this.data = data
			})
			.catch(error => {})
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