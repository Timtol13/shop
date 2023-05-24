import React, {useEffect, useState} from 'react'
import './Contacts.css'
import { Header } from '../Header/Header'
import { useFormik } from 'formik'
import { AuthAPI } from '../api/api'
import { Footer } from '../Footer/Footer'

export const Contacts = () => {
    const [star, setStar] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    useEffect(() => {
        setName(JSON.parse(sessionStorage.getItem('auth')).name)
        setEmail(JSON.parse(sessionStorage.getItem('auth')).email)
    }, [])
    const formik = useFormik(
        {
            initialValues: {
                message: ''
            },
            onSubmit: values =>{
                console.log(values, star)
                AuthAPI.sendMessage(name, email, values.message, star)
            }
        }
    )
  return (
    <div>
        <Header />
        <section className='contactt'>
        <div class="text">
            <div class="hh">
                <h1>Обратная связь</h1>
                <h1>Наши контакты</h1>
            </div>
        </div>
        <div class="main-container">
            <div class="container-content container-help">
                <div class="rating-area">
                    <input type="radio" id="star-5" name="rating" value="5" onClick={(e) => {setStar(e.target.value)}}/>
                    <label for="star-5" title="Оценка «5»"></label>	
                    <input type="radio" id="star-4" name="rating" value="4" onClick={(e) => {setStar(e.target.value)}}/>
                    <label for="star-4" title="Оценка «4»"></label>    
                    <input type="radio" id="star-3" name="rating" value="3" onClick={(e) => {setStar(e.target.value)}}/>
                    <label for="star-3" title="Оценка «3»"></label>  
                    <input type="radio" id="star-2" name="rating" value="2" onClick={(e) => {setStar(e.target.value)}}/>
                    <label for="star-2" title="Оценка «2»"></label>    
                    <input type="radio" id="star-1" name="rating" value="1" onClick={(e) => {setStar(e.target.value)}}/>
                    <label for="star-1" title="Оценка «1»"></label>
                </div>
                <div class="in">
                    <form action="" class ="inputss" onSubmit={formik.handleSubmit}>
                        <textarea type="text" placeholder="Введите сообщение" class ="inn textarea" {...formik.getFieldProps('message')}>
                        </textarea>
                        <div class="but">
                            <button className="send" type={'submit'}>Отправить</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="container-content container-contacts">
                <div class="first">
                    <div class="pics">
                        <a target='_blank' className={'picsimg'}  href={'callto:+375291231212'} type={'tel'}>
                            <img src="/images/unnamed 1.png" alt=""/>
                        </a>
                        <a target='_blank' className={'picsimg'}  href={'callto:+375331231212'}>
                            <img src="/images/9109425029150 1.png" alt=""/>
                        </a>
                        <a target='_blank' className={'picsimg'}  href={'callto:+375421231212'}>
                            <img src="/images/Life-PNG 1.png" alt=""/>
                        </a>
                    </div>
                    <div class ="google">
                        <a target='_blank' className={'picsimg mapimg'} href={'https://www.google.com/maps/place/%D0%9A%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6+%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%B0+%D0%B8+%D0%BF%D1%80%D0%B0%D0%B2%D0%B0/@53.9179808,27.4253458,15z/data=!4m6!3m5!1s0x46dbce2d2dc47867:0xfb99f31aabb006f!8m2!3d53.9179808!4d27.4356468!16s%2Fg%2F1vd3tgp3'}>
                            <img title={'Показать на карте'} src="/images/maps_96in128dp 1.png" alt=""/>
                            <h6>Показать на карте</h6>
                        </a>
                    </div>
                </div>
                <div class="map">
                    <img src="/images/map 1.png" alt=""/>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
