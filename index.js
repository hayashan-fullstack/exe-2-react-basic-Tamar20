import React from 'react'
import ReactDOM from 'react-dom'

const Parts = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )

}
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) =>{
 return (
   props.parts.map(i => <Parts name = {i.name} exercises = {i.exercises} />)
 )

}

const Total = (props) =>{
  return (props.parts[0].name + props.parts[1].name + props.parts[2].name)

}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
     
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))