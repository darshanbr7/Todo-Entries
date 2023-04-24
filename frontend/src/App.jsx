import React from 'react'
import TodoNavbar from './Navbar/TodoNavbar'
import {BrowserRouter,Routes,Route } from "react-router-dom"

import IncompletedTask from './Task/IncompletedTask'

import TaskList from './Task/TaskList'

const App = () => {
  return (
   <>
   <BrowserRouter>
        <TodoNavbar/>
             <Routes>
                
                <Route   path='/IncompletedTask' element={<IncompletedTask/>} />
                <Route   path='/TaskList' element={<TaskList/>} />
             </Routes>
   </BrowserRouter>
  
   </>
  )
}

export default App