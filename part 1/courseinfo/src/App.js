const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      }, 
      {
        name: "Using props to pass data",
        exercises: 7
      }, 
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <>
    <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
    <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
    <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
  </>
)

const Part = (props) => (
  <p>{props.part} {props.exercise}</p>
)

const Total = (props) => {
  
  return (
    <p>Number of exercises {props.exercises.map(val=>val.exercises).reduce((a,b) => a+b, 0)}</p>
  )
}


export default App
