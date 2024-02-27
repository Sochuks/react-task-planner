import React from 'react'
import Button from './Button'

const Header = () => {
  return (

    <header className='flex justify-between items-center mb-8'>
        <h1>Task Planner</h1>
        < Button text = 'Add'/>
    </header>
    
  )
}

export default Header