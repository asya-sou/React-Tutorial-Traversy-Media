import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
/* import React from 'react'
 */

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Pet the cat',
        day: 'June 25th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Walk the dog',
        day: 'June 25th at 3:30pm',
        reminder: false,
    },
])

  return (
    <div className="container">
      <Header /> 
      <Tasks tasks={tasks} />
    </div>
  )
} 

/* function App() {
  return (
    <div className="container">
      <Header title = 'Hello!' /> 
    </div>
  )
}  */

/* class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
} */

export default App
