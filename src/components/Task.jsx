import {FaTimes} from 'react-icons/fa'

const Task = ({task}) => {
  return (
    <div className="m-2 px-3 py-5 cursor-pointer bg-gray-100 rounded-md">
            <h3 className="flex items-center justify-between font-semibold">{task.text} <FaTimes /></h3>
            <p>{task.day}</p>
    </div>
  )
}

export default Task