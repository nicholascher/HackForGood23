import React from "react";
import { Card, Typography } from "antd";

const { Title } = Typography;
export default function PartnersLayout(props) {
    return (
        <>
            <Card bordered={false} style={{ width: "95%", height: 300, alignItems: 'center', background:'#301C58', color: '#FFCFBE', textAlign: 'center' }} >
                <Title level={3} style={{ fontsize: '10px', fontWeight: 'bold', margin: 10, fontFamily: 'Playfair Display', color: '#FFCFBE', padding: 20 }}>
                    {props.name}

                </Title>

                <p style={{ fontFamily: 'Playfair Display', fontSize:'20px'}}>{props.description}</p>
            </Card>
        </>
    );
}