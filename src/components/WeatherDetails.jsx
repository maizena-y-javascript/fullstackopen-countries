const WeatherDetails = ({ mainCapital, weatherData }) => {
  const subtitle = <h2>Weather in {mainCapital}</h2>
  if (!weatherData) return (
    <>
      {subtitle}
      <p>Loading…</p>
    </>
  )
  
  const { temperature, humidity, wind } = weatherData
  return (
    <>
      {subtitle}
      <ul>
        <li>Temperature: {temperature} °C</li>
        <li>Humidity: {humidity} %</li>
        <li>Wind: {wind} m/s</li>
      </ul>
    </>
  )
}

export default WeatherDetails
