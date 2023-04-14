import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styles from './ClientsList.module.css'
import { HeaderComponent } from "../../components/Header/Header"
import {BiSearch,BiPencil} from "react-icons/bi"
import {FiSave,FiPlusCircle} from "react-icons/fi"
import { Input, Space,Table,Row,Col } from 'antd';
// mui rtl textField
import TextField from '@mui/material/TextField';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
//mui rtl textField

import {GiCancel} from "react-icons/gi"

const { Search } = Input;
export const ClientsList = ()=>{
// mui rtl textField
    const theme = createTheme({
        direction: "rtl",
      });
      const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
      });
// end of mui rtl textField

// modal functions
const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    console.log ('aaaa')
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // end of modal functions




    const { Column, ColumnGroup } = Table;
    // const columns = [
    //     {
    //       title: 'تاريخ الدخول',
    //       dataIndex: 'date',
    //     },
    //     {
    //       title: 'رقم الكارتة',
    //       dataIndex: 'num',
    //     },
    //     {
    //       title: 'اسم المورد',
    //       dataIndex: 'name',
    //     },
    //     {
    //         title: 'اسم الصنف',
    //         dataIndex: 'item',
    //       },
    //       {
    //         title: 'اجراءات ',
    //         dataIndex: 'procedures',
    //       },
    //   ];
      const data = [
        {
          key: '1',
         
          code: 'E254052',
          name: "شركة الحرمين",
          phone: "01554208790",
          
        },
        {
          key: '2',
          code: 'E254052',
          name: "شركة الحرمين",
          phone: "01554208790",
          
        },
        {
          key: '3',
          code: 'E254052',
          name: "شركة الحرمين",
          phone: "01554208790",
          
        },
      ];

    return(
        <>
        <div style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems:"center" }}>
            {/* <div style={{display: "flex"}}> */}
         <HeaderComponent  title="العملاء " width="100%"/>
         
           {/* </div> */}
           <div style={{display: "flex",width: "80%",alignItems:"center"}}>
          <div
          className={styles.searchWrapper}
          style={{width: "40%", margin: "3em auto", borderRadius: "15px"
          ,boxShadow:"5px 5px 10px 2px rgba(0,0,0,0.20)",textAlign:"center",position:"relative",display:'flex'}}>
       <div style={{width: "20%"}}> 
       <BiSearch style={{ fontSize:"20px",position:"absolute",top: "10px",right:"20px",opacity: "0.6" }}/>
       </div> 
              <input
              className={styles.inputSearch}
              type="search"  
              placeholder='إبحث عن اسم العميل'
                  style={{width:"80%",padding:"0.8em",border:"none",
                  borderTopLeftRadius:"15px",
                  borderBottomLeftRadius:"15px"
                 }}/>
                
         </div>
         <button style={{width: "15%",height: "30px" ,padding:"0.5em 0em",border:"none",
           borderRadius:"15px",color: "white",backgroundColor:"#2A2727",display:"flex",
           alignItems:"center",justifyContent:"center"}}><FiPlusCircle style={{marginLeft: "0.5em"}}/>إضافة عميل</button>
         </div>
         {/* <Table 
         columns={columns} 
         dataSource={data}
          style={{width: "80%"}} 
          pagination={false}
          
          /> */}

<Table 
dataSource={data}
pagination={false}
className={styles.tabl}
style={{width: "80%",marginTop: "2em",boxShadow: "1px 3px 10px 0px rgb(0 0 0 / 30%)"}} 
scroll={{x:700}}
>
   
      {/* <Column title='تاريخ الدخول' dataIndex="date" key="date" className={styles.coll}/> */}
      
    <Column className={styles.coll} title='كود العميل' dataIndex="code" key="code" />
    <Column className={styles.coll} title='اسم العميل' dataIndex="name" key="name" />
    <Column className={styles.coll} title='رقم التليفون' dataIndex="phone" key="phone" />
    {/* <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    /> */}
    <Column
      title="اجراءات"
      key="procedures"
      render={(_, record) => (
        <Space size="middle">
          {/* <button style={{width:"100px",borderRadius: "15px",
          backgroundColor: "green",color:"white",border:"none"}}>انهاء {record.lastName}</button> */}
          <button style={{width:"100px",borderRadius: "15px",border:"1px solid gray",padding:"0.25em",
                          display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"         
        }}
        onClick={showModal}
        > 
        <BiPencil style={{marginLeft: "0.5em"}}
       
        />تعديل
        </button>
        </Space>
      )}
    />
  </Table>
        </div>

        <Modal title=" تعديل بيانات العميل" 
        closable={false}
    footer={(<>
    <div style={{display: "flex", justifyContent: "end"}}>
        <Button style={{width: "6em", marginLeft: "0.5em",padding:"0.5em 0em",border:"none",
           borderRadius:"15px",color: "white",backgroundColor:"#2A2727",display:"flex",
           alignItems:"center",justifyContent:"center"}}><GiCancel style={{marginLeft: "0.25em"}}/> حفظ </Button>
        <Button style={{width: "6em", marginLeft: "0.5em",padding:"0.5em 0em",border:"none",
           borderRadius:"15px",color: "white",backgroundColor:"#2A2727",display:"flex",
           alignItems:"center",justifyContent:"center"}}> <FiSave style={{marginLeft: "0.25em"}}/>إلغاء </Button>
    </div>
        
        </>
    )}
    
    
    
        open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
        <CacheProvider value={cacheRtl}>
               <ThemeProvider theme={theme}>
                   <Row gutter={30}>
                      <Col xs={24} md={12} style={{display:"flex",justifyContent:"center"}}>  
                      
                      
                           <TextField
                                label="اسم المخزن"
                                id="outlined-size-small"
                                style={{width: "90%"}}
                                size="small"
                                 />
                      
                      </Col>
                      <Col xs={24} md={12} style={{display:"flex",justifyContent:"center"}}>  
                      
                      
                           <TextField
                                 label="عنوان المخزن"
                                 id="outlined-size-small"
                                 style={{width: "90%"}}
                                 size="small"
                               />
                      
                      </Col>
                      
                   </Row>
                   <Row gutter={30} style={{marginTop:"4em"}}>

                   <Col xs={24} md={12} style={{display:"flex",justifyContent:"center"}}>  
                      
                     
                         <TextField
                             label="كود المخزن"
                             id="outlined-size-small"
                             style={{width: "90%"}}
                             size="small"
                           />
                      
                      </Col>
                      <Col xs={24} md={12} style={{display:"flex",justifyContent:"center"}}>  
                      
                     
                           <TextField
                                label="نوع المخزن"
                                id="outlined-size-small"
                                style={{width: "90%"}}
                                size="small"
                              />
                      
                      </Col>
                     
                   </Row>
               </ThemeProvider>
               </CacheProvider>
      </Modal>
        </>
    )
}