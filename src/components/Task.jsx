const Task = ({task}) => {
  return (
    <div className="m-2 px-3 py-5 cursor-pointer bg-gray-100">
        <h3 className="flex items-center justify-between">{task.text}</h3>
    </div>
  )
}

export default Task