import React from 'react'
import { Header } from '../../Header/Header'
import { Carousel } from 'react-responsive-carousel'
import './Home.css'

export const Home = () => {
  return (
    <div>
        <Header />
        <div >
            <Carousel
                axis={'horizontal'}
                infiniteLoop>
                    <div className={'carousel-element'}>
                        <img src={'/images/car_el.png'}/>
                        <h1>Наша продукция</h1>
                        <h3>Наша продукция</h3>
                    </div>
                    <div className={'carousel-element'}>
                        <img src={'/images/car_el.png'}/>
                        <h1>Наша продукция</h1>
                        <h3>Наша продукция</h3>
                    </div>
                    <div className={'carousel-element'}>
                        <img src={'/images/car_el.png'}/>
                        <h1>Наша продукция</h1>
                        <h3>Наша продукция</h3>
                    </div>
            </Carousel>
        </div>
    </div>
  )
}
