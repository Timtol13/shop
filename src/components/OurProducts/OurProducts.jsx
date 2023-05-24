import React from 'react'
import { Header } from '../Header/Header'
import Flickity from 'react-flickity-component'
import './OurProducts.css'
import { Footer } from '../Footer/Footer'

export const OurProducts = () => {

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
                        <button className="like"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                    </div>
                </div>
                <div className="opis opis_2">
                    <img src="/images/table black.jpg" alt="" className="kr"width="250px"/>
                    <p className="nazvanie">Фуршетный столик</p>
                    <p className="opisanie">Мебель изготовленная из высококачественного массива дерева для спальной комнаты, подходит для любого вида дизайна</p>
                    <div className="last last_2">
                        <button className="like"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                    </div>
                </div>
                <div className="opis opis_3">
                    <img src="/images/luchshie-divany 1.jpg" alt="" className="kr"width="400px"/>
                    <p className="nazvanie">Диван “Купель”</p>
                    <p className="opisanie">Мягкий, хорошо пошитый диван, с качественной ткани, созданый для комфортного  отдыха</p>
                    <div className="last last_3">
                        <button className="like"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                    </div>
                </div>
                <div className="cont_money">
                    <div className="title">
                        Спальная 2<span className="s">1890 р.</span>
                    </div>
                    <div className="title">
                        Фуршетный столик<span className="s">90 р.</span>
                    </div>
                    <div className="title">
                        Диван “Купель”<span className="s">890 р.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="t">
        <h1>Также купить</h1>
    </div>
    <div className="wrapper">
        <Flickity className="slider">
            <div className="slider__item filter">
                <img className={'image_source'} src="/images/qinghong-shen-2Kk81Yj8TM8-unsplash 1.jpg" alt=""/>
                <h8 className="name">Кресло "Самурай"</h8><span className="rub">290р.</span>
                <div className="md">
                    <button className="d"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                </div>
            </div>
            <div className="slider__item">
                <img className={'image_source'} src="/images/r-architecture-TRCJ-87Yoh0-unsplash 1.jpg" alt=""/>
                <h8 className="name_2">Кухня 1</h8><span className="rub">2190 р.</span>
                <div className="md_2">
                    <button className="d d_2"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                </div>
            </div>
            <div className="slider__item filter">
                <img className={'image_source'} src="/images/nathan-oakley--peWKMDCyw4-unsplash.jpg" alt=""/>
                <h8 className="name_2">Дубовый комод</h8><span className="rub">290 р.</span>
                <div className="md_2">
                    <button className="d d_2"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                </div>
            </div>
            <div className="slider__item">
                <img className={'image_source'} src="/images/dvuspalnaya-krovat 1.jpg" alt=""/>
                <h8 className="name_2">Кровать. Хорошая</h8><span className="rub">780 р.</span>
                <div className="md_2">
                    <button className="d d_2"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                </div>
            </div>
            <div className="slider__item filter">
                <img className={'image_source'} src="/images/Rectangle 100.jpg" alt=""/>
                <h8 className="name_2">Набор для интерьера</h8><span className="rub">2340 р.</span>
                <div className="md_2">
                    <button className="d d_2"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                </div>
            </div>
            <div className="slider__item">
                <img className={'image_source'} src="/images/Rectangle 91.jpg" alt=""/>
                <h8 className="name_2">Диван “Зыбучий песок”</h8><span className="rub">850 р.</span>
                <div className="md_2">
                    <button className="d d_2"><a href="/catalog"><img src="/images/corzina.png" alt=""/></a></button>
                </div>
            </div>
        </Flickity>
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
    <Footer />
    </div>
  )
}
