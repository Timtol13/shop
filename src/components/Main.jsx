import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Auth/Login/Login'
import { Registration } from './Auth/Registration/Registration'

export const Main = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<div>qwe</div>} />
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/signup'} element={<Registration />}/>
        </Routes>
    </div>
  )
}
