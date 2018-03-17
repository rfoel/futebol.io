<template>
  <div class="container">
    <div class="columns" v-if="!isLoading">
      <div class="column is-hidden-mobile"></div>
      <div class="column is-block-mobile">
        <div class="hero">
          <div class="hero-body">
            <div class="columns">
              <div class="column has-text-centered-mobile">
                <h1 class="title">
                  {{league.name}}
                </h1>
                <h2 class="subtitle">
                  {{league.country}}
                </h2>
              </div>
              <div class="column has-text-centered-mobile">
                <div class="field is-inline-flex-mobile is-pulled-right-tablet">
                  <b-switch v-model="statistics">
                    Estatísticas
                  </b-switch>
                </div>
              </div>
            </div>
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
              <tr v-for="club in data" :key="club.position">
                <th class="is-narrow has-text-centered">{{club.position}}</th>
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
                <tr v-for="club in data" :key="club.position" :class="{'statistics': statistics}">
                  <td class="is-lighter">
                    <strong>{{club.points}}</strong>
                  </td>
                  <td>{{club.played}}</td>
                  <td class="is-lighter" :class="{'is-best': statistics && club.played > 0 && club.bestW, 'is-worst': statistics && club.played > 0 && club.worstW}">{{club.won}}</td>
                  <td :class="{'is-best': statistics && club.played > 0 && club.bestD, 'is-worst': statistics && club.played > 0 && club.worstD}">{{club.drawn}}</td>
                  <td class="is-lighter" :class="{'is-best': statistics && club.played > 0 && club.bestL, 'is-worst': statistics && club.played > 0 && club.worstL}">{{club.lost}}</td>
                  <td :class="{'is-best': statistics && club.played > 0 && club.bestGF, 'is-worst': statistics && club.played > 0 && club.worstGF}">{{club.goalsFor}}</td>
                  <td class="is-lighter" :class="{'is-best': statistics && club.played > 0 && club.bestGA, 'is-worst': statistics && club.played > 0 && club.worstGA}">{{club.goalsAgainst}}</td>
                  <td :class="{'is-best': statistics && club.played > 0 && club.bestGD, 'is-worst': statistics && club.played > 0 && club.worstGD, 'has-text-success': statistics && club.played > 0 && club.goalDifference > 0, 'has-text-danger': statistics && club.played > 0 && club.goalDifference < 0}">
                    <span v-if="club.goalDifference > 0">+</span>{{club.goalDifference}}
                  </td>
                  <td class="is-lighter" :class="{'is-best': statistics && club.played > 0 && club.bestP, 'is-worst': statistics && club.played > 0 && club.worstP}">{{club.percentage}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <b-table :data="data" :mobile-cards="false" :striped="true" :hoverable="true">
          <template slot-scope="props">
            <b-table-column field="position" label="#" sortable numeric centered class="fixed-column">
              {{ props.row.position }}
            </b-table-column>
            <b-table-column field="name" label="Time" sortable class="fixed-column">
              {{ props.row.name }}
            </b-table-column>
            <b-table-column field="points" label="P" sortable centered>
              <strong>{{ props.row.points }}</strong>
            </b-table-column>
            <b-table-column field="played" label="J" sortable centered>
              {{ props.row.played }}
            </b-table-column>
            <b-table-column field="won" label="V" sortable centered :class="{'is-best has-text-success': statistics && props.row.played > 0 && props.row.bestW, 'is-worst has-text-danger': statistics && props.row.played > 0 && props.row.worstW}">
              {{props.row.won}}
            </b-table-column>
            <b-table-column field="drawn" label="E" sortable centered :class="{'is-best has-text-success': statistics && props.row.played > 0 && props.row.bestD, 'is-worst has-text-danger': statistics && props.row.played > 0 && props.row.worstD}">
              {{ props.row.drawn }}
            </b-table-column>
            <b-table-column field="lost" label="D" sortable centered :class="{'is-best has-text-success': statistics && props.row.played > 0 && props.row.bestL, 'is-worst has-text-danger': statistics && props.row.played > 0 && props.row.worstL}">
              {{ props.row.lost }}
            </b-table-column>
            <b-table-column field="goalsFor" label="GP" sortable centered :class="{'is-best has-text-success': statistics && props.row.played > 0 && props.row.bestGF, 'is-worst has-text-danger': statistics && props.row.played > 0 && props.row.worstGF}">
              {{ props.row.goalsFor }}
            </b-table-column>
            <b-table-column field="goalsAgainst" label="GC" sortable centered :class="{'is-best has-text-success': statistics && props.row.played > 0 && props.row.bestGA, 'is-worst has-text-danger': statistics && props.row.played > 0 && props.row.worstGA}">
              {{ props.row.goalsAgainst }}
            </b-table-column>
            <b-table-column field="goalDifference" label="SG" sortable centered :class="{'is-best': statistics && props.row.played > 0 && props.row.bestGD, 'is-worst': statistics && props.row.played > 0 && props.row.worstGD, 'has-text-success': statistics && props.row.played > 0 && props.row.goalDifference > 0, 'has-text-danger': statistics && props.row.played > 0 && props.row.goalDifference < 0}">
              {{ props.row.goalDifference }}
            </b-table-column>
            <b-table-column field="percentage" label="%" sortable centered>
              {{ props.row.percentage }}
            </b-table-column>
          </template>
        </b-table> -->
      </div>
      <div class="column is-hidden-mobile"></div>
    </div>
    <b-loading :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import leagues from '@/leagues.json'

export default {
  data() {
    return {
      leagues: leagues,
      data: [],
      isScrolled: false,
      statistics: false,
      isLoading: false
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
    ...mapActions(['getStandings']),
    loadStandings() {
      this.isLoading = true
      this.getStandings(this.league.path)
        .then(data => {
          this.data = data.sort((a, b) => (a.position > b.position ? 1 : -1))
          this.isLoading = false
        })
        .catch(error => {
          this.isLoading = false
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
    width: 100px;
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
    padding-left: 100px;
  }

  th,
  td {
    text-align: center !important;
    transition: all 0.1s ease-in-out;
    &.is-lighter {
      background: lighten(whitesmoke, 1%);
    }
  }
}

.is-sortable {
  background: red !important;
}

td {
  word-wrap: none;
  white-space: nowrap;
  &.is-best {
    background: rgba(#00c853, 0.3);
  }
  &.is-lighter.is-best {
    background: darken(rgba(#00c853, 0.3), 5%);
  }
  &.is-worst {
    background: rgba(#ff3860, 0.3);
  }
  &.is-lighter.is-worst {
    background: darken(rgba(#ff3860, 0.3), 5%);
  }
}

.has-text-success {
  color: darken(#00c853, 5%) !important;
}

.has-text-danger {
  color: darken(#ff3860, 5%) !important;
}

tr {
  height: 50px;
  th,
  td {
    vertical-align: middle;
    line-height: 1;
  }
}

@media screen and (min-width: 768px) {
  .is-pulled-right-tablet {
    float: right;
  }
}
</style>
