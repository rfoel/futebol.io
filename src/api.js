const cheerio = require("cheerio")
const jQuery = require("jquery")

const urlBase = "http://globoesporte.globo.com/futebol"
const userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36"

export const matches = data => {
  return new Promise((resolve, reject) => {
    // axios.get(url => {
    //   if (!error) {
    //     let $ = cheerio.load(html)
    //     let matches = []
    //     $(".lista-de-jogos-conteudo li").each(() => {
    //       let match = {}
    //       let item = $(this)
    //       match.homeTeam = item
    //         .find(".placar-jogo-equipes")
    //         .find(".placar-jogo-equipes-mandante")
    //         .find(".placar-jogo-equipes-sigla")
    //         .attr("title")
    //       match.homeScore = item
    //         .find(".placar-jogo-equipes")
    //         .find(".placar-jogo-equipes-placar")
    //         .find(".placar-jogo-equipes-placar-mandante")
    //         .text()
    //       match.awayTeam = item
    //         .find(".placar-jogo-equipes")
    //         .find(".placar-jogo-equipes-visitante")
    //         .find(".placar-jogo-equipes-sigla")
    //         .attr("title")
    //       match.awayScore = item
    //         .find(".placar-jogo-equipes")
    //         .find(".placar-jogo-equipes-placar")
    //         .find(".placar-jogo-equipes-placar-visitante")
    //         .text()
    //       if (!match.homeScore) match.homeScore = 0
    //       if (!match.awayScore) match.awayScore = 0
    //       matches.push(match)
    //     })
    //     resolve(matches)
    //   } else {
    //     reject({ error: "Não foi possível retornar as informações!" })
    //   }
    // })
  })
}

export const standings = data => {
  return new Promise((resolve, reject) => {
    jQuery.getJSON(`http://anyorigin.com/go?url=globoesporte.globo.com/futebol/${data}/&callback=?`).done(response => {
      if (response.contents) {
        let $ = cheerio.load(response.contents)
        let lista = []

        $(".tabela-times tbody tr").each((index, item) => {
          let club = {}
          club.name = $(item)
            .find(".tabela-times-time-link")
            .attr("title")
            .toString("ISO-8859-1")

          lista.push(club)
        })
        let x = 0
        $(".tabela-pontos tbody tr").each((index, item) => {
          lista[x].points = $(item)
            .find(".tabela-pontos-ponto")
            .text()
          lista[x].played = $(item)
            .find(".tabela-pontos-ponto")
            .next()
            .text()
          lista[x].won = $(item)
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .text()
          lista[x].drawn = $(item)
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .text()
          lista[x].lost = $(item)
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .text()
          lista[x].goalsFor = $(item)
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          lista[x].goalsAgainst = $(item)
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          lista[x].goalDifference = $(item)
            .find(".tabela-pontos-ponto")
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .next()
            .text()
          lista[x].percentage = $(item)
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
