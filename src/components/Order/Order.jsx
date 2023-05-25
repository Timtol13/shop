import { useFormik } from 'formik'
import React, {useState} from 'react'
import './Order.css'
import { useEffect } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { OrderAPI } from '../api/api'

export const Order = () => {
    const [order, setOrder] = useState([])
    const [user, setUser] = useState({})
    const [price, setPrice] = useState(0)
    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            cardDate: '',
            message: ''
        },
        onSubmit: values => {
            order.map(el => {
                if (el.title){
                    OrderAPI.sendOrder({'title': el.title, 'price': el.price,'cardNum':  values.cardNumber,'cardDate':  values.cardDate,'message':  values.message,'email':  user.email,'login':  user.login})
                }
            })
            sessionStorage.setItem('item', JSON.stringify([{}]))
            window.location.replace('/')
        }
    })
    const checkPrice = () => {
        setPrice(0)
        
        order.map(el => {
            if(el.price){
                setPrice(price => price + Number.parseInt(el.price))
            }
        })
    }
    useEffect(() => {
        setOrder(JSON.parse(sessionStorage.getItem('item')))
        setUser(JSON.parse(sessionStorage.getItem('auth')))
    }, [])
  return (
    <div>
        <Header />
                <div className={'form-objects'}>
                    {order?.map(el => {
                        if (el.title){
                            return (
                                <div className={'form-object'}>
                                    <img src={el.image} width={490} />
                                    <input className={'form-input-element'} value={el.title} readOnly={true} />
                                    <input className={'form-input-element'} value={el.price} readOnly={true} />  
                                </div>
                            )
                        }
                    })}
                </div>
            <form className='form-inp' onSubmit={formik.handleSubmit}>
                <input className={'form-input-element'} value={`Общая стоимость: ${price}`} readOnly={true} /><a className={'form-input-element'} onClick={checkPrice}>Узнать стоимость</a>
                <input className={'form-input-element'} type={'number'} placeholder='Введите номер карты' pattern={'/^([0-9]{4}( |\-)){3}[0-4]{4}$/'} {...formik.getFieldProps('cardNumber')} />
                <input className={'form-input-element'} type={'date'}  {...formik.getFieldProps('cardDate')} />
                <textarea className={'form-input-element form-textarea-element'} placeholder='Введите пожелания к заказу' {...formik.getFieldProps('message')}></textarea>
                <button className={'form-button'} type={'submit'}>Купить</button>
            </form>
        <Footer/>
    </div>
  )
}
