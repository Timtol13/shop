import React from 'react'
import {useFormik} from 'formik'
import './Login.css'
import { AuthAPI } from '../../api/api'

export const Login = () => {
  const formik = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: values => {
        console.log(values)
        AuthAPI.loginReq(values).catch(e => {console.log(e)})
      }
    }
  )
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className={'form-container'}>
          <h1 className={'formTitleAuth'}>Вход</h1>
          <input type="email" name="login" placeholder="Почта" className="box" {...formik.getFieldProps('email')} required />
            <input type="password" name="password" placeholder="Пароль" className="box" {...formik.getFieldProps('password')} required />
          <button className='btn' type='submit'>Войти</button>
            <p>У вас нету ещё аккаунта? <a href="/signup" className={'authLink'}>Зарегистрируйтесь</a></p>
        </form>
    </div>
  )
}
