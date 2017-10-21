<template>
  <div>
    <table>
      <thead>
        <th>#</th>
        <th>Team</th>
        <th>MP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>Pts</th>
      </thead>
      <tbody>
        <tr v-for='(team, index) in data.equipes' :key='index'>
          <td>{{team}}</td>
          <td>Team</td>
          <td>MP</td>
          <td>W</td>
          <td>D</td>
          <td>L</td>
          <td>GF</td>
          <td>GA</td>
          <td>GD</td>
          <td>Pts</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "StandingsTable",
    props: ["data"],
  }
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
    tbody {
      padding: 50px 0;
      td {
        padding: 10px;
      }
    }
  }
</style>
