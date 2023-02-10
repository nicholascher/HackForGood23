import React, { useEffect, useState } from 'react';
import { Layout, Typography, Card, Row, Col, Button, Pagination, Cascader } from 'antd';
import blueglasscube from '../assets/bgphotos/blueglasscube.jpg';
import { useNavigate } from 'react-router-dom';
import { moreevents } from '../urlConfig/pathURL';
import useWindowDimensions from '../utilities/windowDimensions';
import './pages.css';
import axios from 'axios';
import NavEventBar from '../components/navcomponents/NavEventBar';
import Cookies from 'universal-cookie';

  
const {Title} = Typography;
const MoreEventsPage = () => {
    const cookies = new Cookies();
    let eventIndice = {}

    const categories = [
        {
          code: -10,
          name: 'NONE',
        },
        {
          code: 0,
          name: 'DEVELOPMENT',
        },
        {
          code: 10,
          name: 'ARTIFICIAL INTELLIGENCE',
        },
        {
          code: 20,
          name: 'WEB BUILDING',
        },
        {
          code: 30,
          name: 'MANUFACTURING',
        },
    ]
    
    const [availableEvents, setEvents] = useState([]);
    const [currentEvents, setCurrent] = useState([]);
    const {height, width} = useWindowDimensions();
    const backgroundImageSettings = {
        background: `url(${blueglasscube})`,
        height: height,
        width:width,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'flex-start'
    }
    const navigate = useNavigate();

    useEffect(() => {
        if (window.token == null) {
            window.token = cookies.get('token');
        }

        loadEvents();
    }, []);

    const spliceEvents = (values) => {
        // Converts the events into chunks of 3
        var temp = {};
        var count = 0;
        var index = 0;
        values.map((data, num) => {
            if (count == 0) {
                temp[index] = [];
            }
            temp[index].push(data);
            count++;

            if (count == 3) {
                index++;
                count = 0;
            }
        });
        eventIndice = temp;
        console.log(eventIndice);
        setCurrent(temp[0]);
        console.log(currentEvents);
    }

    const loadEvents = () => {

        var jwtToken = window.token;
        axios.get(window.apiUrl + "/Event", 
        {
            headers: {
            Authorization: "Bearer " + jwtToken
            },
        })
        .then((response) => {
            setEvents(response.data.values);
            spliceEvents(response.data.values);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const pageChange = (pg) => {
        console.log(pg);
        setCurrent(eventIndice[pg-1]);
    }

    const chooseCategory = (cat) => {
        var curCat = cat[0];
        var str = curCat.toString();
        console.log(str);
        var jwtToken = window.token;
        axios.get(window.apiUrl + "/Event/category", 
        {
            headers: {
            Authorization: "Bearer " + jwtToken,
            
            },
            category: 0,
        })
        .then((response) => {
            setEvents(response.data.values);
            spliceEvents(response.data.values);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const renderEventCard = (data) => {
        return(
            <Col span={6}>
                <Card style={{ background: 'rgba(48, 28, 88, 0.9)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}>
                    <Title level={3} style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                        {data.name}
                    </Title>
                    <p style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>{data.description}</p>
                    <p style={{ fontFamily: 'Playfair Display', fontSize: '20px' }}>{data.start} - {data.end}</p>
                    <Button type="primary" href={data.url}> More Info </Button>
                </Card>
            </Col> 
        );
    }

    return (
        <>
            <div id="events" style={{height:height, width:width}}>
                <Layout style={backgroundImageSettings}>
                
                <Row style={{justifyContent:'space-between'}}>
                    <Col span={24}><NavEventBar/></Col>
                </Row>
                    <Row style={{ justifyContent: 'center', marginTop: '150px' }}>
                        <Col >
                            <Typography.Title level={1} style={{ margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE' }}>
                                EVENTS
                            </Typography.Title>
                        </Col>
                    </Row>
                    <Row>
                        <Cascader fieldNames={{ label: 'name', value: 'code'}} options={categories} onChange={(cat) => chooseCategory(cat)} placeholder={"NONE"}>

                        </Cascader>
                    </Row>
                    <Row gutter={16} style={{ marginTop: '50px', margin: '50px', justifyContent: 'center' }}>
                        {availableEvents.length > 0 && currentEvents.length > 0
                        ? currentEvents.map((data, num) => {
                            return(renderEventCard(data))
                        })
                        : 
                        <Col span={16}>
                            <Card style={{ background: 'rgba(48, 28, 88, 0.9)', height: 350, color: '#FFCFBE', textAlign: 'center' }} bordered={false}>
                                <Title level={3} style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                                    No event available, check back again soon!
                                </Title>
                            </Card>
                        </Col>}
                    </Row>
                    <Row style={{justifyContent:'center', marginTop: '50px'}}>
                        <Pagination onChange={(pg, pgSize) => pageChange(pg)} total={3} />
                    </Row>
                </Layout>
            </div>
        </>
    )
}

export default MoreEventsPage;