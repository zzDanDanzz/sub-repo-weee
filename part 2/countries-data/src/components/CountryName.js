import { useState } from "react"
import CountryInfo from "./CountryInfo"

const CountryName = ({ match }) => {

    const [showBtn, setShowBtn] = useState(false)

    let nameOrNoName = showBtn ? "" : match.name.official

    let showOrHide = showBtn ? "Hide" : "Show"

    let info = showBtn ? <CountryInfo match={match} /> : "" 

    return (<>
        <p>{nameOrNoName}
            <button onClick={() => setShowBtn(!showBtn)}>
                {showOrHide} info
            </button>
        </p>
        {info}
    </>)
}
export default CountryName