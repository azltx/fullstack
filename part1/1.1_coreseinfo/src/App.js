

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part1} {props.ex1}</p>
      <p>{props.part2} {props.ex2}</p>
      <p>{props.part3} {props.ex3}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Numbers of exercerises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = "Half stack application development"
  const part1 = "Fundamentals of React"
  const part2 = "Using Props to pass data"
  const part3 = "State of a component"
  const exercerise1 = 10
  const exercerise2 = 7
  const exercerise3 = 14
  return (
    <div>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3}
            ex1={exercerise1} ex2={exercerise2} ex3={exercerise3} />
        <Total total={exercerise1 + exercerise2 + exercerise3} />
    </div>
  )
}

export default App;
