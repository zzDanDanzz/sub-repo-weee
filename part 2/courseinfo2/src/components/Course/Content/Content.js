import Part from './Part/Part'
const Content = ({ parts }) => {
  return <>
  {parts.map(part=>(
     <Part name={part.name} exercises={part.exercises} key={part.name} /> 
  ))}
  </>;
};
export default Content;
