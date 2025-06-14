import { useState, useEffect } from 'react'
import weatherService from '../services/weather'
import WeatherDetails from './WeatherDetails'

//_____
const CountryDetails = ({ info, onBack }) => {
  const { name, capital, area, languages, flags, capitalInfo } = info
  const [capitalLatitude, capitalLongitude] = capitalInfo.latlng
  const [weatherData, setWeatherData] = useState(null)

  // initial load
  useEffect(() => {
    weatherService
    .initializeData(capitalLatitude, capitalLongitude)
    .then(now => setWeatherData({
        temperature: now.air_temperature,
        humidity: now.relative_humidity,
        wind: now.wind_speed
      }))
  }, [capitalLatitude, capitalLongitude])

  // component output
  return (
    <>
      <button onClick={onBack}>Go back</button>
      <h1>{name.common}</h1>
      <p>
        capital: {capital.join(', ')}<br />
        area: {area} km<sup>2</sup>
      </p>

      <h2>Languages</h2>
      <ul>
        {Object.values(languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <div>
        <img src={flags.png} alt={flags.alt} />
      </div>

      <WeatherDetails
        mainCapital={capital[0]}
        weatherData={weatherData}
      />
    </>
  )
}

//_____
export default CountryDetails