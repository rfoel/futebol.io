import axios from 'axios'

axios.defaults.baseURL = process.env.API_ROOT

export const setLeague = ({ commit }, league) => {
  commit('SET_LEAGUE', league)
}

export const getStandings = ({}, league) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/league/${league}`)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
