import React, { useEffect, useState } from 'react'
import './Catalog.css' 
import { Header } from '../Header/Header'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { Footer } from '../Footer/Footer'
import { OrderAPI, GoodApi } from '../api/api'

export const Catalog = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const productss = [
        {'image': '/images/Rectangle 99.png', 'title': 'Кровать с шипами', 'price': '1666 р.'},
        {'image': '/images/Rectangle 102.png', 'title': 'Бесящая кровать', 'price': '1600 р.'},
        {'image': '/images/Rectangle 91.png', 'title': 'Кресло “Зыбучий песок”', 'price': '850 р.'},
        {'image': '/images/Rectangle 92.png', 'title': 'Компьютерный стол', 'price': '1250 р.'},
        {'image': '/images/Rectangle 95.png', 'title': 'Диван “Зигзаг”', 'price': '2560 р.'},
        {'image': '/images/Rectangle 101.png', 'title': 'Диван “Гном”', 'price': '1800 р.'},
        {'image': '/images/Rectangle 100.png', 'title': 'Набор для интерьера', 'price': '2340 р.'},
        {'image': '/images/Rectangle 97.png', 'title': 'Охотничий столик', 'price': '450 р.'},
        {'image': '/images/Rectangle 98.png', 'title': 'Диван “Фатальная ошибка”', 'price': '2150 р.'},
    ]
    const [products, setProducts] = useState([])
    const [orderArray, setOrderArray] = useState([{}])
    
    useEffect(() => {
        setOrderArray(JSON.parse(sessionStorage.getItem('item')))
        GoodApi.getGoods().then(e => {setProducts(e.data)})
    }, [])
    const handlePay = (titleP, priceP, imageP) => {
        setOrderArray(n => [...n, {'title': titleP, 'price': priceP, 'image': imageP}])
        sessionStorage.setItem('item', JSON.stringify(orderArray))
    }
    const [search, setSearch] = useState('')
    const handleSearch = () => {
        let arr
        arr = []
        products?.forEach(el => {
            if(search !== ''){
                if(el.title === search){
                    arr.push(el)
                }
            } else {
                arr.push(el)
            }
        })
            return (
                <div className="row">{
                            arr.map(el => {
                            return (
                                <div className="col-lg-4">
                                    <div className="single-destinations">
                                        <div className="thumb">
                                            <img src={el.image} alt=""/>
                                        </div>
                                        <div className="details">
                                            <div className="text">
                                                <h4>{el.title}</h4>
                                                <p>{el.price}</p>
                                            </div>
                                                    <button onClick={() => {
                                                        handleOpen()
                                                        setTitle(el.title)
                                                        setPrice(el.price)
                                                        setDescription(el.description)
                                                        setImage(el.image)
                                                        }
                                                        }><img src="/images/trash.png" alt=""/></button>
                                                </div>
                                            <div className="ic">
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
    }
  return (
    <div>
        {/* <button onClick={() => {
            productss.map(el => {
                    OrderAPI.fill(el)
                }
            )
        }}>qwe</button> */}
        <header className="header">
            <div className="container">
                <div className="header-top">
                    <a href="/" className="el logo black_color">Shop</a>
                    <div className="el d3 black_bgcolorinput">
                        <input type="text" placeholder="Поиск" onChange={(e) => {setSearch(e.target.value)}} />
                        <img src="/images/poisk.png" alt="" className="poisk" width="25px" height="23px" />
                    </div>
                    <div className={'el'}>
                    </div>
                </div>
            </div>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item"><a href="/catalog" className="menu__link black_color">Каталог</a></li>
                    <li className="menu__item"><a href="/ourProducts" className="menu__link black_color">Наша продукция</a></li>
                    <li className="menu__item"><a href="/contacts" className="menu__link black_color">Контакты</a></li>
                </ul>
                <div className="img">
                    <a href={'/profile'} className="media black_bgcolor">
                        <img src="/images/people.png" alt=""/>
                    </a>
                    <a href={'/trash'} onClick={() => {handlePay(null, null, null)}} className="media black_bgcolor">
                        <img src="/images/corzina.png" width="32px"height="35px" alt=""/>
                    </a>
                </div>
            </nav>
            <div className="line"></div>
        </header>
        {search? '': 
        <section>
            <div className="main_ph">
                <h1>Каталог</h1>
                <img src="/images/new.png" alt=""/>
            </div>
        </section>
        }
        
    <section className ="rows">
            {handleSearch()}
    </section>
    <Footer />
    <Modal
        open={open}
        onClose={handleClose}>
        <Box>
            <div className={'modal'}>
                <img src={image}/>
                <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <h3>{price}</h3>
                    <button onClick={() => {handlePay(title, price, image); handleClose()}}>Купить</button>
                </div>
            </div>
        </Box>
    </Modal>
    </div>
  )
}
