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

      // getTask
      const getTasks = async () => {
        const serverTasks = await fetchTasks()
        setTasks(serverTasks)
      }

        getTasks()
    }, [])

  // fetch Tasks
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:8000/tasks')
    const data = await res.json()

    return (data)
  }

  // Fetch Task
    const fetchTask = async () =>{
      const res = await fetch(`http://localhost:8000/tasks/${id}`)
      const data = await res.json()

    return (data)
    }

    // Delete task event
  const deleteTask = async (id) => {
    await fetch(`http://localhost:8000/tasks/${id}`, {
      method: 'DELETE',
    })

  setTasks(tasks.filter((task) => task.id !== id))
  }

    // Reminder task event
  const toggleReminder = async (id) =>{
    const res = await fetchTask(id)
    const updatedTask = {...res, reminder: !res.reminder}
    
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder} : task ) )
  }

    //Add Task from form
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000)  + 1 
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
    const res = await fetch('http://localhost:8000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'apllication/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])

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
