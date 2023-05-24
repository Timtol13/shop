import React, {useState, useEffect} from 'react'
import './Home.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { Box, Modal } from '@mui/material'

export const Home = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [orderArray, setOrderArray] = useState([{}])
    
    useEffect(() => {
        setOrderArray(JSON.parse(sessionStorage.getItem('item')))
    }, [])
    const handlePay = (titleP, priceP, imageP) => {
        setOrderArray(n => [...n, {'title': titleP, 'price': priceP, 'image': imageP}])
        sessionStorage.setItem('item', JSON.stringify(orderArray))
    }
  return (
    <div>
        <Header />
        <section className={'home'}>
        <div className={'infoHomeBlock'}>
            <div class="text">
            <div class="hea">
                    <h1>Официальный интернет-магазин мебели в Минске</h1>
                    <div class="par">
                        <p>Мы являемся одними из самых надежных и проверенных компаний, в настоящий момент являемся лидерами среди конкурентов в Республике Беларусь. Мы гарантируем высокий уровень качества, который успешно сохраняем на протяжении многих лет.</p>
                    </div>
                </div>
            </div>
            <div class="info">
                <div class="pho">
                    <img src="/images/pho.png" alt=""/>
                    <div class="hea1">
                        <h1 className={'h1InSecPar'}>Продукция нашей компании</h1>
                        <p className={'pInSecPar'}>В нашем ассортименте вы сможете подобрать любую продукцию на ваш вкус, с любыми интересующими вас параметрами и ценообразованием. В нашей коллекции есть своя собственная продукция,изготовленная из высококачественных материалов, не уступающая импортным аналогам.</p>
                    </div>
                </div>
            </div>
            <div class="h">
                <h1>Главные аспекты</h1>
            </div>
            <div class="data">
                <div class="c">
                    <ul>
                        <li>Изготавливаем только из высококачественных материалов</li>
                        <li>В нашей компании насчитывается более 1000 высококвалифицированных сотрудников</li>
                        <li>Разрабатываем мебель любой сложности</li>
                    </ul>
                </div>
                <div class="c">
                    <ul>
                        <li>У нас очень добрый и отзывчивый персонал</li>
                        <li>Мы работаем для вас 24/7</li>
                        <li>Разрабатываем для вас мебель по индивидуальному заказу</li>
                        <li>Ценим каждую минуту наших покупателей</li>
                        <li>Гарантия качества</li>
                    </ul>
            </div>
            </div>
        </div>
        <div class="h">
            <h1>Специальные предложения</h1>
                <div className="containerHomeFoot">
                    <div className="goodsHome">
                        <div className="opis">
                            <img src="/images/krovat.jpg" alt="" className="kr" width="350px"/>
                            <p className="nazvanie">Спальня 2</p>
                            <p className="opisanie">790 р.</p>
                            <div className="last last_1">
                                <button className="like" onClick={() => {
                                                                handleOpen()
                                                                setTitle("Спальня 2")
                                                                setPrice("790 р.")
                                                                setImage('/images/krovat.jpg')
                                                            }
                                                        }><a><img src="/images/corzina.png" alt=""/></a></button>
                            </div>
                        </div>
                        <div className="opis">
                            <img src="/images/table black.jpg" alt="" className="kr"width="250px"/>
                            <p className="nazvanie">Фуршетный столик</p>
                            <p className="opisanie">560 р.</p>
                            <div className="last last_1">
                                <button className="like" onClick={() => {
                                                                handleOpen()
                                                                setTitle("Фуршетный столик")
                                                                setPrice("560 р.")
                                                                setImage('/images/table black.jpg')
                                                            }
                                                        }><a><img src="/images/corzina.png" alt=""/></a></button>
                            </div>
                        </div>
                        <div className="opis">
                            <img src="/images/luchshie-divany 1.jpg" alt="" className="kr"width="400px"/>
                            <p className="nazvanie">Диван “Купель”</p>
                            <p className="opisanie">290 р.</p>
                            <div className="last last_1">
                                <button className="like" onClick={() => {
                                                                handleOpen()
                                                                setTitle("Диван “Купель”")
                                                                setPrice("290 р.")
                                                                setImage('/images/luchshie-divany 1.jpg')
                                                            }
                                                        }><a><img src="/images/corzina.png" alt=""/></a></button>
                            </div>
                        </div>
                    </div>
                        <div className={'lineblock footLine'}></div>
                </div>
        </div>
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
                    <h3>{price}</h3>
                    <button onClick={() => {handlePay(title, price, image)}}>Купить</button>
                </div>
            </div>
        </Box>
    </Modal>
    </div>
  )
}
