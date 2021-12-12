import CountryInfo from './CountryInfo'
import CountryName from './CountryName';

const Display = ({ displayRule, matches, RULES }) => {

    switch (displayRule) {
        case RULES.NO_MATCH:
            return (<p>Sorry, no matches</p>)
        case RULES.ONE_MATCH:
            return (<CountryInfo match={matches[0]} />)
        case RULES.LESS_THAN_TEN:
            return (<>
                {matches.map(match => <CountryName match={match} key={match.name.official} />)}
            </>)
        case RULES.TOO_MANY:
            return (<p>Too many matches<br />Try smth more specific</p>)
        default:
            return <></>
    }

}
export default Display