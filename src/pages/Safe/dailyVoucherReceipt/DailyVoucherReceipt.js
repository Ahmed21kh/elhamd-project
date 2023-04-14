import { Row, Col,TreeSelect } from "antd";
import styles from "./DailyVoucherReceipt.module.css"
import TextField from '@mui/material/TextField';    
import { HeaderComponent } from "../../../components/Header/Header"
import {FiPlusCircle} from "react-icons/fi"
import {RiCloseCircleLine} from "react-icons/ri"
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const { SHOW_PARENT } = TreeSelect;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: "10%",
        },
    },
};

const names = [
  'مصروفات تشغيل',
  'مصروفات عمومية وادارية',
];
const names2 = [
    ' مصاريف صيانة',
    ' مصاريف دعم',
    'مصاريف تعبئة',
    'عمولات شحن',
    'مصاريف نقل',
    'مرتبات',
    'مصاريف تبخير',
    'نولونات نقل',
    'مصاريف قطف',
    'إكراميات',
    'مصاريف عمالة',
    'مصاريف نظافة',
    'مصاريف ديزل',
    'مصاريف سيارة'

  ];
  const names3 = [
    ' مصاريف صيانة',
    ' مصاريف دعم',
    'مصاريف تعبئة',
    'عمولات شحن',
    'مصاريف نقل',
    'مرتبات',
    'مصاريف تبخير',
    'نولونات نقل',
    'مصاريف قطف',
    'إكراميات',
    'مصاريف عمالة',
    'مصاريف نظافة',
    'مصاريف ديزل',
    'مصاريف سيارة'

  ];

const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      key: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-0',
          key: '0-0-0',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
      key: '0-1',
      children: [
        {
          title: 'Child Node3',
          value: '0-1-0',
          key: '0-1-0',
        },
        {
          title: 'Child Node4',
          value: '0-1-1',
          key: '0-1-1',
        },
        {
          title: 'Child Node5',
          value: '0-1-2',
          key: '0-1-2',
        },
      ],
    },
  ];
