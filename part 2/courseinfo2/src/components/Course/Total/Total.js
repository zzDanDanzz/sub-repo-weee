const Total = ({ parts }) => {


    return (
        <>
            <h4>total of {
                parts.map(part => part.exercises).reduce((a, b) => a + b, 0)
            } exercises</h4>
        </>
    )
}
export default Total