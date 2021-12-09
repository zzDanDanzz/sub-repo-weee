import Header from "./Header/Header"
import Content from "./Content/Content"
import Total from "./Total/Total"

const Course = ({courses}) => {

    return (
        <>
            {courses.map(courseChap => (
                <div key={"DIV"+courseChap.name}>
                <Header title={courseChap.name} key={"HEAD"+courseChap.name} />
                <Content parts={courseChap.parts} key={"CONT"+courseChap.name} />
                <Total parts={courseChap.parts} key={"TOT"+courseChap.name} /> 
                </div>
            ))}
        </>
    )
}
export default Course