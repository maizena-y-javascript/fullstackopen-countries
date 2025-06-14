
//_____
const ResultsList = ({ nameFilter, nameResults, getShowHandler }) => {
  if (!nameFilter) return <p>Start typing a country name...</p>
  if (nameResults.length === 0) return <p>No results. Try again</p>
  if (nameResults.length > 10) return <p>Too many matches, continue typing</p>

  return (
    <ul>
      {nameResults.map(name => (
        <li key={name}>{name} <button onClick={getShowHandler(name)}>show</button></li>
      ))}
    </ul>
  )
}

//_____
export default ResultsList
