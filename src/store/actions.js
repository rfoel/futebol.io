import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

export const setLeague = ({ commit }, league) => {
  commit('SET_LEAGUE', league)
}

export const getStandings = ({}, league) => {
  return new Promise((resolve, reject) => {
    axios
      .post('/league', { league })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
