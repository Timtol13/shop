import React, { useEffect, useState } from 'react'
import './Header.css'

export const Header = () => {
    const auth = sessionStorage.getItem('auth')
    const [blue, setBlue] = useState(false)
    const [black, setBlack] = useState(false)
    useEffect(() => {
        if(window.location.pathname === '/'){
            setBlue(true)
        }
        if(window.location.pathname === '/catalog'){
            setBlack(true)
        }
        if( auth ){} else{
            window.location.replace('/login')
        } 
    }, [])
    
  return (
    <header className="header">
        <div className="container">
            <div className="header-top">
                <a href="/" className={`${blue? 'el logo blue_color': 'el logo'}`}>Shop</a>
                <div className={`el d3 ${blue? 'blue_bgcolorinput': ''}`}>
                    <input type="text" placeholder="Поиск" onClick={() => {window.location.replace('/catalog')}} />
                    <img src="/images/poisk.png" alt="" className="poisk" width="25px" height="23px" />
                </div>
                {auth? <div className={'el'}></div> : 
                <div className={'el'}>
                    <a className={`el_link ${blue? 'blue_color': ''}`} href="/login">Войти</a> 
                    <a className={`el_link ${blue? 'blue_color': ''}`} href="/signup">Зарегистрироваться</a> 
                </div>
                }
            </div>
        </div>
        <nav className="menu">
            <ul className="menu__list">
                <li className={`menu__item`} ><a href="/catalog" className={`menu__link ${blue? ' blue_color': ''}`}>Каталог</a></li>
                <li className="menu__item"><a href="/ourProducts" className={`menu__link ${blue? 'blue_color': ''}`}>Наша продукция</a></li>
                <li className="menu__item"><a href="/contacts" className={`menu__link ${blue? 'blue_color': ''}`}>Контакты</a></li>
            </ul>
            <div className="img">
                <a href={auth? '/profile': '/login'} className={`media ${blue? 'blue_bgcolor': ''}`}>
                    <img src="/images/people.png" alt=""/>
                </a>
                <a href={'/trash'} className={`media ${blue? 'blue_bgcolor': ''}`}>
                    <img src="/images/corzina.png" width="32px" height="35px" alt=""/>
                </a>
            </div>
        </nav>
        <div className="lineblock"></div>
    </header>
  )
}
