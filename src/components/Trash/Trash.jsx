import React, { useEffect, useState } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import './Trash.css'

export const Trash = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        setOrders(JSON.parse(sessionStorage.getItem('item')))
    }, [])
    const handleClear = () => {
        sessionStorage.setItem('item', JSON.stringify([{}]))
    }
    const handleRemove = (index) =>{
        orders.pop(index)
        sessionStorage.setItem('item', JSON.stringify(orders))
    }
  return (
    <div>
        <Header />
        <button className={'elementRemove'} onClick={handleClear}>Очистить корзину</button>
        <button className={'elementBuy'} onClick={() => {window.location.replace('/order')}}>Очистить корзину</button>
        <div className={'ordersTrash'}>
            {orders?.map((el, index) => {
                return (
                <div className={'productTrash'}>
                    <img src={el.image} />
                    <h1>{el.title}</h1>
                    <h3>{el.price}</h3>
                    <button className={'elementRemove'} onClick={() => {handleRemove(index)}}>Удалить</button>
                </div>)
            })}
        </div>
        <Footer />
    </div>
  )
}
