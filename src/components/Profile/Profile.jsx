import React, { useEffect, useState } from 'react'
import './Profile.css'
import { AuthAPI } from '../api/api'

export const Profile = () => {
    const [photo, setPhoto] = useState('')
    const [name, setName] = useState('')
    useEffect(() => {
        setName(sessionStorage.getItem('auth').email)
        AuthAPI.getPhoto(sessionStorage.getItem('auth').email)
    }, [])
  return (
    <div>
        <div class="form-container">
        <div class="profile">
            <img src={photo}/>
            <h3>{name}</h3>
            <a href="C:xampp/htdocs/START/update/update.php" class="btn">Редактировать профиль</a>
            <a href="profilemenu.php?logout=<?php echo $user_id; ?>" class="btn">Выйти</a>
            <p><a href="C:xampp/htdocs/START/login/login.php">Войти</a> или <a href="C:xampp/htdocs/START/reg/reg.php">Зарегистрироваться</a></p>
        </div>
    </div>
    </div>
  )
}
