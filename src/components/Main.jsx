import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Auth/Login/Login'
import { Registration } from './Auth/Registration/Registration'
import { Home } from './Home/Home'
import { OurProducts } from './OurProducts/OurProducts'
import { Catalog } from './Catalog/Catalog'
import { Contacts } from './Contacts/Contacts'
import { Profile } from './Profile/Profile'
import { Order } from './Order/Order'
import { Trash } from './Trash/Trash'

export const Main = () => {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/ourProducts'} element={<OurProducts />} />
            <Route path={'/catalog'} element={<Catalog />}/>
            <Route path={'/login'} element={<Login />}/>
            <Route path={'/signup'} element={<Registration />}/>
            <Route path={'/profile'} element={<Profile />}/>
            <Route path={'/contacts'} element={<Contacts />}/>
            <Route path={'/order'} element={<Order />}/>
            <Route path={'/trash'} element={<Trash />} />
        </Routes>
    </div>
  )
}
