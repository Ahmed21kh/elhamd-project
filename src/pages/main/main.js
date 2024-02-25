import { HeaderComponent } from "../../components/Header/Header";
import styles from "./Main.module.css";
import React from "react";
import { Breadcrumb, Layout, Menu, theme, Button, Dropdown, Card } from "antd";
import { FaTree } from "react-icons/fa";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Background from "../../assets/alhamd-word.png";
//import BGImg from "../../assets/main-bg.png"

const { Header, Content, Footer } = Layout;

export const Main = ({logout}) => {
// const {logout} = props;
// console.log(props);
  const items = [
    {
      label: " مشتريات و مبيعات",
      key: "selling",
      // icon: <SettingOutlined />,
      children: [
        {
          label:'فاتورة بيع',
          key: "/sale-bill",
        },
        {
          label: "فاتورة شراء",
          key: "/purchase-bill",
        },

        {
          label: "فاتورة تشغيل للغير",
          key: "/runtoOther-bill",
        },
        {
          label: "مشتريات خام",
          key: "/row-purchases",
        },
      ],
    },
    {
      label:' أوامر التشغيل',
      key: "/op-commands",
      // icon: <AppstoreOutlined />,
      //disabled: true,
    },
    {
      label: " تكويد و إضافة",
      key: "coding",
      // icon: <SettingOutlined />,
      children: [
        {
          label: 'اضافة صنف' ,
          key: '/add-item',
        },
        
        {
          label: 'اضافة امر التشغيل',
          key: '/add-op-command',

        },

        {
          label:' إضافة مخزن' ,
          key: "/add-store",
        },
        {
          label:' إضافة موظف' ,
          key: "/add-emp",
        },
      ],
    },
    {
      label: "العملاء ",
      key: "clients",
      // icon: <SettingOutlined />,
      children: [
        {
          label:'قائمة العملاء',
          key: "/clients-list",
        },
      ],
    },
    {
      label: "الموردين ",
      key: "supplieres",
      // icon: <SettingOutlined />,
      children: [
        {
          label:'قائمة الموردين',
          key: "/supplieres-list",
        },
        {
          label:'التوريدات',
          key: "/supplies",
        },
      ],
    },
    {
      label: "الحسابات",
      key: "accounts",
      // icon: <SettingOutlined />,
      children: [
        {
          label: "حساب العملاء",
          key: "/clients-accounting",
        },
        {
          label:'حساب المبيعات',
          key: "/sales-accounting",
        },
        {
          label: 
             "حساب الموردين"
           
          ,
          key: "/supplieres-accounting",
        },
        {
          label:'حساب المشتريات',
          key: "/purchases-accounting",
        },
        {
          label: "حساب المرتبات",
          key: "/salaries-counting",
        },
        {
          label: (
            <p
              onClick={() => {
                navigate("/supplies");
              }}
            >
              {" "}
              حساب الضرائب
            </p>
          ),
          key: "supplies",
        },
        {
          label: "حساب المخازن",
          key: "/stores-counting",
        },
      ],
    },
    {
      label: "المخازن ",
      key: "stores",
      // icon: <SettingOutlined />,
      children: [
        {
          label: "Option 1",
          key: "setting:1",
        },
        {
          label: "Option 2",
          key: "setting:2",
        },

        {
          label: "Option 3",
          key: "setting:3",
        },
        {
          label: "Option 4",
          key: "setting:4",
        },
      ],
    },
    ,
    {
      label: " الخزنة",
      key: "safe",
      // icon: <SettingOutlined />,
      children: [
        {
          label: "سند صرف يومي",
          key: "/daily-voucherReceipt",
        },
        {
          label: "سند قبض يومي",
          key: "/daily-catchReceipt",
        }
      ],
    },
    {
      label: "تقارير",
      key: "reports",
      // icon: <SettingOutlined />,
      children: [
        {
          label: "Option 1",
          key: "setting:1",
        },
        {
          label: "Option 2",
          key: "setting:2",
        },

        {
          label: "Option 3",
          key: "setting:3",
        },
        {
          label: "Option 4",
          key: "setting:4",
        },
      ],
    },
    // {
    //   label: (
    //     <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
    //       Navigation Four - Link
    //     </a>
    //   ),
    //   key: 'alipay',
    // },
  ];

  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key)
  };

  return (
    <>
      <div>
        <Header
          style={{ display: "flex", backgroundColor: "black", width: "100%" }}
        >
          {/* <div className="logo" /> */}
          <div
            className={styles.navImg}
            style={{
              width: "10%",
              height: "50px",
              position: "absolute",
              right: "2%",
              marginTop: "0.5em",
            }}
          ></div>

          <Menu
            onClick={onClick}
            //selectedKeys={[current]}
            mode="horizontal"
            items={items}
            style={{
              width: "70%",
              backgroundColor: "black",
              color: "white",
              position: "absolute",
              right: "20%",
            }}
          />
          <div  style={{display:'flex',width:'100%',justifyContent:'end'}}>
          <button onClick={logout}  style={{background:'#000',color:"#fff",cursor:'pointer',border:'none'}}>تسجيل الخروج</button>
          </div>
        </Header>
      </div>
      <div>
        <Content style={{ width: "100% !important" }}>
          <div
            className="site-layout-content"
            style={{ background: colorBgContainer }}
          >
            <div
              className={styles.img}
              style={{ height: "265px", width: "100%" }}
            ></div>
            <div style={{ padding: "2em 2em 0em 2em" }}>
              <p
                style={{
                  textAlign: "right",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                {" "}
                نبذة عن الشركة
              </p>
              <p style={{ textAlign: "right", fontSize: "16px" }}>
                {" "}
                تتميز شركة الحمد لفرز و تعبئة الحاصلات الزراعية بأنها واحدة من
                أهم محطات فرز و تعبئة الخضروات والفواكه نظرا لما تتمتع به من
                خبرة واسعة فى مجال الفرز و التعبئة
              </p>
            </div>
            <div style={{ padding: "2em 2em 0em 2em" }}>
              <p
                style={{
                  textAlign: "right",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                البيانات الخاصة بالتصدير
              </p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card
                  title="سبق التصدير"
                  bordered={false}
                  style={{
                    width: "20%",
                    boxShadow: "none"
                  }}
                >
                  <p style={{padding:"0.5em 1em"}}> نعم</p>
                 
                </Card>

                
                <Card
                  title=" عدد سنوات الخبرة"
                  bordered={false}
                  style={{
                    width: "20%",
                    boxShadow: "none"
                  }}
                >
                  <p style={{padding:"0.5em 1em"}}> 5</p>
                 
                </Card>
                {/* <div>
                  <p
                    style={{
                      borderBottom: "1px solid",
                      height: "2em",
                      textAlign: "right",
                    }}
                  >
                    منتجات التصدير
                  </p>
                  <p style={{ textAlign: "right" }}>
                    خط انتاج البقوليات (فول - عدس - فاصوليا){" "}
                  </p>
                  <p style={{ textAlign: "right" }}>
                    خط انتاج المحاصيل (ذرة - أرز - قمح){" "}
                  </p>
                </div> */}
                <Card
                  title=" منتجات التصدير  "
                  bordered={false}
                  style={{
                    width: "20%",
                    boxShadow: "none"
                  }}
                >
                  <p style={{padding:"0.5em 1em"}}>
                    خط انتاج البقوليات (فول - عدس - فاصوليا){" "}
                  </p>
                  <p style={{padding:"0.5em 1em"}}>
                    خط انتاج المحاصيل (ذرة - أرز - قمح){" "}
                  </p>
                  
                 
                </Card>
                
              <Card
                  title=" الأسواق التصديرية المستهدفة   "
                  bordered={false}
                  style={{
                    width: "20%",
                    boxShadow: "none"
                  }}
                >
                  <p style={{padding:"0.5em 1em"}}>
                  الدول العربية
                  </p>
                  <p style={{padding:"0.5em 1em"}}>
                  شرق إفريقيا
                  </p>
                  
                 
                </Card>
                </div>
            </div>

            <div style={{ padding: "2em 2em 0em 2em" }}>
              <p
                style={{
                  textAlign: "right",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                البيانات الخاصة بالشركة
              </p>
              <div style={{ display: "flex", justifyContent: "space-between",marginBottom:"3em" }}>
                
                <Card
                  title ={ (
                    <>
                    <FaTree style={{ fontSize: "20px", color: "green" }} />
                    أهدافنا
                    </>
                  )}
                  bordered={false}
                  style={{
                    width: "30%",
                    boxShadow: "none"
                  }}
                >
                  
                  <p style={{padding:"0.5em 1em"}}>
                  الكفاءة العالية و المحافظة على ثقة العميل  والحفاظ على
                    أعلى درجات الجودة و الأمان{" "}
                  </p>
                  
                 
                </Card>

                
                <Card
                  title ={ (
                    <>
                    <FaTree style={{ fontSize: "20px", color: "green" }} />
                    منتجاتنا
                    </>
                  )}
                  bordered={false}
                  style={{
                    width: "30%",
                    boxShadow: "none"
                  }}
                >
                  
                  <p style={{padding:"0.5em 1em"}}>
                  منتجاتنا ذات جودة عالية تلائم جميع
                    المواصفات و المقاييس العالمية و المحلية
                  </p>
                  
                 
                </Card>
                
                <Card
                  title ={ (
                    <>
                    <FaTree style={{ fontSize: "20px", color: "green" }} />
                    خدمتنا
                    </>
                  )}
                  bordered={false}
                  style={{
                    width: "30%",
                    boxShadow: "none"
                  }}
                >
                  
                  

                  <p style={{padding:"0.5em 1em"}}>
                    استيراد و تصدير المنتجات الزراعية{" "}
                  </p>
                  <p style={{padding:"0.5em 1em"}}>
                    {" "}
                    توزيع جميع المحاصيل الزراعية{" "}
                  </p>
                  
                 
                </Card>
              </div>
            </div>
          </div>
        </Content>
      </div>
      <div>
        <Footer
          style={{
            width: "100% !important",
            textAlign: "center",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <div>
              <p style={{ textAlign: "write", color: "white" }}>
                سجل فى النشرة البريدية ليصلك كل ما هو جديد فى مجال تنمية
                الصادرات
              </p>
            </div>
            <div style={{ marginTop: "2em" }}>
              <input
                style={{
                  width: "75%",
                  padding: "0.5em 0.5em",
                  border: "none",
                  textAlign: "right",
                }}
                type="text"
                placeholder="ادخل البريد الالكترونى"
              />
              <button
                style={{
                  width: "25%",
                  padding: "0.5em 0em",
                  border: "none",
                  backgroundColor: "gray",
                  color: "white",
                }}
              >
                اشتراك
              </button>
            </div>
            <div
              style={{
                marginTop: "2em",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                {" "}
                <p style={{ color: "white" }}>يمكنك متابعتنا عبر</p>{" "}
              </div>
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {" "}
                <BsInstagram
                  style={{ color: "green", fontSize: "30px" }}
                />{" "}
                <BsFacebook style={{ color: "blue", fontSize: "30px" }} />
              </div>
            </div>
          </div>

          <div>
            <p
              style={{ textAlign: "write", color: "white", cursor: "pointer" }}
            >
              الروابط
            </p>
            <div style={{display:"flex"}}>
            <p
              className={styles.footerLinks}
              style={{ textAlign: "write", color: "white", cursor: "pointer" }}
            >
              الرئيسية
            </p>
            </div>
            <div style={{display:"flex"}}>
            <p
              className={styles.footerLinks}
              style={{ textAlign: "write", color: "white", cursor: "pointer" }}
            >
              التقارير
            </p>
            </div>
            <div style={{display:"flex"}}>
            <p
              className={styles.footerLinks}
              style={{ textAlign: "write", color: "white", cursor: "pointer" }}
            >
              العملاء
            </p>
            </div>
            <p
              className={styles.footerLinks}
              style={{ textAlign: "write", color: "white", cursor: "pointer" }}
            >
              الموردين
            </p>
          </div>

          <div>
            <p style={{ textAlign: "right", color: "white" }}>اتصل بنا</p>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  textAlign: "right",
                  color: "white",
                  marginLeft: "2em",
                  width: "20%",
                }}
              >
                التليفون
              </p>
              <p
                style={{
                  textAlign: "right",
                  color: "white",
                  marginRight: "0.5em",
                  width: "80%",
                }}
              >
                01060003961 - 01009505315
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  textAlign: "right",
                  color: "white",
                  marginLeft: "2em",
                  width: "30%",
                }}
              >
                الفاكس
              </p>
              <p
                style={{
                  textAlign: "left",
                  color: "white",
                  marginRight: "0.5em",
                  width: "70%",
                }}
              >
                +20403105581+
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  textAlign: "right",
                  color: "white",
                  marginLeft: "2em",
                  width: "45%",
                }}
              >
                البريد الإلكترونى
              </p>
              <p
                style={{
                  textAlign: "left",
                  color: "white",
                  marginRight: "0.5em",
                  width: "55%",
                }}
              >
                info@alhamdagri.net
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p
                style={{
                  textAlign: "right",
                  color: "white",
                  marginLeft: "2em",
                  width: "15%",
                }}
              >
                العنوان{" "}
              </p>
              <p
                style={{
                  textAlign: "left",
                  color: "white",
                  marginRight: "0.5em",
                  width: "85%",
                }}
              >
                Meniel Elhuwishat, Tanta, Egypt
              </p>
            </div>
          </div>
        </Footer>
      </div>
    </>
  );
};
