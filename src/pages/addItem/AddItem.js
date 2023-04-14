import { Row, Col} from "antd";
import styles from "./AddItem.module.css"
import TextField from '@mui/material/TextField';
import { HeaderComponent } from "../../components/Header/Header"
import {FiPlusCircle} from "react-icons/fi"
import {RiCloseCircleLine} from "react-icons/ri"
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
export const AddItem = () => {

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

        <HeaderComponent  title="إضافة صنف" width="100%"/>
        <div style={{margin: "5em auto",border: "1px solid gray",width :"80%",
          borderTopRightRadius: "15px",borderTopLeftRadius: "15px",borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",border: "none",boxShadow:"1px 3px 10px 0px rgba(0,0,0,0.30)"}}>
            <div style={{display: "flex",alignItems :"center" ,width: "100%",
                  height: "50px",backgroundColor: "#2A2727",borderRadius: "15px",}}>
                 <div style={{display: "flex",alignItems: "center",  marginRight: "1em"}}>
                       <FiPlusCircle style={{color:"white",fontSize:"18px",fontWeight:"bold"}}/>
                       <p style={{margin:"0",marginRight: "0.5em",fontSize: "18px",
                       fontWeight: "bold",color: "white"}}> إضافة صنف </p>
                  </div>
            </div>
            <div className={styles.inputsDiv}  style={{padding: "6em 2em"}}>
            <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                   <Row gutter={30}>
                      <Col xs={24} md={8}>  
                      
                     
                         <TextField
                              label="اسم الصنف"
                              id="outlined-size-small"
          
                              size="small"
                            />
                      
                      </Col>
                      <Col xs={24} md={8}>  
                      
                      
                         <TextField
                              label="نوع الصنف"
                              id="outlined-size-small"
          
                              size="small"
                            />
                      
                      </Col>
                      <Col xs={24} md={8}>  
                      
                     
                         <TextField
                             label="كود الصنف"
                             id="outlined-size-small"
          
                             size="small"
                           />
                      
                      </Col>
                   </Row>
                   <Row gutter={30} style={{marginTop:"4em"}}>
                      <Col xs={24} md={8}>  
                      
                      
                         <TextField
                               label="اسم المورد"
                               id="outlined-size-small"
          
                               size="small"
                             />
                      
                      </Col>
                      <Col xs={24} md={8}>  
                      
                      
                         <TextField
                               label="كود المورد"
                               id="outlined-size-small"
          
                               size="small"
                             />
                      
                      </Col>
                      <Col xs={24} md={8}>  
                      
                      
                          <TextField
                              label="المخزن المخصص"
                              id="outlined-size-small"
          
                              size="small"
                            />
                      
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