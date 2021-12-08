
export default function TopQuotes({ mostLiked, likes }) {
    if (mostLiked === ""){
        return <></>
    }
    return (
        <>
            <h2>Today's most liked quote:</h2>
            <p>"{mostLiked}" (liked {Math.max(...likes)} times)</p>
        </>
    )
}