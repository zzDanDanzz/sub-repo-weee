const Wind = ({windData: {deg, speed}}) => {

    const dirArr = ["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"]

    const index = Math.round(deg / 22.5) 


return (<><p><b>Wind:</b> {speed} meters per sec from {dirArr[index]}</p></>)
}
export default Wind