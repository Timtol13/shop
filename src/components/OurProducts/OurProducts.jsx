import React, {useState, useEffect} from 'react'
import { Header } from '../Header/Header'
import './OurProducts.css'
import { Box, Modal } from '@mui/material'

export const OurProducts = () => {
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
    <h1 className="pr">Наша продукция</h1>
    <section className="product">
        <div className="container_2">
            <div className="tovari">
                <div className="opis opis_1">
                    <img src="/images/krovat.jpg" alt="" className="kr" width="350px"/>
                    <p className="nazvanie">Спальня 2</p>
                    <p className="opisanie">Качественная мебель из дерева, хорошая обработка, отделка, состояние мебели в вашу комнату</p>
                    <div className="last last_1">
                        <button className="like" onClick={() => {
                            handleOpen()
                            setTitle("Спальня 2")
                            setPrice("1890 р.")
                            setImage('/images/krovat.jpg')
                        }}><a href={'/'}><img src="/images/corzina.png" alt=""/></a></button>
                    </div>
                </div>
                <div className="opis opis_2">
                    <img src="/images/table black.jpg" alt="" className="kr"width="250px"/>
                    <p className="nazvanie">Фуршетный столик</p>
                    <p className="opisanie">Мебель изготовленная из высококачественного массива дерева для спальной комнаты, подходит для любого вида дизайна</p>
                    <div className="last last_2">
                        <button className="like" onClick={() => {
                            handleOpen()
                            setTitle("Фуршетный столик")
                            setPrice("90 р.")
                            setImage('/images/table black..jpg')
                        }}><a href={'/'}><img src="/images/corzina.png" alt=""/></a></button>
                    </div>
                </div>
                <div className="opis opis_3">
                    <img src="/images/luchshie-divany 1.jpg" alt="" className="kr"width="400px"/>
                    <p className="nazvanie">Диван “Купель”</p>
                    <p className="opisanie">Мягкий, хорошо пошитый диван, с качественной ткани, созданый для комфортного  отдыха</p>
                    <div className="last last_3">
                        <button className="like" onClick={() => {
                            handleOpen()
                            setTitle("Диван “Купель”")
                            setPrice("890 р.")
                            setImage('/images/luchshie-divany 1.jpg')
                        }}><a href={'/'}><img src="/images/corzina.png" alt=""/></a></button>
                    </div>
                </div>
                <div className="cont_money">
                    <div className="title">
                        <span className={'spanClass'}><h5 className="s">Спальная 2</h5></span><span className={'spanClass'}><h5 className="s">1890 р.</h5></span>
                    </div>
                    <div className="title">
                        <span className={'spanClass'}><h5 className="s">Фуршетный столик</h5></span><span className={'spanClass'}><h5 className="s">90 р.</h5></span>
                    </div>
                    <div className="title">
                        <span className={'spanClass'}><h5 className="s">Диван “Купель”</h5></span><span className={'spanClass'}><h5 className="s">890 р.</h5></span>
                    </div>
                    <div className={'title'}>
                        <a href={'/catalog'} className={'titleLink'}>Показать больше</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="t">
        <h1>Также купить</h1>
    </div>
    <div className="wrapper">
        <div className={'slider'}>
            <div className="slider__item filter">
                <img className={'image_source'} src="/images/qinghong-shen-2Kk81Yj8TM8-unsplash 1.jpg" alt=""/>
                <h8 className="name">Кресло "Самурай"</h8><span className="rub">290р.</span>
                <div className="md">
                    <button className="d" onClick={() => {
                            handleOpen()
                            setTitle('Кресло "Самурай"')
                            setPrice("290 р.")
                            setImage('/images/qinghong-shen-2Kk81Yj8TM8-unsplash 1.jpg')
                        }}><img src="/images/corzina.png" alt=""/></button>
                </div>
            </div>
            <div className="slider__item">
                <img className={'image_source'} src="/images/r-architecture-TRCJ-87Yoh0-unsplash 1.jpg" alt=""/>
                <h8 className="name_2">Кухня 1</h8><span className="rub">2190 р.</span>
                <div className="md_2">
                    <button className="d d_2" onClick={() => {
                            handleOpen()
                            setTitle('Кухня 1')
                            setPrice("2190 р.")
                            setImage('/images/r-architecture-TRCJ-87Yoh0-unsplash 1.jpg')
                        }}><img src="/images/corzina.png" alt=""/></button>
                </div>
            </div>
            <div className="slider__item filter">
                <img className={'image_source'} src="/images/nathan-oakley--peWKMDCyw4-unsplash.jpg" alt=""/>
                <h8 className="name_2">Дубовый комод</h8><span className="rub">290 р.</span>
                <div className="md_2">
                    <button className="d d_2" onClick={() => {
                            handleOpen()
                            setTitle('Дубовый комод')
                            setPrice("290 р.")
                            setImage('/images/nathan-oakley--peWKMDCyw4-unsplash.jpg')
                        }}><img src="/images/corzina.png" alt=""/></button>
                </div>
            </div>
            <div className="slider__item">
                <img className={'image_source'} src="/images/dvuspalnaya-krovat 1.jpg" alt=""/>
                <h8 className="name_2">Кровать. Хорошая</h8><span className="rub">780 р.</span>
                <div className="md_2">
                    <button className="d d_2" onClick={() => {
                            handleOpen()
                            setTitle('Кровать. Хорошая')
                            setPrice("780 р.")
                            setImage('/images/dvuspalnaya-krovat 1.jpg')
                        }}><img src="/images/corzina.png" alt=""/></button>
                </div>
            </div>
            <div className="slider__item filter">
                <img className={'image_source'} src="/images/Rectangle 100.jpg" alt=""/>
                <h8 className="name_2">Набор для интерьера</h8><span className="rub">2340 р.</span>
                <div className="md_2">
                    <button className="d d_2" onClick={() => {
                            handleOpen()
                            setTitle('Набор для интерьера')
                            setPrice("2340 р.")
                            setImage('/images/Rectangle 100.jpg')
                        }}><img src="/images/corzina.png" alt=""/></button>
                </div>
            </div>
            <div className="slider__item">
                <img className={'image_source'} src="/images/Rectangle 91.jpg" alt=""/>
                <h8 className="name_2">Диван “Зыбучий песок”</h8><span className="rub">850 р.</span>
                <div className="md_2">
                    <button className="d d_2" onClick={() => {
                            handleOpen()
                            setTitle('Диван “Зыбучий песок”')
                            setPrice("850 р.")
                            setImage('/images/Rectangle 91.jpg')
                        }}><img src="/images/corzina.png" alt=""/></button>
                </div>
            </div>
        </div>
    </div>
    <section className="footer">
        <div className={'footer-content'}>
            <div className="last_list">
                <div className="img-prev">
                    <img src="/images/photo 2.jpg" alt="" className="back" width="250px"/>
                </div>
                <img src="/images/juan-burgos-Dp2xzrdXrNs-unsplash 1.png" alt="" className="prevc" width="300px"/>
            </div>
            <div className="catalog">
                <h7 className="company">Каталог компании</h7>
                <p className="descr">
                    В нашем каталоге вы сможете подобрать любую продукцию на ваш вкус, с любыми интересующими вас параметрами и ценообразованием. В нашей коллекции вы сможете найти кровати, диваны, комоды, столы, кресла, комплекты гостинной и спальной мебели, изготовленные из высококачественных материалов.
                </p>
                <button class="p-catal">
                    <div class="naz">
                        <a href="C:xampp/htdocs/START/catalog/catalog.php">Перейти в каталог</a>
                    </div>
                </button>
            </div>
        </div>
    </section>
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
