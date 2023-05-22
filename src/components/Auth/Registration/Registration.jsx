import React, { useState } from 'react'
import { useFormik } from 'formik'
import './Registration.css'
import { AuthAPI } from '../../api/api'

export const Registration = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [email, setEmail] = useState('');
  const formik = useFormik(
    {
      initialValues: {
        login: '',
        email: '',
        name: '',
        surname: '',
        password: ''
      },
      onSubmit: values =>{
        if(password === values.password){
          AuthAPI.registrationReq(values)
          setError('')
        } else {
          setError('Поля не совпадают!')
        }
      }
    }
  )
  return (
    <div>
    
        <form onSubmit={formik.handleSubmit} className={'form-container'}>
            <input type="email" name="email" placeholder="Почта" className="box" {...formik.getFieldProps('email')} value={email} onChange={(e) => {setEmail(e.target.value)}} required />
            <input type="text" name="text" placeholder="Логин" className="box" {...formik.getFieldProps('login')} required />
            <input type="password" name="password" placeholder="Пароль" className="box" onChange={(e) => {setPassword(e.target.value)}} required />
            <input type="password" name="password" placeholder="Повторите пароль" className="box" {...formik.getFieldProps('password')} required />
            {error !== ''? <p>{error}</p>: ''}
            <div className={'files'}>
                <label className={'input_file'} htmlFor="button-photo">
                    <span>Фото профиля</span>
                    <input type="file"
                           accept="image/*"
                           onChange={(event) => {
                                AuthAPI.sendPhoto({'email': email, 'files': event.target.files[0]})
                              }
                            }
                           className={'files'}
                           id="button-photo"/>
                </label>
            </div>
              <p>У вас уже есть аккаунт? <a href="/signup">Войдите</a></p>
            <button className='btn' type='submit'>Зарегистрироваться</button>
        </form>
    </div>
  )
}