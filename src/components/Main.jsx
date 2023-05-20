import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Auth/Login/Login'
import { Registration } from './Auth/Registration/Registration'
import { Home } from './Home/Home'

export const Main = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/signup'} element={<Registration />}/>
        </Routes>
    </div>
  )
}
