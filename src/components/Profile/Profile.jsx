import React, { useEffect, useState } from 'react'
import './Profile.css'
import { AuthAPI } from '../api/api'

export const Profile = () => {
    const [photo, setPhoto] = useState('')
    const [name, setName] = useState('')
    useEffect(() => {
        setName(sessionStorage.getItem('auth').email)
        fetch(`http://localhost:3300/getPhoto/${JSON.parse(sessionStorage.getItem('auth')).email}`).then(response => response? response.blob() : '')
        .then(blob => {
            setPhoto(URL.createObjectURL(blob))
        }).catch(err => {console.log(err)})
    }, [])
  return (
    <div>
        <div className="form-container">
        <div className="profile">
            <img src={photo}/>
            <h3>{name}</h3>
            <a href="C:xampp/htdocs/START/update/update.php" className="btn">Редактировать профиль</a>
            <a href="profilemenu.php?logout=<?php echo $user_id; ?>" className="btn">Выйти</a>
            <p><a href="C:xampp/htdocs/START/login/login.php">Войти</a> или <a href="C:xampp/htdocs/START/reg/reg.php">Зарегистрироваться</a></p>
        </div>
    </div>
    </div>
  )
}
