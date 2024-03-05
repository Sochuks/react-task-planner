import React from 'react'
import Button from './Button'

const Header = ({showTaskForm}) => {
  return (

    <header className='flex justify-between items-center mb-8'>
        <h1>Task Planner</h1>
        <Button text ='Add' onClick={showTaskForm} />
    </header>
    
  )
}

export default Header