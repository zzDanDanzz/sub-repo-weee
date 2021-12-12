import axios from "axios"
import { useEffect, useState } from "react/cjs/react.development"
import Wind from "./Wind"

const Weather = ({ capital }) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${API_KEY}`

    const [icon, setIcon] = useState('')
    const [temperature, setTemperature] = useState('Loading...')
    const [windData, setWindData] = useState('')

    const ICON_URL = `https://openweathermap.org/img/wn/${icon}@2x.png`

    useEffect(() => {
        axios.get(WEATHER_URL).then(response => {
            console.log('useEffect');
            let newTemp = response.data.main.temp
            let newIcon = response.data.weather[0].icon
            let newWindData = response.data.wind
            console.log(newWindData);
            setTemperature(newTemp)
            setIcon(newIcon)
            setWindData(newWindData)
        })
    }, [WEATHER_URL])

    return (<>
        <h4>Weather in {capital}</h4>
        <p>Temperature: {temperature} °C</p>
        {windData && <Wind windData={windData}/>}
        {icon && <img src={ICON_URL} alt="weather icon"></img>}

    </>)
}
export default Weather