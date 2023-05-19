import React from 'react'
import {useFormik} from 'formik'

export const Login = () => {
  const formik = useFormik(
    {
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: values =>{
        console.log(values)
      }
    }
  )
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
          <input type="email" name="email" placeholder="Почта" class="box" {...formik.getFieldProps('email')} required />
            <input type="password" name="password" placeholder="Пароль" class="box" {...formik.getFieldProps('password')} required />
            <p>У вас нету ещё аккаунта? <a href="/signup">Зарегистрируйтесь</a></p>
          <button type='submit'>Войти</button>
        </form>
    </div>
  )
}
