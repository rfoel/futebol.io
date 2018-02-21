<template>
  <div class="container">
    <div class="columns">
      <div class="column is-hidden-mobile"></div>
      <div class="column">
        <div class="hero">
          <div class="hero-body">
            <h1 class="title">
              {{league.name}}
            </h1>
            <h2 class="subtitle">
              {{league.country}}
            </h2>
          </div>
        </div>
        <div class="tables">
          <table class="table table-fixed" :class="{'is-scrolled': isScrolled}">
            <thead>
              <tr>
                <th class="is-narrow has-text-centered">
                  <b-tooltip label="Posição" position="is-right" animated>
                    #
                  </b-tooltip>
                </th>
                <th class="has-text-left">Time</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th class="is-narrow has-text-centered">
                  <b-tooltip label="Posição" position="is-right" animated>
                    #
                  </b-tooltip>
                </th>
                <th class="has-text-left">Time</th>
              </tr>
            </tfoot>
            <tbody>
              <tr v-for="(club, index) in data" :key="index">
                <th class="is-narrow has-text-centered">{{index+1}}</th>
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
                  <th>
                    <b-tooltip label="Pontos" position="is-top" animated>
                      P
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Jogos" position="is-top" animated>
                      J
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Vitórias" position="is-top" animated>
                      V
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Empates" position="is-top" animated>
                      E
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Derrotas" position="is-top" animated>
                      D
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Gols pró" position="is-top" animated>
                      GP
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Gols contra" position="is-top" animated>
                      GC
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Saldo de gols" position="is-top" animated>
                      SG
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Aproveitamento" position="is-left" animated>
                      %
                    </b-tooltip>
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>
                    <b-tooltip label="Pontos" position="is-top" animated>
                      P
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Jogos" position="is-top" animated>
                      J
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Vitórias" position="is-top" animated>
                      V
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Empates" position="is-top" animated>
                      E
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Derrotas" position="is-top" animated>
                      D
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Gols pró" position="is-top" animated>
                      GP
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Gols contra" position="is-top" animated>
                      GC
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Saldo de gols" position="is-top" animated>
                      SG
                    </b-tooltip>
                  </th>
                  <th>
                    <b-tooltip label="Aproveitamento" position="is-left" animated>
                      %
                    </b-tooltip>
                  </th>
                </tr>
              </tfoot>
              <tbody>
                <tr v-for="(club, index) in data" :key="index">
                  <td class="is-lighter">
                    <strong>{{club.points}}</strong>
                  </td>
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
      <div class="column is-hidden-mobile"></div>
    </div>
  </div>
</template>

<script>
import leagues from '@/leagues.json'
import * as scraper from '@/scraper.js'

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
      const loading = this.$loading.open()
      scraper
        .standings(this.league.url)
        .then(data => {
          this.data = data
          loading.close()
        })
        .catch(error => {
          loading.close()
        })
    },
    scroll() {
      this.isScrolled = this.$refs.table.scrollLeft > 0
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-body {
  padding: 3rem 0.5rem 0;
}

.tables {
  text-align: center;
  position: relative;
  .table {
    margin-bottom: 0;
  }
}

.table-fixed {
  position: absolute;
  top: 20px;
  width: 250px;
  border-right: 1px solid #dbdbdb;
  transition: all 0.1s ease-out;
  z-index: 99;
  &.is-scrolled {
    width: 150px;
  }
  th,
  td {
    &.is-narrow {
      padding: 0 5px;
    }
  }
}

.table-scroll {
  overflow-x: auto;
  padding-top: 20px;
  padding-left: 250px;

  &.is-scrolled {
    padding-left: 150px;
  }

  th,
  td {
    text-align: center !important;

    &.is-lighter {
      background: lighten(whitesmoke, 1%);
    }
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
</style>
