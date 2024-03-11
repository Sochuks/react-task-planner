import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState ([])

  // useEffect to fetch Data from db.json
    useEffect(() =>{

        fetchTasks()
    }, [])

  // fetch Tasks
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:8000/tasks')
    const data = await res.json()

    console.log(data)
  }

    // Delete task event
  const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  }

    // Reminder task event
  const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task ) )
  }

    //Add Task from form
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)  + 1 
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

    //Show Task Form
  const toggleForm = () =>{
    setShowTaskForm(!showTaskForm)
  }

  return (
   
      <div className="container-inner my-8 mx-auto p-8 rounded-sm border-2 border-teal-300">
        
        <Header showTaskForm={toggleForm} showAdd={showTaskForm} />

        {showTaskForm && <AddTask onAdd = {addTask} />}
        
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No Task To Show '}

      </div>

  )
}

export default App
