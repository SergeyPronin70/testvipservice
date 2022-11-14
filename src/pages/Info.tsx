import { Button, Card, Col, DatePicker, Input, Row } from "antd";
import React, { useState } from "react";
import '../App.css'
import logo from '../img/s7.svg'
import schema from '../img/schema.svg'
import bag from '../img/bag.svg'
import largebag from '../img/largebag.svg'
import { Moment } from "moment";

interface IProps {
    fromCity: string
    toCity: string
    flightDate: Moment | null
    backtDate?: Moment | null
}


const Info: React.FC<IProps> = ({ fromCity, toCity, flightDate, backtDate }) => {

    const [time, setTime] = useState<string[]>(['9:00', '10:55']);

    return (
        !backtDate
            ?
            <div className="info-wrapper">
                <Row justify={'center'} >
                    <Col  >
                        <div className="returnable">Невозвратный</div>
                        <div className="logo">
                            <img src={logo} alt='S7 logo' />
                        </div>
                        <div className="airline">S7 Airlines</div>
                    </Col>
                    <Col  >
                        <Row justify={'center'} >
                            <Col className='flight-info'  >
                                <div className="time">{time[0]}</div>
                                <div className="city-date"> {fromCity}</div>
                                <div className="city-date">
                                    {flightDate?.format('DD-MM-YYYY')}
                                </div>

                            </Col>
                            <Col  >
                                <div className="schema">
                                    <img src={schema} alt='схема перелета' />
                                </div>
                            </Col>
                            <Col className='flight-info'  >
                                <div className="time">{time[1]}</div>
                                <div className="city-date"> {toCity}</div>
                                <div className="city-date">
                                    {flightDate?.format('DD-MM-YYYY')}
                                </div>
                            </Col>
                            <Col  >
                                <div className="bag">
                                    <img src={bag} alt='ручная кладь' />
                                    <img src={largebag} alt='багаж' />
                                </div>
                            </Col>
                        </Row>
                        <div className='time-buttons'>
                            <Button onClick={() => setTime(['9:00', '10:55'])} className='btn'>9:00 - 10:55</Button>
                            <Button onClick={() => setTime(['10:00', '11:55'])} className="btn">10:00 - 11:55</Button>
                            <Button onClick={() => setTime(['11:05', '13:00'])} className='btn'>11:05 - 13:00</Button>
                        </div>
                    </Col>
                    <Col className='price'>
                        <div>
                            4 150 ₽
                        </div>
                    </Col>
                </Row>
            </div>
            :
            <div className="info-wrapper-large">
                <Row justify={'center'} >
                    <Col >
                    <Row justify={'center'} style={{paddingBottom: '25px'}}>
                        <Col  >
                            <div className="returnable">Невозвратный</div>
                            <div className="logo">
                                <img src={logo} alt='S7 logo' />
                            </div>
                            <div className="airline">S7 Airlines</div>
                        </Col>
                        <Col  >
                            <Row justify={'center'} >
                                <Col className='flight-info'  >
                                    <div className="time">{time[0]}</div>
                                    <div className="city-date"> {fromCity}</div>
                                    <div className="city-date">
                                        {flightDate?.format('DD-MM-YYYY')}
                                    </div>

                                </Col>
                                <Col  >
                                    <div className="schema">
                                        <img src={schema} alt='схема перелета' />
                                    </div>
                                </Col>
                                <Col className='flight-info'  >
                                    <div className="time">{time[1]}</div>
                                    <div className="city-date"> {toCity}</div>
                                    <div className="city-date">
                                        {flightDate?.format('DD-MM-YYYY')}
                                    </div>
                                </Col>
                                <Col  >
                                    <div className="bag">
                                        <img src={bag} alt='ручная кладь' />
                                        <img src={largebag} alt='багаж' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row justify={'center'} >
                        <Col  >
                            <div className="returnable">Невозвратный</div>
                            <div className="logo">
                                <img src={logo} alt='S7 logo' />
                            </div>
                            <div className="airline">S7 Airlines</div>
                        </Col>
                        <Col  >
                            <Row justify={'center'} style={{borderTop: '1px dashed #5C87DB'}} >
                                <Col className='flight-info'  >
                                    <div className="time">22:00</div>
                                    <div className="city-date"> {toCity}</div>
                                    <div className="city-date">
                                        {backtDate?.format('DD-MM-YYYY')}
                                    </div>

                                </Col>
                                <Col  >
                                    <div className="schema">
                                        <img src={schema} alt='схема перелета' />
                                    </div>
                                </Col>
                                <Col className='flight-info'  >
                                    <div className="time">23:55</div>
                                    <div className="city-date"> {fromCity}</div>
                                    <div className="city-date">
                                        {backtDate?.format('DD-MM-YYYY')}
                                    </div>
                                </Col>
                                <Col  >
                                    <div className="bag">
                                        <img src={bag} alt='ручная кладь' />
                                        <img src={largebag} alt='багаж' />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </Col>
                    <Col className='double-price'>
                        <div>
                            8 300 ₽
                        </div>
                    </Col>
                </Row>
            </div>
    )
}

export default Info;