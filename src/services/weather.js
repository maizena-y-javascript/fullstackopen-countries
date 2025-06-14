import axios from 'axios'

//_____
const userAgent = 'fullstackopen/1.0 martin.maizena.javascript@gmail.com'
const baseUrl = 'https://api.met.no/weatherapi/locationforecast/2.0/compact'

//_____
const initializeData = (latitude, longitude) => {
  const lat = latitude.toFixed(4)
  const lon = longitude.toFixed(4)
  const url = `${baseUrl}?lat=${lat}&lon=${lon}`

  return axios
    .get(url, {headers: {'User-Agent': userAgent}})
    .then(({ data }) => data.properties.timeseries[0].data.instant.details)
    .catch(err => console.error('Error fetching weather:', err))
}

//_____
export default {
  initializeData
}
