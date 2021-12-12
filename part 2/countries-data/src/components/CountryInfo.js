import './bigBoi.css'
import Weather from './Weather'

const CountryInfo = ({ match }) => {
    const languages = Object.values(match.languages)
    return (<>
        <h2><span className="bigBoi">{match.flag}</span> {match.name.official} </h2>
        <p>Capital city: {match.capital[0]}</p>
        <p>Population: {match.population}</p>
        <h4>Languages: </h4>
        <ul>
        {languages.map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <Weather capital={match.capital[0]}/>
    </>)
}
export default CountryInfo