import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({showTaskForm, showAdd}) => {
  const location = useLocation()

  
    return (

      <header className='flex justify-between items-center mb-8'>
          <h1>Task Planner</h1>
         {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text ={showAdd ? 'Close' : 'Add'} onClick={showTaskForm} />}
      </header>
      
    )
}

export default Header