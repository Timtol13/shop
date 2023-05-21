import React, { useState } from 'react'
import './Catalog.css' 
import { Header } from '../Header/Header'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

export const Catalog = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
  return (
    <div>
        <Header />
        <section>
        <div className="main_ph">
            <h1>Каталог</h1>
            <img src="/images/new.png" alt=""/>
        </div>
    </section>
    <section className ="rows">
        <div className="row">
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 99.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Кровать с шипами</h4>
                            <p>1666 р.</p>
                        </div>
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Кровать с шипами')
                                    setPrice('1666 р.')
                                    setImage('/images/Rectangle 99.png')
                                    }
                                    }><img src="/images/trash.png" alt=""/></button>
                            </div>
                        <div className="ic">
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 102.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Бесящая кровать</h4>
                            <p>1600 р.</p>
                            <div className="ic">
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Бесящая кровать')
                                    setPrice('1600 р.')
                                    setImage('/images/Rectangle 102.png')
                                    }}><img src="/images/trash.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 91.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Кресло “Зыбучий песок”</h4>
                            <p>850 р.</p>
                            <div className="ic">
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Кресло “Зыбучий песок”')
                                    setPrice('850 р.')
                                    setImage('/images/Rectangle 91.png')
                                    }}><img src="/images/trash.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 92.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Компьютерный стол</h4>
                            <p>1250 р.</p>
                            <div className="ic">
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Кровать с шипами')
                                    setPrice('1666 р.')
                                    setImage('/images/Rectangle 92.png')
                                    }}><img src="/images/trash.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 95.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Диван “Зигзаг”</h4>
                            <p>2560 р.</p>
                            <div className="ic">
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Кровать с шипами')
                                    setPrice('1666 р.')
                                    setImage('/images/Rectangle 95.png')
                                    }}><img src="/images/trash.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 101.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Диван “Гном”</h4>
                            <p>1800 р.</p>
                            <div className="ic">
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Кровать с шипами')
                                    setPrice('1666 р.')
                                    setImage('/images/Rectangle 101.png')
                                    }}><img src="/images/trash.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 100.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Набор для интерьера</h4>
                            <p>2340 р.</p>
                            <div className="ic">
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Кровать с шипами')
                                    setPrice('1666 р.')
                                    setImage('/images/Rectangle 100.png')
                                    }}><img src="/images/trash.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 97.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Охотничий столик</h4>
                            <p>450 р.</p>
                            <div className="ic">
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Кровать с шипами')
                                    setPrice('1666 р.')
                                    setImage('/images/Rectangle 97.png')
                                    }}><img src="/images/trash.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="single-destinations">
                    <div className="thumb">
                        <img src="/images/Rectangle 98.png" alt=""/>
                    </div>
                    <div className="details">
                        <div className="text">
                            <h4>Диван “Фатальная ошибка”</h4>
                            <p>2150 р.</p>
                            <div className="ic">
                                <button onClick={() => {
                                    handleOpen()
                                    setTitle('Кровать с шипами')
                                    setPrice('1666 р.')
                                    setImage('/images/Rectangle 98.png')
                                    }}><img src="/images/trash.png" alt=""/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer className = "below">
        <div className="paragraphs">
            <div className="block">
                <p>1</p>
                <p>2</p>
            </div>
            <div className="block1">
                <p>1</p>
                <p>2</p>
            </div>
        </div>
    </footer>
    <Modal
        open={open}
        onClose={handleClose}>
        <Box>
            <div className={'modal'}>
                <img src={image}/>
                <div>
                    <h1>{title}</h1>
                    <h3>{price}</h3>
                    <button>Купить</button>
                </div>
            </div>
        </Box>
    </Modal>
    </div>
  )
}
