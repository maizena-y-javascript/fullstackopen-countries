import { useState, useEffect } from 'react'
import countriesService from './services/countries'
import CountryDetails from './components/CountryDetails'
import ResultsList from './components/ResultsList'

//_____
const App = () => {
  const [allCountries, setAllCountries] = useState(null)
  const [allNames, setAllNames] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [nameResults, setNameResults] = useState([])

  // initial load
  useEffect(() => {
    countriesService
      .initializeData()
      .then(data => {
        setAllCountries(data)
        setAllNames(data.map(({ name }) => name.common))
      })
  }, [])

  // input update
  useEffect(() => {
    const lowerCaseFilter = nameFilter.toLowerCase()
    const newResults = allNames.filter(name => (
      name.toLowerCase().includes(lowerCaseFilter)
    ))
    setNameResults(newResults)
  }, [nameFilter])

  // early return: first effect
  if (allCountries === null) return <p>Loading…</p>

  // eartly return: search completed
  if (nameResults.length === 1) {
    const targetName = nameResults[0]
    const selectedCountry = allCountries.find(country => (
      country.name.common === targetName
    ))
    const onBack = () => {
      setNameFilter('')
      setNameResults([])
    }
    return <CountryDetails
      info={selectedCountry}
      onBack={onBack}
    />
  }

  // handlers
  const handleNameFilterChange = ({ target }) => setNameFilter(target.value)
  const getShowHandler = name => () => setNameResults([name])

  // component output
  return (
    <>
      <label>
        find countries&nbsp;
        <input
          type="text"
          value={nameFilter}
          placeholder="name"
          onChange={handleNameFilterChange}
        />
      </label>

      <ResultsList
        nameFilter={nameFilter}
        nameResults={nameResults}
        getShowHandler={getShowHandler}
      />
    </>
  )
}

//_____
export default App
