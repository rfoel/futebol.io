'use strict'
require('es6-promise').polyfill()

const request = require('request')
const cheerio = require('cheerio')

const urlBase = 'http://globoesporte.globo.com/futebol/'
const userAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'

export const matches = league => {
  return new Promise((resolve, reject) => {
    const options = {
      url: `http://allorigins.me/get?method=raw&url=http://globoesporte.globo.com/servico/esportes_campeonato/responsivo/widget-uuid/19c9e918-61c8-4b41-bb43-e9f0749dab2e/fases/fase-unica-campeonato-ingles-2017-2018/rodada/23/jogos.html&callback=?`,
      headers: {
        'User-Agent': userAgent
      }
    }
    request(options, (error, response, html) => {
      if (!error) {
        const $ = cheerio.load(html)
        let matches = []
        $('.lista-de-jogos-item').each((index, item) => {
          let match = {}
          match.homeTeam = $(item)
            .find('.placar-jogo-equipes')
            .find('.placar-jogo-equipes-mandante')
            .find('.placar-jogo-equipes-sigla')
            .attr('title')
          match.homeScore = $(item)
            .find('.placar-jogo-equipes')
            .find('.placar-jogo-equipes-placar')
            .find('.placar-jogo-equipes-placar-mandante')
            .text()
          match.awayTeam = $(item)
            .find('.placar-jogo-equipes')
            .find('.placar-jogo-equipes-visitante')
            .find('.placar-jogo-equipes-sigla')
            .attr('title')
          match.awayScore = $(item)
            .find('.placar-jogo-equipes')
            .find('.placar-jogo-equipes-placar')
            .find('.placar-jogo-equipes-placar-visitante')
            .text()
          matches.push(match)
        })
        resolve(matches)
      } else {
        reject({ error: "Couldn't fetch the data." })
      }
    })
  })
}

export const standings = league => {
  return new Promise((resolve, reject) => {
    const options = {
      url: `http://allorigins.me/get?method=raw&url=${urlBase}${league}&callback=?`,
      headers: {
        'User-Agent': userAgent
      }
    }
    request(options, (error, response, html) => {
      if (!error) {
        const $ = cheerio.load(html)
        let list = []
        $('.tabela-times tbody tr').each((index, item) => {
          let club = {}
          club.name = $(item)
            .find('.tabela-times-time-nome')
            .text()
          club.acronym = $(item)
            .find('.tabela-times-time-sigla')
            .text()
          list.push(club)
        })
        $('.tabela-pontos tbody tr').each((index, item) => {
          list[index].points = $(item)
            .find('.tabela-pontos-ponto')
            .text()
          list[index].played = $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .text()
          list[index].won = $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .text()
          list[index].drawn = $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .text()
          list[index].lost = $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .text()
          list[index].goalsFor = $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          list[index].goalsAgainst = $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          list[index].goalDifference = $(item)
            .find('.tabela-pontos-ponto')
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          list[index].percentage = $(item)
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
        })
        resolve(list)
      } else {
        reject({ error: "Couldn't fetch the data." })
      }
    })
  })
}
