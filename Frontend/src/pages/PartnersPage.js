import React from 'react';
import { Button, Card, Layout, Typography, Row } from 'antd';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "@fontsource/playfair-display"
// import image from '../assets/img.png';
import './pages.css';
import "@fontsource/playfair-display"
import { partnersComponents } from '../components/PartnersComponents';
import PartnersLayout from '../components/PartnersLayout';
import futurecity from '../assets/bgphotos/futurecity.jpg';

const Partners = () => {

    const PartnersComponents = partnersComponents.map((item) => (
        <PartnersLayout
            name={item.name}
            url={item.imageurl}
            price={item.price}
            description={item.description}
        />
    ));

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const backgroundImageSettings = {
        background: `url(${futurecity})`,
        height: '90vh',
        backgroun1Position: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        justifyContent: 'center',
    }

    return (
        <>
            <div id='partners' >
                <Layout style={backgroundImageSettings}>
                    <Row gutter={24} style={{ justifyContent: 'center', marginTop: '20px' }}>
                        <Card bordered={false} style={{background: 'rgba(255, 255, 255, 0.0)' }} >
                            <Typography.Title level={1} style={{ fontsize: '90px', fontWeight: 'bold', marginTop: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', }}>
                                WHO WE PARTNER
                            </Typography.Title>
                        </Card>
                    </Row>
                    <Layout style={{ justifyContent: 'flex-start', margin: '20px',background: 'rgba(255, 255, 255, 0.0)' }}>
                        <Carousel
                            responsive={responsive}
                            showDots={true}
                        >
                            {PartnersComponents}
                        </Carousel>
                    </Layout>
                    <Row gutter={24} style={{ justifyContent: 'center' }}>
                        <Button style={{ marginBottom: '50px', width: '20%',color: '#301C58', background: '#FFCFBE', fontWeight:'bolder'}}>FIND OUT MORE</Button>
                    </Row>
                </Layout>
            </div>
        </>
    )
}

export default Partners