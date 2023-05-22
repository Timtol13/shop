import React from 'react'
import './Home.css'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

export const Home = () => {
  return (
    <div>
        <Header />
        <section className={'home'}>
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
                    <h1>Продукция нашей компании</h1>
                    <p>В нашем ассортименте вы сможете подобрать любую продукцию на ваш вкус, с любыми интересующими вас параметрами и ценообразованием. В нашей коллекции есть своя собственная продукция,изготовленная из высококачественных материалов, не уступающая импортным аналогам.</p>
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
        <div class="h">
            <h1>Специальные предложения</h1>
                <div className="container_2">
                    <div className="tovari tovariMain">
                        <div className="opis opis_1">
                            <img src="/images/krovat.jpg" alt="" className="kr" width="350px"/>
                            <p className="nazvanie">Спальня 2</p>
                            <p className="opisanie">Качественная мебель из дерева, хорошая обработка, отделка, состояние мебели в вашу комнату</p>
                        </div>
                        <div className="opis opis_2">
                            <img src="/images/table black.jpg" alt="" className="kr"width="250px"/>
                            <p className="nazvanie">Фуршетный столик</p>
                            <p className="opisanie">Мебель изготовленная из высококачественного массива дерева для спальной комнаты, подходит для любого вида дизайна</p>
                        </div>
                        <div className="opis opis_3">
                            <img src="/images/luchshie-divany 1.jpg" alt="" className="kr"width="400px"/>
                            <p className="nazvanie">Диван “Купель”</p>
                            <p className="opisanie">Мягкий, хорошо пошитый диван, с качественной ткани, созданый для комфортного  отдыха</p>
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
                    <a className={'link'} href={'/ourProducts'}>Показать все товары</a>
                </div>
        </div>
    </section>
    <Footer />
    </div>
  )
}
