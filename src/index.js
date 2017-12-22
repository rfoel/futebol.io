require("es6-promise").polyfill()

const request = require("request")
const cheerio = require("cheerio")

const urlBase = "http://globoesporte.globo.com/futebol"
const userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36"

exports.rodadaAtual = serie => {
  return new Promise((resolve, reject) => {
    const options = {
      url: urlBase + serie,
      headers: {
        "User-Agent": userAgent
      }
    }
    request(options, (error, response, html) => {
      if (!error) {
        var $ = cheerio.load(html)
        var lista = []

        $(".lista-de-jogos-conteudo li").each(() => {
          var rodada = {}
          var item = $(this)
          rodada.mandante = item
            .find(".placar-jogo-equipes")
            .find(".placar-jogo-equipes-mandante")
            .find(".placar-jogo-equipes-sigla")
            .attr("title")
          rodada.placarMandante = item
            .find(".placar-jogo-equipes")
            .find(".placar-jogo-equipes-placar")
            .find(".placar-jogo-equipes-placar-mandante")
            .text()
          rodada.visitante = item
            .find(".placar-jogo-equipes")
            .find(".placar-jogo-equipes-visitante")
            .find(".placar-jogo-equipes-sigla")
            .attr("title")
          rodada.placarVisitante = item
            .find(".placar-jogo-equipes")
            .find(".placar-jogo-equipes-placar")
            .find(".placar-jogo-equipes-placar-visitante")
            .text()
          if (!rodada.placarMandante) rodada.placarMandante = 0
          if (!rodada.placarVisitante) rodada.placarVisitante = 0
          lista.push(rodada)
        })
        resolve(lista)
      } else {
        reject({ error: "Não foi possível retornar as informações!" })
      }
    })
  })
}

exports.tabela = serie => {
  return new Promise((resolve, reject) => {
    var options = {
      url: urlBase + serie,
      headers: {
        "User-Agent": userAgent
      }
    }
    request(options, (error, response, html) => {
      if (!error) {
        var $ = cheerio.load(html)
        var lista = []

        $(".tabela-times tbody tr").each(() => {
          var item = $(this)
          var time = {}
          time.nome = item.find(".tabela-times-time-link").attr("title")
          lista.push(time)
        })
        var x = 0
        $(".tabela-pontos tbody tr").each(() => {
          var item = $(this)
          lista[x].pontos = item.find(".tabela-pontos-ponto").text()
          lista[x].jogos = item
            .find(".tabela-pontos-ponto")
            .next()
            .text()
          lista[x].vitorias = item
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .text()
          lista[x].empates = item
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .text()
          lista[x].derrotas = item
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .text()
          lista[x].golsPro = item
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          lista[x].golsContra = item
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          lista[x].saldoGols = item
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          lista[x].percentual = item
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          x++
        })
        resolve(lista)
      } else {
        reject({ error: "Não foi possível retornar as informações!" })
      }
    })
  })
}
