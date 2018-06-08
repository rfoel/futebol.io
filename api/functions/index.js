const functions = require('firebase-functions')
const express = require('express')
const request = require('request')
const cheerio = require('cheerio')
const cors = require('cors')
const leagues = require('./leagues')

const app = express()
const port = 4000

app.use(cors())

app.listen(port, () => {
  console.log(`API listening on port ${port} in ${app.settings.env} mode`)
  console.log(`http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send({ message: 'Server running gracefully 🦄', timestamp: Date.now() })
})

app.get('/leagues/:league', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  const league = leagues.find(each => each.path === req.params.league)
  const url = `https://globoesporte.globo.com/futebol/${league.url}`
  request(url, (error, response, html) => {
    if (!error) {
      const $ = cheerio.load(html)
      const standings = []
      $('.tabela-times tbody tr').each((index, item) => {
        const club = {}
        club.name = $(item)
          .find('.tabela-times-time-nome')
          .text()
        club.acronym = $(item)
          .find('.tabela-times-time-sigla')
          .text()
        standings.push(club)
      })
      $('.tabela-pontos tbody tr').each((index, item) => {
        standings[index].points = parseInt(
          $(item)
            .find('.tabela-pontos-ponto')
            .text()
        )
        standings[index].played = parseInt(
          $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .text()
        )
        standings[index].won = parseInt(
          $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .text()
        )
        standings[index].drawn = parseInt(
          $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .text()
        )
        standings[index].lost = parseInt(
          $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .text()
        )
        standings[index].goalsFor = parseInt(
          $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
        )
        standings[index].goalsAgainst = parseInt(
          $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
        )
        standings[index].goalDifference = parseInt(
          $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
        )
        standings[index].percentage = parseFloat(
          $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
        )
      })
      res.send(statistics(standings))
    } else {
      res.send({ message: "Couldn't fetch the data.", timestamp: Date.now() })
    }
  })
})

const statistics = standings => {
  // set position
  standings.map((team, index) => (team.position = index + 1))
  // best won
  standings.filter(team => team.won === Math.max(...standings.map(i => i.won))).map(team => (team.bestW = true))
  // worst won
  standings.filter(team => team.won === Math.min(...standings.map(i => i.won))).map(team => (team.worstW = true))
  // best drawn
  standings.filter(team => team.drawn === Math.min(...standings.map(i => i.drawn))).map(team => (team.bestD = true))
  // worst drawn
  standings.filter(team => team.drawn === Math.max(...standings.map(i => i.drawn))).map(team => (team.worstD = true))
  // best lost
  standings.filter(team => team.lost === Math.min(...standings.map(i => i.lost))).map(team => (team.bestL = true))
  // worst lost
  standings.filter(team => team.lost === Math.max(...standings.map(i => i.lost))).map(team => (team.worstL = true))
  // best goals for
  standings
    .filter(team => team.goalsFor === Math.max(...standings.map(i => i.goalsFor)))
    .map(team => (team.bestGF = true))
  // worst goals for
  standings
    .filter(team => team.goalsFor === Math.min(...standings.map(i => i.goalsFor)))
    .map(team => (team.worstGF = true))
  // best goals against
  standings
    .filter(team => team.goalsAgainst === Math.min(...standings.map(i => i.goalsAgainst)))
    .map(team => (team.bestGA = true))
  // worst goals against
  standings
    .filter(team => team.goalsAgainst === Math.max(...standings.map(i => i.goalsAgainst)))
    .map(team => (team.worstGA = true))
  // best goal difference
  standings
    .filter(team => team.goalDifference === Math.max(...standings.map(i => i.goalDifference)))
    .map(team => (team.bestGD = true))
  // worst goal difference
  standings
    .filter(team => team.goalDifference === Math.min(...standings.map(i => i.goalDifference)))
    .map(team => (team.worstGD = true))
  // best percentage
  standings
    .filter(team => team.percentage === Math.max(...standings.map(i => i.percentage)))
    .map(team => (team.bestP = true))
  // worst percentage
  standings
    .filter(team => team.percentage === Math.min(...standings.map(i => i.percentage)))
    .map(team => (team.worstP = true))
  standings = standings.sort((a, b) => (a.name > b.name ? 1 : -1))
  // console.log(standings)
  return standings
}

exports.app = functions.https.onRequest(app)
