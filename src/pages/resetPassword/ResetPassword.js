import styles from "./ResetPassword.module.css";
import React from "react";
import { Form, Button, Input, message, Space, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext, useRef } from "react";
import Img from "../../assets/Group 917.png";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import OtpInput from "react-otp-input"
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
export const ResetPassword = ( props) => {
    const [Email, setEmail] = useState("");
    const [SendEmail, setSendEmail] = useState(false);
    const [confirmedEmail, setconfirmedEmail] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [pass, setPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [code, setCode] = useState("");

    console.log(props);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
   const handleChange = (code) =>  { 
    console.log(code);
    setCode(code)};
   const handleSendEmail = () => {
        setSendEmail(true);
        
    }
    useEffect(() => {
      //  return () => {
      //    second
      //  }
    }, []);
  
    const theme = createTheme({
        direction: "rtl",
      });
      const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
      });
      {
          return ( 
              
              <>
            <div className={styles.loginMain}>
            <div className={styles.loginLogo}>
                <div className={styles.loginLogoImgDiv}>
                  <div className={styles.logoDiv}>
                    <Image src={Img} preview={false} />
                  </div>
                  <div className={styles.logoWord}></div>
                </div>
              </div>
              <div className={styles.loginForm}>
                {SendEmail? (
                <>
                {confirmedEmail?(
                <>
                  <div className={styles.formWrapperDiv}>
                  <div className={styles.loginWord}>
                    <p style={{fontSize:"30px"}}>إعادة تعيين كلمة المرور</p>
                  </div>
                  <form className={styles.formBody}>
                    <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, direction: "rtl" },
                    }}
                    autoComplete="off"
                    >
                    <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                    <div className={styles.formDivs}>
                    <div className={styles.passwordDiv}>
                        <div style={{ position: "relative" }}>
                          <TextField
                            required
                            id="outlined-required "
                            label="كلمةالسر الجديدة"
                            placeholder="كلمة السر الجديدة"
                            fullWidth
                            autoFocus
                            size="small"
                            autoFocused
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            margin="dense"
                            onChange={(e) => setNewPass(e.target.value)}
                            value={newPass}
                            sx={{
                              '& .muirtl-1sumxir-MuiFormLabel-root-MuiInputLabel-root ':{
                                fontFamily:"Segoe UI",
                                fontSize:"18px",
                                color:"rgba(0, 0, 0, 0.44)",
                                fontWeight: "bold",
                              },
                              "& .muirtl-1pysi21-MuiFormLabel-root-MuiInputLabel-root ":
                                {
                                  fontFamily: "Segoe UI",
                                  fontSize: "18px",
                                },
                              "& .muirtl-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  fontSize: "18px !important",
                                },
                              "& .MuiOutlinedInput-notchedOutline": {
                                // textAlign: "right !important",
                                // borderColor: "rgba(0, 0, 0, 0.5) !important",
                                fontFamily: "Segoe UI",
                                fontSize: "18px",
                                fontWeight: "bold",
                              },
                              "& .Mui-focused": {
                                color: "rgba(0, 0, 0, 0.5) !important",
                                fontFamily: "Segoe UI",
                                fontSize: "18px",
                                fontWeight: "bold",
                              },
                            }}
                          />
                          <IconButton
                            sx={{
                              position: "absolute",
                              right: "20px",
                              top: "10px",
                            }}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </div>
                      </div>
                      <div className={styles.passwordDiv}>
                        <div style={{ position: "relative" }}>
                          <TextField
                            required
                            id="outlined-required "
                            label="تأكيد كلمة السر"
                            placeholder="تأكيد كلمة السر"
                            fullWidth
                            size="small"
                            autoFocused
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            margin="dense"
                            onChange={(e) => setPass(e.target.value)}
                            value={pass}
                            sx={{
                              '& .muirtl-1sumxir-MuiFormLabel-root-MuiInputLabel-root ':{
                                fontFamily:"Segoe UI",
                                fontSize:"18px",
                                color:"rgba(0, 0, 0, 0.44)",
                                fontWeight: "bold",
                              },
                              "& .muirtl-1pysi21-MuiFormLabel-root-MuiInputLabel-root ":
                                {
                                  fontFamily: "Segoe UI",
                                  fontSize: "18px",
                                },
                              "& .muirtl-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  fontSize: "18px !important",
                                },
                              "& .MuiOutlinedInput-notchedOutline": {
                                // textAlign: "right !important",
                                // borderColor: "rgba(0, 0, 0, 0.5) !important",
                                fontFamily: "Segoe UI",
                                fontSize: "18px",
                                fontWeight: "bold",
                              },
                              "& .Mui-focused": {
                                color: "rgba(0, 0, 0, 0.5) !important",
                                fontFamily: "Segoe UI",
                                fontSize: "18px",
                                fontWeight: "bold",
                              },
                            }}
                          />
                          <IconButton
                            sx={{
                              position: "absolute",
                              right: "20px",
                              top: "10px",
                            }}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </div>
                      </div>
                            <div className={styles.loginBtnDiv} style={{marginTop:"45px"}}>
                              <Button
                                size="large"
                                className={styles.loginBtn}
                                block
                                onClick={props.handleLogin}
                                type="button"
                              > 
                              تأكيد
                              </Button>
                            </div>
                          </div>
                        </ThemeProvider>
                      </CacheProvider>
                    </Box>
                    
                  </form>
                </div>
                </>
                ):(
                <>
                <div className={styles.formWrapperDiv}>
                  <div className={styles.loginWord}>
                    <p>تأكيد الحساب</p>
                  </div>
                 
                    <p style={{color:"#4B4B4B"}}>ادخل الكود الذي تلقيته على بريدك الإلكتروني</p>
                  
                    <div className={styles.otpInput}>
                    <OtpInput
                      value={code}
                      onChange={handleChange}
                      numInputs={4}
                      separator={<span style={{ width: "8px" }}></span>}
                      isInputNum={true}
                      shouldAutoFocus={true}
                      className={styles.otpInput}
                      inputStyle={{
                      border: "1px solid #707070",
                      borderRadius: "8px",
                      width: "35px",
                      height: "35px",
                      fontSize: "16px",
                      color: "#000",
                      fontWeight: "400",
                      caretColor: "blue",
                      direction:"ltr !important",
                      margin:"30px 12px 0 12px"

                      }}
                      focusStyle={{
                      border: "1px solid #707070",
                      outline: "none"
                      }}
                  />
                    </div>

                  <form className={styles.formBody}>
                    <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, direction: "rtl" },
                    }}
                    autoComplete="off"
                    >
                    <CacheProvider value={cacheRtl}>
                    <ThemeProvider theme={theme}>
                    <div className={styles.formDivs}>
                            <div className={styles.loginBtnDiv} style={{marginTop:"45px"}}>
                              <Button
                                size="large"
                                className={styles.loginBtn}
                                block
                                onClick={() => {
                                setconfirmedEmail(true)
                                }}
                                type="button"
                              > 
                              تأكيد
                              </Button>
                            </div>
                            <div style={{display:"flex"}}>
                              <p style={{color:"#4B4B4B"}}>لم يصلك كود على بريدك الالكتروني؟ </p>
                              <Button 
                               type="link"
                               style={{color:"#4B4B4B",fontWeight:"bold",marginTop:"12px",marginRight:"-10px"}}
                              >إعادة  ارسال</Button>
                            </div>
                          </div>
                        </ThemeProvider>
                      </CacheProvider>
                    </Box>
                    
                  </form>
                </div>
                </>
                )}
                </>
                ):(
                <>
                
                <div className={styles.formWrapperDiv}>
                  <div className={styles.loginWord}>
                    <p>نسيت كلمة المرور ؟</p>
                  </div>
                  <form className={styles.formBody}>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, direction: "rtl" },
                      }}
                      autoComplete="off"
                    >
                      <CacheProvider value={cacheRtl}>
                        <ThemeProvider theme={theme}>
                          <div className={styles.formDivs}>
                            <div className={styles.EmailDiv} style={{marginTop:"15px"}} dir="rtl">
                              <TextField
                                autoFocus
                                type="text"
                                required
                                id="outlined"
                                fullWidth
                                label=" الايميل"
                                variant="outlined"
                                placeholder="الايميل"
                                onChange={(e) => setEmail(e.target.value)}
                                value={Email}
                                size="small"
                                margin="dense"
                                sx={{
                                  '& .muirtl-1sumxir-MuiFormLabel-root-MuiInputLabel-root ':{
                                    fontFamily:"Segoe UI",
                                    fontSize:"18px",
                                    color:"rgba(0, 0, 0, 0.44)",
                                    fontWeight: "bold",
                                  },
                                  "& .muirtl-1pysi21-MuiFormLabel-root-MuiInputLabel-root ":
                                    {
                                      fontFamily: "Segoe UI",
                                      fontSize: "18px",
                                    },
                                  "& .muirtl-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                    {
                                      fontSize: "18px !important",
                                    },
                                  "& .MuiOutlinedInput-notchedOutline": {
                                    // textAlign: "right !important",
                                    // borderColor: "rgba(0, 0, 0, 0.5) !important",
                                    fontFamily: "Segoe UI",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  },
                                  "& .Mui-focused": {
                                    color: "rgba(0, 0, 0, 0.5) !important",
                                    fontFamily: "Segoe UI",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                  },
                                }}
                              />
                            </div>
                            
                            <div className={styles.loginBtnDiv}>
                              <Button
                                size="large"
                                className={styles.loginBtn}
                                block
                                onClick={() => handleSendEmail()}
                                type="button"
                              > 
                              ارسال
                              </Button>
                            </div>
                          </div>
                        </ThemeProvider>
                      </CacheProvider>
                    </Box>
                    
                  </form>
                </div>
                
                </>
                )}
              </div>
             
            </div>
          </>
           
           );

      }
}
 
 