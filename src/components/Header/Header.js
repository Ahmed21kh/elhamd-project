import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

export const HeaderComponent = (props) => {

    return (
        <>
            <Header

            style={{
                height:'70px',
                display:'flex',
                position:'relative',    
                padding: '0 65px',
                zIndex: 2,
                alignItems: 'center',
                background: "#F6F6F2",
                boxShadow:"3px 0px 19px rgb(153 153 153) ",
                width: "100%"
            }} >
                <h1 style={{ fontSize:"24px"}} >{props.title}</h1>
                
            </Header>
        </>
    )

}