import React from 'react'
import {useFormik} from 'formik'
import './Login.css'
import { AuthAPI } from '../../api/api'

export const Login = () => {
  const formik = useFormik(
    {
      initialValues: {
        login: '',
        password: ''
      },
      onSubmit: values => {
        sessionStorage.setItem('auth', JSON.stringify(values))
        AuthAPI.loginReq(values)
      }
    }
  )
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className={'form-container'}>
          <input type="login" name="login" placeholder="Почта" className="box" {...formik.getFieldProps('login')} required />
            <input type="password" name="password" placeholder="Пароль" className="box" {...formik.getFieldProps('password')} required />
            <p>У вас нету ещё аккаунта? <a href="/signup">Зарегистрируйтесь</a></p>
          <button className='btn' type='submit'>Войти</button>
        </form>
    </div>
  )
}
