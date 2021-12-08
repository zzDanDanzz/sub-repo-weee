import StatsLine from "./StatsLine";

export default function Statistics({ values: { good, bad, neutral } }) {
    if (good === 0 && bad === 0 && neutral === 0) {
        return (
            <p>No feedback has been given yet</p>
        )
    }
    const goodWeight = 1;
    const badWeight = -1;

    let totalFeed = good + bad + neutral
    let totalWeight = good * goodWeight + bad * badWeight
    let avg = totalWeight / totalFeed
    let pos = (good / totalFeed) * 100 + "%"

    return (
        <div>
            <h2>statistics</h2>
            <table>
                <StatsLine text={"good"} value={good} />
                <StatsLine text={"neutral"} value={neutral} />
                <StatsLine text={"bad"} value={bad} />
                <StatsLine text={"total"} value={totalFeed} />
                <StatsLine text={"average"} value={avg} />
                <StatsLine text={"positive"} value={pos} />
            </table>

        </div>

    )
}