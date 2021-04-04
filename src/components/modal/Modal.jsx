import s from './Modal.module.scss';
import {Button, Card, Col, Mentions, Space} from 'antd';
import 'antd/dist/antd.css'
import Row from "antd/es/descriptions/Row";
import CreateCard from "./CreateCard/CreateCard";

const Modal = () =>{
    return(
        <div className={s.modal}>
            <div className={s.topMenu}>
                <div className={s.topMenuWrap}>
                    <Space>
                        <Button type="primary" className={s.buttonValue}>
                            <svg width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2H22" stroke="white" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </Button>
                        <Button type="primary" className={s.buttonValue}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4728 0.527207C20.1757 1.23015 20.1757 2.36985 19.4728 3.07279L12.546 9.99999L19.4728 16.9272C20.1172 17.5716 20.1709 18.5829 19.6339 19.2885L19.4728 19.4728C18.7698 20.1757 17.6302 20.1757 16.9272 19.4728L9.99999 12.546L3.07279 19.4728C2.36985 20.1757 1.23015 20.1757 0.527207 19.4728C-0.175736 18.7698 -0.175736 17.6302 0.527207 16.9272L7.45399 9.99999L0.527207 3.07279C-0.117157 2.42842 -0.170854 1.41707 0.366116 0.711536L0.527207 0.527207C1.23015 -0.175736 2.36985 -0.175736 3.07279 0.527207L9.99999 7.45399L16.9272 0.527207C17.6302 -0.175736 18.7698 -0.175736 19.4728 0.527207Z" fill="white"/>
                            </svg>
                        </Button>
                    </Space>
                </div>
            </div>

            <div className={s.mainContent}>

                <div className={s.NumbProduct}>
                    <p>Номер товара:</p>
                    <span>2312323</span>
                </div>


                <div className={s.container}>
                    <div className={s.topMenuContainer}>
                        <h1>Наименование товара</h1>
                        <Space>
                            <Button className={s.buttonTop}>
                                    dsfsdf
                            </Button>
                            <Button className={s.buttonTop}>
                                dfsdfsd
                            </Button>
                        </Space>
                    </div>

                   <div className={s.wraperCards}>
                       <div className={s.avaCard + ' ' + s.card}>
                           <p>Фото</p>
                       </div>

                       <CreateCard width={'640px'} header={'Основная информация'}>
                           <div className={s.category}>
                               <p>Бренд:</p>
                               <Mentions placeholder={'Бренд111# '} className={s.Mentions} readOnly>
                               </Mentions>
                           </div>
                           <div className={s.category}>
                               <p>Артикул:</p>
                               <Mentions placeholder={'Бренд111# '} className={s.Mentions} readOnly>

                               </Mentions>
                           </div>
                           <div className={s.category}>
                               <p>Штрих - код производителя:</p>
                               <Mentions placeholder={'Бренд111# '} className={s.Mentions} readOnly>

                               </Mentions>
                           </div>
                           <div className={s.category}>
                               <p>Описание:</p>
                               <Mentions placeholder={'Бренд111# '} className={s.Mentions} readOnly>

                               </Mentions>
                           </div>
                           <div className={s.category}>
                               <p>Возвратность:</p>
                               <Mentions placeholder={'Бренд111# '} className={s.Mentions} readOnly>

                               </Mentions>
                           </div>
                           <div className={s.category}>
                               <p>Дата последнего изменения:</p>
                               <Mentions placeholder={'Бренд111# '} className={s.Mentions} readOnly>

                               </Mentions>
                           </div>
                       </CreateCard>
                   </div>


                    <div className={s.wraperCards}>
                        <CreateCard width={'640px'} header={'Классификация'}>
                            <div></div>
                        </CreateCard>

                        <CreateCard width={'300px'} header={'История'}>
                            <div>

                            </div>
                            <div>

                            </div>
                        </CreateCard>

                        <CreateCard width={'640px'} header={'Поставщики'}>
                            <div></div>
                        </CreateCard>

                        <CreateCard width={'300px'} header={'Склады'}>
                            <div></div>
                        </CreateCard>

                    </div>

                </div>
            </div>
        </div>
    )
}



export default Modal;