export const DailyVoucherReceipt = () => {
    const [category, setCategory] = useState([]);
    const [accountnName, setAccountnName] = useState([]);
    const [value, setValue] = useState(['0-0-0']);
    
    
    const onChange = (newValue) => {
        console.log('onChange ', value);
        setValue(newValue);
    };
    
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setCategory(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    const handleChange2 = (event) => {
        const {
          target: { value },
        } = event;
        setAccountnName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
        const tProps = {
            treeData,
            value,
            onChange,
            allowClear:true,
            bordered:true,
            treeCheckable: true,
            showArrow:true,
            showCheckedStrategy: SHOW_PARENT,
            placeholder: 'التصنيف',
            style: {
              width: '68%',
              fontSize: '18px',
              color: 'black',
              
              
            },
          };

    const theme = createTheme({
        direction: "rtl",
      });
      const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
      });

    return (
        <>
        <div>

        <HeaderComponent  title="سند الصرف" width="100%"/>
        <div style={{margin: "5em auto",border: "1px solid gray",width :"80%",
          borderTopRightRadius: "15px",borderTopLeftRadius: "15px",borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",border: "none",boxShadow:"1px 3px 10px 0px rgba(0,0,0,0.30)"}}>
            <div style={{display: "flex",alignItems :"center" ,width: "100%",
                  height: "50px",backgroundColor: "#2A2727",borderRadius: "15px",}}>
                 <div style={{display: "flex",alignItems: "center",  marginRight: "1em"}}>
                       <FiPlusCircle style={{color:"white",fontSize:"18px",fontWeight:"bold"}}/>
                       <p style={{margin:"0",marginRight: "0.5em",fontSize: "18px",
                       fontWeight: "bold",color: "white"}}> إضافة سند صرف </p>
                  </div>
            </div>
            <div className={styles.inputsDiv}  style={{padding: "6em 2em"}}>
            <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                   <Row gutter={30}>
                      <Col xs={24} md={8}>  
                      
                     
                         <TextField
                              label="التاريخ"
                              id="outlined-size-small"
          
                              size="small"
                            />
                      
                      </Col>
                      <Col xs={24} md={8}>  
                          
                      {/* <TreeSelect  {...tProps} size="large"/> */}
                      <FormControl sx={{ m: 0, width: '80%',fontFamily:'Tajawal',fontSize:'18px' }}>
                        <InputLabel id="demo-multiple-checkbox-label">التصنيف</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            size='small'
                            value={category}
                            onChange={handleChange}
                            input={<OutlinedInput label="التصنيف" size="small" style={{ 
                            display: 'flex',
                            alignItems:'center',
                            fontSize: '19px',
                            fontFamily:'Tajawal'}} />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                            >
                            {names.map((name) => (
                                        <MenuItem key={name} value={name} >
                                                  <Radio color="default" checked={category.indexOf(name) > -1} />
                                                  {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
                                                  <ListItemText primary={name} sx={{
                                                      '& .muirtl-10hburv-MuiTypography-root': {
                                                          margin: 0,
                                                          fontFamily: "tajawal",
                                                          fontWeight: 400,
                                                          fontSize: '16px',
                                                          lineHeight: 1.5,
                                                          letterSpacing: '0.00938em',
                                                          display: 'block',
                                                          overflow: 'hidden',
                                                          textOverflow: 'ellipsis',
                                                      }
                                                  }}/>
                                        </MenuItem>
                            ))}
                            </Select>
                        </FormControl>

                         {/* <TextField
                              label="نوع الصنف"
                              id="outlined-size-small"
          
                              size="small"
                            /> */}
                      
                      </Col>
                      <Col xs={24} md={8}>  
                      
                     
                      <FormControl sx={{ m: 0, width: "100%",fontFamily:'Tajawal',fontSize:'18px' }}>
                        <InputLabel id="demo-multiple-checkbox-label">اسم الحساب</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            size='small'
                            value={accountnName}
                            onChange={handleChange2}
                            input={<OutlinedInput label="اسم الحساب" size="small" style={{ 
                            display: 'flex',
                            alignItems:'center',
                            fontSize: '19px',
                            fontFamily:'Tajawal'}} />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                            sx={{
                                    '& .muirtl-6hp17o-MuiList-root-MuiMenu-list' :{
                                        listStyle: 'none',
                                        margin: 0,
                                        padding: 0,
                                        position: 'relative',
                                        paddingTop: "8px",
                                        paddingBottom: '8px',
                                        outline: 0,
                                        display: 'grid !important',
                                        gridTemplateColumns: 'auto auto !important',

                                    }
                            }}
                            >
                            {/* <div  style={{ }}> */}
                            
                            {names2.map((name) => (
                              
                                <MenuItem key={name} value={name}  className="menu-item ">
                    
                                            <>
                                            <Radio color="default" checked={accountnName.indexOf(name) > -1} />
                                            {/* <Checkbox checked={personName.indexOf(name) > -1} /> */}
                                              <ListItemText primary={name} sx={{
                                                  '& .muirtl-10hburv-MuiTypography-root': {
                                                      margin: 0,
                                                      fontFamily: "tajawal",
                                                      fontWeight: 400,
                                                      fontSize: '16px',
                                                      lineHeight: 1.5,
                                                      letterSpacing: '0.00938em',
                                                      overflow: 'hidden',
                                                      textOverflow: 'ellipsis',
                                                      
                                                      
                                                  },
                                               
                                              
                                              }} />
                                            </>
                              
                                      
                                </MenuItem>

                            ))}
                            {/* </div> */}
                            </Select>
                        </FormControl>
                      
                      </Col>
                   </Row>
                   <Row gutter={30} style={{marginTop:"5em"}}>
                      <Col xs={24} md={8}>  
                      
                      
                         <TextField
                               label="المبلغ"
                               id="outlined-size-small"
          
                               size="small"
                             />
                      
                      </Col>
                      <Col xs={24} md={8}>  
                      
                      
                         <TextField
                               label="البيان"
                               id="outlined-size-small"
          
                               size="small"
                             />
                      
                      </Col>
                      <Col xs={24} md={8}>  
                      </Col>
                   </Row>
                      </ThemeProvider>
                      </CacheProvider>
            </div>
            
        </div>
        <div style={{display: "flex",justifyContent: "end" ,margin: "auto",width: "80%"}}>
         
           <button style={{width: "6em", marginLeft: "0.5em",padding:"0.5em 0em",border:"none",
           borderRadius:"15px",color: "white",backgroundColor:"#2A2727",display:"flex",
           alignItems:"center",justifyContent:"center"}}><FiPlusCircle style={{marginLeft: "0.5em"}}/>إضافة</button>
           <button style={{marginRight: "0.5em",padding:"0.5em 0em",
           border:"none",borderRadius:"15px",color: "white",
           backgroundColor:"#2A2727",display:"flex",
           alignItems:"center",width: "6em",justifyContent:"center"}}><RiCloseCircleLine style={{marginLeft: "0.5em"}}/>إلغاء</button>
            </div>
        </div>
        
        </>
    )
}