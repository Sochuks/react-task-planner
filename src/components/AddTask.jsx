const AddTask = () => {
  return (
    // Add Task Form 
    <form>
        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" />
        </div>

        <div className="form-control">
            <label>Day</label>
            <input type="text" placeholder="Add Day & time" />
        </div>

        <div className="form-control">
            <label>Set Reminder</label>
            <input type="checkbox" />
        </div>

        <input type="submit" value="Save Task" />
    </form>
  )
}

export default AddTask