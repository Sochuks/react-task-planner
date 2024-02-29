import { useState } from "react"

const AddTask = () => {

    //Create state for form elements
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')
  return (
    // Add Task Form 
    <form className="mb-10">
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" className="h-10" value={text} 
            onChange={(e) => setText(e.target.value)} />
        </div>

        <div className="form-control">
            <label>Day</label>
            <input type="text" placeholder="Add Day & time" className="h-10" value={day} 
            onChange={(e)=> setDay(e.target.value)}/>
         </div>

        <div className="form-control flex items-center justify-between">
            <label className="flex-1">Set Reminder</label>
            <input type="checkbox" className="flex-2 h-5" value={reminder} 
            onChange={(e)=> setReminder(e.currentTarget.checked)}/>
        </div>

        <input className="w-full mx-auto btn mt-5" type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask