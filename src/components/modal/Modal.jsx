import s from './Modal.module.scss';
import {Button, Card, Col, Mentions, Select, Space, Table} from 'antd';
import 'antd/dist/antd.css'
import Row from "antd/es/descriptions/Row";
import CreateCard from "./CreateCard/CreateCard";
import {Option} from "antd/es/mentions";

const dataSource = [
    {
        key: '1',
        number: '1',
        name: 'Поставщик_Москва_1',
        Address: 'Город_Москва_Улица_1',
        dataUpdate: '04/03/2021',
    },
    {
        key: '2',
        number: '2',
        name: 'Поставщик_Москва_1',
        Address: 'Город_Москва_Улица_1',
        dataUpdate: '04/03/2021',
    },
    {
        key: '3',
        number: '3',
        name: 'Поставщик_Москва_1',
        Address: 'Город_Москва_Улица_1',
        dataUpdate: '04/03/2021',
    },
    {
        key: '4',
        number: '4',
        name: 'Поставщик_Москва_1',
        Address: 'Город_Москва_Улица_1',
        dataUpdate: '04/03/2021',
    },
];

const columns = [
    {
        title: 'Номер',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Наименование',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Адрес',
        dataIndex: 'Address',
        key: 'Address',
    },
    {
        title: 'Дата обновления',
        dataIndex: 'dataUpdate',
        key: 'dataUpdate',
    },
    {
        title: 'Карточка',
        dataIndex: 'card',
        key: 'card',
        render: () => (
            <span>
            -
          </span>
        ),
    },
];

const Modal = () => {
    return (
        <div className={s.modal}>
            <div className={s.topMenu}>
                <div className={s.topMenuWrap}>
                    <Space>
                        <Button type="primary" className={s.buttonValue}>
                            <svg width="24" height="4" viewBox="0 0 24 4" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 2H22" stroke="white" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </Button>
                        <Button type="primary" className={s.buttonValue}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.4728 0.527207C20.1757 1.23015 20.1757 2.36985 19.4728 3.07279L12.546 9.99999L19.4728 16.9272C20.1172 17.5716 20.1709 18.5829 19.6339 19.2885L19.4728 19.4728C18.7698 20.1757 17.6302 20.1757 16.9272 19.4728L9.99999 12.546L3.07279 19.4728C2.36985 20.1757 1.23015 20.1757 0.527207 19.4728C-0.175736 18.7698 -0.175736 17.6302 0.527207 16.9272L7.45399 9.99999L0.527207 3.07279C-0.117157 2.42842 -0.170854 1.41707 0.366116 0.711536L0.527207 0.527207C1.23015 -0.175736 2.36985 -0.175736 3.07279 0.527207L9.99999 7.45399L16.9272 0.527207C17.6302 -0.175736 18.7698 -0.175736 19.4728 0.527207Z"
                                    fill="white"/>
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
                            <div className={s.classification}>
                                <div>
                                    <div className={s.category}>
                                        <p>Комплектация</p>
                                        <Select defaultValue="Комплект" className={s.Select} style={{width: 140}}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="disabled" disabled>
                                                Disabled
                                            </Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </div>

                                    <div className={s.category}>
                                        <p>Сезонность</p>
                                        <Select defaultValue="Комплект" className={s.Select} style={{width: 140}}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="disabled" disabled>
                                                Disabled
                                            </Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </div>

                                    <div className={s.category}>
                                        <p>Налогооблажение</p>
                                        <Select defaultValue="Комплект" className={s.Select} style={{width: 140}}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="disabled" disabled>
                                                Disabled
                                            </Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </div>

                                    <div className={s.category}>
                                        <p>Тип товара</p>
                                        <Select defaultValue="Комплект" className={s.Select} style={{width: 140}}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                            <Option value="disabled" disabled>
                                                Disabled
                                            </Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    </div>
                                </div>

                                <div className={s.categoryAtribut}>
                                    <div className={s.category}>
                                        <p>Атрибут</p>
                                        <Select defaultValue="" className={s.Select} style={{width: 140}}>

                                        </Select>
                                    </div>
                                    <div className={s.category}>
                                        <p>Атрибут</p>
                                        <Select defaultValue="" className={s.Select} style={{width: 140}}>

                                        </Select>
                                    </div>
                                    <div className={s.category}>
                                        <p>Атрибут</p>
                                        <Select defaultValue="" className={s.Select} style={{width: 140}}>

                                        </Select>
                                    </div>
                                    <div className={s.category}>
                                        <p>Атрибут</p>
                                        <Select defaultValue="" className={s.Select} style={{width: 140}}>

                                        </Select>
                                    </div>
                                    <div className={s.category}>
                                        <p>Атрибут</p>
                                        <Select defaultValue="" className={s.Select} style={{width: 140}}>

                                        </Select>
                                    </div>


                                </div>
                            </div>
                        </CreateCard>

                        <CreateCard width={'300px'} header={'История'}>
                            <div className={s.historyData}>
                                <p>Сотрудник:</p>
                                <p>ФИО</p>
                                <p>Тип действия:</p>
                                <p>Создание</p>
                                <p>Дата:</p>
                                <time>
                                    16:40
                                    <span>01.02.2021</span>
                                </time>
                            </div>

                            <div className={s.wasBecame}>
                                <div className={s.was}>
                                    <p>Бренд: <span>11</span></p>
                                    <p>Артикул: <span>11</span></p>
                                </div>
                                <div className={s.became}>
                                    <p>Бренд: <span>11</span></p>
                                    <p>Артикул: <span>11</span></p>
                                </div>
                            </div>

                            <div>
                                <Button>
                                    Смотреть все
                                </Button>
                            </div>

                        </CreateCard>

                        <CreateCard  width={'640px'} header={'Поставщики'}>
                           <div className={s.purveyor}>
                               <div className={s.purveyorTable}>
                                   <Table pagination={false} dataSource={dataSource} columns={columns}/>
                               </div>
                               <Button>
                                   Смотреть все
                               </Button>
                           </div>
                        </CreateCard>

                        <CreateCard width={'300px'} header={'Склады'}>
                            <div className={s.stockroom}>
                                <div className={s.adress}>
                                    <p>Адрес <span>25 тыс</span></p>
                                    <div>
                                        Текст какой-тоesfasdfasdfasdfeasfasedfasdfasdfasdfgadfgadfgadfgadf
                                    </div>
                                </div >
                                <div className={s.adress}>
                                    <p>Адрес <span>25 тыс</span></p>
                                </div>

                                <Button>
                                    Смотреть все
                                </Button>
                            </div>
                        </CreateCard>

                    </div>

                    <CreateCard width={'980px'} height={'120px'} header={'Условия хранения'}>
                        <div className={s.storeCond}>
                            <div className={s.category}>

                                <p>Температу хранения:</p>
                                <Mentions placeholder={'33'} className={s.Mentions} readOnly>
                                </Mentions>
                            </div>
                            <div className={s.category}>
                                <p>Освещенность:</p>
                                <Mentions placeholder={'33'} className={s.Mentions} readOnly>
                                </Mentions>
                            </div>
                            <div className={s.category}>
                                <p>Относительная влажность воздуха:</p>
                                <Mentions placeholder={'33'} className={s.Mentions} readOnly>
                                </Mentions>
                            </div>
                            <div className={s.category}>
                                <p> Воздухообмен:</p>
                                <Mentions placeholder={'33'} className={s.Mentions} readOnly>
                                </Mentions>
                            </div>
                        </div>
                    </CreateCard>

                </div>
            </div>
        </div>
    )
}


export default Modal;