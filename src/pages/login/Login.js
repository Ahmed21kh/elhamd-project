import styles from "./Login.module.css";
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
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import OutlinedInput from '@mui/material/OutlinedInput';
import { useForm } from 'react-hook-form';

const theme = createTheme({
  direction: "rtl",
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export const Login = (props) => {
  console.log(props);

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [Passerror, setPasserror] = useState(false);
  const [UserNameerror, setUserNameerror] = useState(false);
  const Username = useRef(null);
  const Password = useRef(null);
 

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // {()=>{userName && pass !==''?props.login:null}}
    if(userName == ""){
      setUserNameerror(true)
      message.error("يجب ادخال اسم المستخدم")
    }else{
      setUserNameerror(false)
    }
    if(pass == ""){
      setPasserror(true)
      message.error("يجب ادخال كلمة السر ")
      
    }else{
      setPasserror(false)
    }
  }
  // console.log(errors);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  useEffect(() => {
    //  return () => {
    //    second
    //  }
  }, []);

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
          <div className={styles.formWrapperDiv}>
            <div className={styles.loginWord}>
              <p>تسجيل الدخول</p>
            </div>
            <form  onSubmit={handleSubmit(onSubmit)} className={styles.formBody}>
            {/* <div className={styles.formBody}> */}
              <Box
                component="form"
                onSubmit={onSubmit}
                sx={{
                  "& > :not(style)": { m: 1, direction: "rtl" },
                }}
                autoComplete="off"
                noValidate
              >
                <CacheProvider value={cacheRtl}>
                  <ThemeProvider theme={theme}>
                    <div className={styles.formDivs}>
                      <div className={styles.usernameDiv} dir="rtl">
                        <TextField
                          dir="rtl"
                          
                          type="text"
                          required
                          id="outlined"
                          label="اسم المستخدم"
                          variant="outlined"
                          placeholder="اسم المستخدم"
                          fullWidth
                          // {...register("exampleRequired", { required: true })}
                          error={UserNameerror}
                          ref={Username}
                          onChange={(e) => {
                            setUserName(e.target.value)
                            if(Username==''){
                              setUserNameerror(true)
                            }else{
                              setUserNameerror(false)
                            }
                                }}
                          value={userName}
                          size="small"
                          margin="dense"
                          sx={{
                            "& .muirtl-1sumxir-MuiFormLabel-root-MuiInputLabel-root ":
                              {
                                fontFamily: "Tajawal",
                                fontSize: "18px",
                                color: "rgba(0, 0, 0, 0.44)",
                                fontWeight: "bold",
                              },
                            "& .muirtl-1pysi21-MuiFormLabel-root-MuiInputLabel-root ":
                              {
                                fontFamily: "Tajawal",
                                fontSize: "18px",
                              },
                            "& .muirtl-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                              {
                                fontSize: "19px !important",
                                fontFamily: "Tajawal",
                                // fontWeight: "bold",
                              },
                            "& .MuiOutlinedInput-notchedOutline": {
                              // textAlign: "right !important",
                              // borderColor: "rgba(0, 0, 0, 0.5) !important",
                              fontFamily: "Tajawal",
                              fontSize: "18px",
                              fontWeight: "bold",
                            },
                            "& .Mui-focused": {
                              color: "rgba(0, 0, 0, 0.5) !important",
                              fontFamily: "Tajawal",
                              fontSize: "18px",
                              fontWeight: "bold",
                            },
                          }}
                        />
                        {/* {errors.exampleRequired && <span>This field is required</span>} */}
                       {/* {UserNameerror? <span style={{color:'red',position:"relative",fontSize:12}} >اسم المستخدم مطلوب !!</span> :null} */}

                      </div>
                      <div className={styles.passwordDiv}>
                        <div style={{ position: "relative" }}>
                          <TextField
                            required
                            id="outlined-required "
                            label="كلمة السر"
                            placeholder="كلمة السر"
                            fullWidth
                            size="small"
                            
                            type={showPassword ? "text" : "password"}
                           error={Passerror}
                            variant="outlined"
                            margin="dense"
                            onChange={(e) => {
                              setPass(e.target.value)
                              if( pass=='' ){
                                setPasserror(true)
                              }else{
                                setPasserror(false)
                              }
                            }}
                            value={pass}
                            sx={{
                              "& .muirtl-1sumxir-MuiFormLabel-root-MuiInputLabel-root ":
                                {
                                  fontFamily: "Tajawal",
                                  fontSize: "18px",
                                  color: "rgba(0, 0, 0, 0.44)",
                                  fontWeight: "bold",
                                },
                              "& .muirtl-1pysi21-MuiFormLabel-root-MuiInputLabel-root ":
                                {
                                  fontFamily: "Tajawal",
                                  fontSize: "18px",
                                },
                              "& .muirtl-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":
                                {
                                  fontSize: "19px !important",
                                  fontFamily: "Tajawal",
                                },
                              "& .MuiOutlinedInput-notchedOutline": {
                                // textAlign: "right !important",
                                // borderColor: "rgba(0, 0, 0, 0.5) !important",
                                fontFamily: "Tajawal",
                                fontSize: "18px",
                                fontWeight: "bold",
                              },
                              "& .Mui-focused": {
                                color: "rgba(0, 0, 0, 0.5) !important",
                                fontFamily: "Tajawal",
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
                      <div className={styles.loginBtnDiv}>
                        <Button
                          size="large"
                          className={styles.loginBtn}
                          block          
                          type="submit"
                          onClick={Username && pass == ''? handleSubmit(onSubmit): props.login}
                        >
                          تسجيل الدخول
                        </Button>
                      </div>
                    </div>
                  </ThemeProvider>
                </CacheProvider>
              </Box>
              <div style={{ marginTop: "15px" }}>
                <Button
                  onClick={props.handleResetPassword}
                  style={{
                    fontSize: "17px",
                    color: "blue",
                    fontFamily: "Segoe UI",
                  }}
                  type="link"
                  size="small"
                >
                  نسيت الباسورد ؟
                </Button>
              </div>
              
            {/* </div> */}
            </form>
          </div>
        </div>
       
      </div>
    </>
  );
};
