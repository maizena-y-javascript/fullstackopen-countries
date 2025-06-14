import axios from 'axios'

//_____
const url = 'https://studies.cs.helsinki.fi/restcountries/api/all'

//_____
const initializeData = () => (
  axios
    .get(url)
    .then(({ data }) => data)
)

//_____
export default {
  initializeData
}
