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
        window.location.reload()
    }
    const handleRemove = (index) =>{
        orders.splice(index, 1)
        sessionStorage.setItem('item', JSON.stringify(orders))
        window.location.reload()
    }
  return (
    <div>
        <Header />
        <div className={'trashBlock'}>
            <button className={'elementRemove'} onClick={handleClear}>Очистить корзину</button>
            <button className={'elementBuy'} onClick={() => {window.location.replace('/order')}}>Купить</button>
            <div className={'ordersTrash'}>
                {orders?.map((el, index) => {
                    if(el.title){
                        return (
                        <div className={'productTrash'}>
                            <img src={el.image} />
                            <h1>{el.title}</h1>
                            <h3>{el.price}</h3>
                            <button className={'elementRemove'} onClick={() => {handleRemove(index)}}>Удалить</button>
                        </div>
                        )
                    }
                })}
            </div>
        </div>
        <Footer />
    </div>
  )
}
