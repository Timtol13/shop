import { useFormik } from 'formik'
import React, {useState} from 'react'
import './Order.css'
import { useEffect } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { OrderAPI } from '../api/api'

export const Order = () => {
    const [order, setOrder] = useState({})
    const [user, setUser] = useState({})
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            cardDate: '',
            message: ''
        },
        onSubmit: values => {
            OrderAPI.sendOrder({'title': order.title, 'price': order.price,'cardNum':  values.cardNumber,'cardDate':  values.cardDate,'message':  values.message,'email':  user.email,'login':  user.login})
            //sessionStorage.removeItem('item')
            //window.location.replace('/')
        }
    })
    useEffect(() => {
        setOrder(JSON.parse(sessionStorage.getItem('item')))
        setUser(JSON.parse(sessionStorage.getItem('auth')))
    }, [])
  return (
    <div>
        <Header />
            <form className='form-inp' onSubmit={formik.handleSubmit}>
                <img src={order.image} width={490} />
                <input className={'form-input-element'} value={order.title} readonly={true} />
                <input className={'form-input-element'} value={order.price} readonly={true} />
                <input className={'form-input-element'} type={'number'} placeholder='Введите номер карты' pattern={'/^([0-9]{4}( |\-)){3}[0-4]{4}$/'} {...formik.getFieldProps('cardNumber')} />
                <input className={'form-input-element'} type={'date'}  {...formik.getFieldProps('cardDate')} />
                <textarea className={'form-input-element form-textarea-element'} placeholder='Введите пожелания к заказу' {...formik.getFieldProps('message')}></textarea>
                <button className={'form-button'} type={'submit'}>qwe</button>
            </form>
        <Footer/>
    </div>
  )
}
