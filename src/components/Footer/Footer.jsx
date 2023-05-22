import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footter'>
        <div className={'ftblock ft_block__left'}>
            <h3>Instagram: @bestofthebest</h3>
            <h3>Email: bestofthebest@gmail.com</h3>            
        </div>
        <div className={'ftblock ft_block__right'}>
            <h3>Наш адрес: г.Минск, ул.Колесникова 3</h3>
            <h3>Время работы: 10:00-22:00</h3>
        </div>
    </div>
  )
}
