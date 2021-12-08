import Button from "./Button"

export default function Feedback({setGood, setNeutral, setBad, values: {good, bad, neutral}}) {
    return (
        <div>
            <h2>give feedback</h2>
            <Button onClick={() => setGood(good+1)} text={"good"} /> 
            <Button onClick={() => setNeutral(neutral+1)} text={"neutral"} /> 
            <Button onClick={() => setBad(bad+1)} text={"bad"} /> 
        </div>
    )
}