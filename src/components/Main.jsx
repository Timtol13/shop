import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Auth/Login/Login'
import { Registration } from './Auth/Registration/Registration'

export const Main = () => {
  useEffect(() => {
    if(window.location === "/")
      window.location.replace('/home')
  }, [])
  return (
    <div>
        <Routes>
            <Route path={'/home'} element={<div>qwe</div>} />
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/singup'} element={<Registration />}/>
        </Routes>
    </div>
  )
}
