import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`m-2 px-3 py-5 cursor-pointer bg-gray-100 rounded-md ${task.reminder ? 'border-l-4 border-green-600' : ''}`}
    onDoubleClick={() => onToggle(task.id)}>
            <h3 className="flex items-center justify-between font-semibold">{task.text} 
            <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=> onDelete(task.id) } /></h3>
            <p>{task.day}</p>
    </div>
  )
}

export default Task