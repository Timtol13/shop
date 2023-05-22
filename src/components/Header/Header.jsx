import React from 'react'
import './Header.css'

export const Header = () => {
    const auth = sessionStorage.getItem('auth')
    if( auth ){} else{
        window.location.replace('/login')
    } 
  return (
    <header className="header">
        <div className="container">
            <div className="header-top">
                <a href="/" className="el logo">Shop</a>
                <div className="el d3">
                    <input type="text" placeholder="Поиск" />
                    <img src="/images/poisk.png" alt="" className="poisk" width="25px" height="23px" />
                </div>
                <div className={'el'}>
                    <a className={'el_link'} href="/login">Войти</a> 
                    <a className={'el_link'} href="/signup">Зарегистрироваться</a> 
                </div>
            </div>
        </div>
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><a href="/catalog" className="menu__link">Каталог</a></li>
                <li className="menu__item"><a href="/ourProducts" className="menu__link">Наша продукция</a></li>
                <li className="menu__item"><a href="/contacts" className="menu__link">Контакты</a></li>
            </ul>
            <div className="img">
                <a href={'/profile'} className="media">
                    <img src="/images/people.png" alt=""/>
                </a>
                <a href={'/trash'} className="media">
                    <img src="/images/corzina.png" width="32px"height="35px" alt=""/>
                </a>
            </div>
        </nav>
        <div className="line"></div>
    </header>
  )
}
