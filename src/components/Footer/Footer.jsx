import React,{useEffect, useState} from 'react'
import './Footer.css'

export const Footer = () => {
  const [blue, setBlue] = useState(false)
    useEffect(() => {
        if(window.location.pathname === '/'){
            setBlue(true)
        }
    }, [])
  return (
    <div className={blue? 'footter blue_bgcolor': 'footter'}>
        <div className={'ftblock ft_block__left'}>
            <h3 className={blue? 'blue_color': ''}>Instagram: @bestofthebest</h3>
            <h3 className={blue? 'blue_color': ''}>Email: bestofthebest@gmail.com</h3>            
        </div>
        <div className={'ftblock ft_block__right'}>
            <h3 className={blue? 'blue_color': ''}>Наш адрес: г.Минск, ул.Колесникова 3</h3>
            <h3 className={blue? 'blue_color': ''}>Время работы: 10:00-22:00</h3>
        </div>
    </div>
  )
}
