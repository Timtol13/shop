import React, { useEffect, useState } from 'react'
import './Profile.css'
import { AuthAPI, OrderAPI } from '../api/api'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

export const Profile = () => {
    const [photo, setPhoto] = useState('')
    const [user, setUser] = useState('')
    const [orders, setOrders] = useState([])
    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem('auth')))
        fetch(`http://localhost:3300/getPhoto/${JSON.parse(sessionStorage.getItem('auth')).email}`).then(response => response? response.blob() : '')
        .then(blob => {
            setPhoto(URL.createObjectURL(blob))
        }).catch(err => {console.log(err)})
        OrderAPI.getOrders().then(e => {setOrders(e.data)})
    }, [])
  return (
    <div>
        <Header />
        <div className="profilePage">
            <div className={'myData'}>
                {photo? <img src={photo} />: 
                <div className={'files'}>
                    <label className={'input_file'} htmlFor="button-photo">
                        <span>Фото профиля</span>
                        <input type="file"
                            accept="image/*"
                            onChange={(event) => {
                                    AuthAPI.sendPhoto({'email': user.email, 'files': event.target.files[0]})
                                }
                                }
                            className={'files'}
                            id="button-photo"/>
                    </label>
                </div>
                }
                <div className={'textData'}>
                    <h3>Личный кабинет</h3>
                    <h3>{user.name} {user.surname}</h3>
                </div>
            </div>
            <div className={'myOrders'}>
                {orders.map(el => {
                    return (
                        <div className={'myOrder'}>
                            <h1>{el.title}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer />
    </div>
  )
}
