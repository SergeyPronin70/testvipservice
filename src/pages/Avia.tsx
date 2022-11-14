import { Button, Card, Col, DatePicker, Input, Row } from "antd";
import { Moment } from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

interface IProps {
    fromCity: string
    setFromCity: (value: string) => void
    toCity: string
    setToCity: (value: string) => void
    flightDate: Moment | null
    setFlightDate: (date: Moment | null) => void
    backtDate?: Moment | null
    setBackDate: (date: Moment | null) => void
}

const Avia: React.FC<IProps> = ({ fromCity, setFromCity, toCity, setToCity, flightDate, setFlightDate, backtDate, setBackDate }) => {
    
    const navigate = useNavigate();

    const findTicket = () => {
        navigate('/avia/info')
    }

    return (
        <div className="wrapper">
            <div className="inputs-wrapper">
                <Row justify='start' >
                    <Col span={4} className='col'>
                        <Card bordered={false} className='card' >
                            <p>Откуда</p>
                            <Input placeholder="Город вылета" className='input'
                                value={fromCity}
                                onChange={(e => setFromCity(e.target.value))} />
                        </Card>
                    </Col>
                    <Col span={4} className='col'>
                        <Card bordered={false} className='card'>
                            <p>Куда</p>
                            <Input placeholder="Город прилета" className='input'
                                value={toCity}
                                onChange={(e => setToCity(e.target.value))}
                            />
                        </Card>
                    </Col>
                    <Col span={4} className='col'>
                        <Card bordered={false} className='card'>
                            <p>Туда</p>
                            <DatePicker className='input' showToday={true} format={'DD/MM/YYYY'}
                                value={flightDate}
                                onChange={((date: Moment | null) => setFlightDate(date))}
                            />
                        </Card>
                    </Col>
                    <Col span={4} className='col'>
                        <Card bordered={false} className='card'>
                            <p>Обратно</p>
                            <DatePicker className='input' format={'DD/MM/YYYY'}
                                value={backtDate}
                                onChange={((date: Moment | null) => setBackDate(date))}
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='button-wrapper'>
                <Button className='button' 
                onClick={findTicket}
                disabled={!fromCity || !toCity || !flightDate }
                >Найти билеты</Button>
            </div>
        </div>

    )
}

export default Avia;