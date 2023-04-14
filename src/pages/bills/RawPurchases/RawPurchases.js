import React,{ useContext, useEffect, useRef, useState }   from 'react';
import './RawPurchases.css'
import { HeaderComponent } from '../../../components/Header/Header';
import { Card , Button} from 'antd';
import { AiFillPrinter,AiOutlinePlusCircle} from 'react-icons/ai';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import {RiFileList2Fill} from 'react-icons/ri';

const theme = createTheme({
    direction: "rtl",
  });
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
export const RawPurchases=()=> {
  const [date, setDate] =useState(null);
  const [date2, setDate2] =useState(null);

  const handleChange1 = (newValue) => {
    setDate(newValue);
    
  };
  const handleChange2 = (newValue) => {
    
    setDate2(newValue);
  };
    return(
        <>
        <HeaderComponent title="اضافة مشتريات الخام"/>
        <div style={{margin: "4em auto",border: "1px solid gray",width :"90%",
          borderTopRightRadius: "15px",borderTopLeftRadius: "15px",borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",border: "none",boxShadow:"1px 3px 10px 0px rgba(0,0,0,0.30)"}}>
            <div style={{display: "flex",alignItems :"center" ,width: "100%",
                  height: "50px",backgroundColor: "#2A2727",borderRadius: "15px",}}>
                 <div style={{display: "flex",alignItems: "center",  marginRight: "1em"}}>
                       <RiFileList2Fill style={{color:"white",fontSize:"18px",fontWeight:"bold"}}/>
                       <p style={{margin:"0",marginRight: "0.5em",fontSize: "18px",
                       fontWeight: "bold",color: "white"}}> إضافة مشتريات خام </p>
                  </div>
            </div>
            <div   style={{padding: "2em 2em"}}>
        
           <div className='supplirData'>
            <div className='title' >
                بيانات المورد
            </div>
           <Card
            style={{
            width: 'auto',
            background:'#fff',
            boxShadow:"rgb(207 207 207) 5px 15px 14px -12px, rgb(207 207 207) 5px 5px 22px -5px ",
            marginTop:10,
            padding:'5px',
            
            borderRadius:'12px',
            
            }}
            >
                  <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <Box
                    component="form"
                    sx={{
                        justifyContent:'space-between',
                        '& > :not(style)': { m: 1 ,mr:5, width: '30ch' , gap:'10px' ,},

                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField size='small' id="outlined-basic" label="اسم المورد" variant="outlined" />
                    <TextField size='small' id="outlined-basic" label="كود المورد" variant="outlined" />
                    <TextField size='small' id="outlined-basic" label="رقم التليفون" variant="outlined" />            
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="تاريخ الدخول "
                      inputFormat="DD/MM/YYYY"
                      value={date}
                      onChange={handleChange1}
                      renderInput={(params) => <TextField id="outlined-basic" variant="outlined" size='small' {...params} />}
                    />
                    {/* <DesktopDatePicker
                      label=" تاريخ التشغيل "
                      inputFormat="DD/MM/YYYY"
                      value={date2}
                      onChange={handleChange2}
                      renderInput={(params) => <TextField id="outlined-basic" variant="outlined" size='small' {...params} />}
                    /> */}
                    </LocalizationProvider>               
                    </Box>
                  </ThemeProvider>
                  </CacheProvider>
            </Card>
           </div>  
           <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 2fr',
            marginTop:0,

           }}>
           <div className='driverData'>
            <div className='title'>
                بيانات السائق
            </div>
           <Card
            style={{
            width: 'auto',
            background:'#fff',
            boxShadow:"rgb(207 207 207) 5px 15px 14px -12px, rgb(207 207 207) 5px 5px 22px -5px ",
            marginTop:10,
            padding:'10px',
            borderRadius:'12px',
            
            }}
            >
                  <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <Box
                    component="form"
                    sx={{
                        

                        '& > :not(style)': { m: 1,mb:2, width: '90%' }
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField fullWidth  size='small' id="outlined-basic" label="اسم السائق" variant="outlined" />
                    <TextField fullWidth  size='small' id="outlined-basic" label="كود السائق" variant="outlined" />
                    <TextField fullWidth  size='small' id="outlined-basic" label="رقم التليفون" variant="outlined" />
                    <TextField fullWidth  size='small' id="outlined-basic" label="رقم السيارة" variant="outlined" />
                    
                    </Box>
                  </ThemeProvider>
                  </CacheProvider>
            </Card>
           </div>   
           <div className='kartData'>
            <div className='title'>
                بيانات الكارتة
            </div>
           <Card
            style={{
            width: 'auto',
            background:'#fff',
            boxShadow:"rgb(207 207 207) 5px 15px 14px -12px, rgb(207 207 207) 5px 5px 22px -5px ",
            marginTop:10,  
            padding:'10px',
            borderRadius:'12px',
          
            }}
            >
                  <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <Box
                    component="form"
                    sx={{
                        
                        '& > :not(style)': { m: 1,mb:2  ,mr:4, width: '40%' },
                        '& > @media(max-width:1200px)': { 
                            display:'grid',
                            gridTemplateColumns:'1fr 1fr'
                         }

                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField  size='small' id="outlined-basic" label="رقم الكارتة" variant="outlined" />
                    <TextField  size='small' id="outlined-basic" label="اسم الصنف" variant="outlined" />
                    <TextField size='small' id="outlined-basic" label=" الوزن الفارغ" variant="outlined" />
                    <TextField size='small' id="outlined-basic" label="الوزن القائم" variant="outlined" />
                    <TextField size='small' id="outlined-basic" label=" الصافي" variant="outlined" />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label="تاريخ الدخول "
                      inputFormat="DD/MM/YYYY"
                      value={date}
                      onChange={handleChange1}
                      renderInput={(params) => <TextField id="outlined-basic" variant="outlined" size='small' {...params} />}
                    />
                    </LocalizationProvider> 
                    <TextField size='small' id="outlined-basic" label="الكميه" variant="outlined" />
                    <TextField size='small' id="outlined-basic" label="سعر الطن خام" variant="outlined" />
                    
                    </Box>
                  </ThemeProvider>
                  </CacheProvider>
            </Card>
           </div>   
           </div > 
           </div>
            
          
        </div>
           <div style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'end',
            marginTop: '0px',
            
           }}>
           <Button
             
              type="button"
              style={{
              padding: '8px 20px',
              marginBottom: 16,
              float:'left',
              left: 60,
              fontSize:16,
              background:"#2A2727",
              color:"white",
              borderRadius:"12px",
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight:20
             
              }}
              >
            <AiOutlinePlusCircle style={{
              marginLeft:6,
              fontSize:22
            }}/>
            اضافة 
          </Button>
           </div>
        </>
    )
};
