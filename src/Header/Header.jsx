import React from 'react'
import './Header.css'

export const Header = () => {
    const auth = sessionStorage.getItem('auth')
    if( auth ){} else{
        window.location.replace('/login')
    } 
  return (
    <>
        <ul className={'header'}>
            <li className={'header_element'}>Главная</li>
            {auth? 
                <>
                    <li className={'header_element'}>Профиль</li>
                    <li className={'header_element el_image'}>
                        <img src={'/images/trash.png'} alt={'Oops'}/>
                    </li>
                </>: 
                <>
                    <li>
                        <a href={'/login'} className={'header_element'}>Войти</a>
                    </li>
                    <li>
                        <a href={'/signup'} className={'header_element'}>Зарегестрироваться</a>
                    </li>
                </>
            
            }
            
        </ul>
    </>
  )
}
