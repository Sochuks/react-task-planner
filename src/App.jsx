import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: 'PTA meeting',
      day: 'Feb 5th at 3pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Stream Farming',
      day: 'Apr 15th at 1am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Meet the oloris',
      day: 'Oct 25th at 10pm',
      reminder: false,
    },
  ])
  return (
   
      <div className="container-inner my-8 mx-auto p-8 rounded-sm border-2 border-teal-300">
        <Header />
        <Tasks tasks={tasks} />

      </div>

  )
}

export default App
