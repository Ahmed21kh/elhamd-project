import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "./SupplieresAccounting.module.css";
import { HeaderComponent } from "../../../components/Header/Header";
import { BiSearch, BiPencil } from "react-icons/bi";
import { FiSave, FiPlusCircle } from "react-icons/fi";
import { AiFillPrinter } from "react-icons/ai";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Input, Space, Table, Row, Col, Typography } from "antd";
// mui rtl textField
import TextField from "@mui/material/TextField";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

//mui rtl textField

import { GiCancel } from "react-icons/gi";
import { DatePicker } from "antd";

const { Search } = Input;
const { RangePicker } = DatePicker;
const { Text } = Typography;
export const SupplieresAccounting = () => {
  //states//

  const [showMainTable, setShowMainTable] = useState(true);
  const [showBillsTable, setShowBillsTable] = useState(false);
  const [showAccountTable, setShowAccountTable] = useState(false);
  ///

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
    console.log("aaaa");
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // end of modal functions

  //table data
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  //tables data

  const columns = [
   
    {
      title: "اسم المورد",
      dataIndex: "name",
    },
    {
      title: "الرصيد",
      dataIndex: "balance",
    },
    {
      title: "التفاصيل",
      dataIndex: "bills",
    },
    {
      title: "كشف الحساب",
      dataIndex: "account",
    },
  ];
  const showTableColumns = [
    {
      title: "تاريخ الوارد",
      dataIndex: "incoming",
    },
    {
      title: "تاريخ التشغيل",
      dataIndex: "work",
    },
    {
      title: "رقم السيارة",
      dataIndex: "car",
    },
    {
      title: " الصنف",
      dataIndex: "item",
    },
    {
      title: "وزن الخام",
      dataIndex: "raw",
    },
    {
      title: " الخصم",
      dataIndex: "discount",
    },
    {
      title: " الصافى",
      dataIndex: "net",
    },
    {
      title: " سعر الطن خام",
      dataIndex: "ton",
    },
    {
        title: "  وزن الفرزة",
        dataIndex: "sortWeight",
      },
      {
        title: " سعر  الفرزة",
        dataIndex: "sortPrice",
      },
      {
        title: " وزن الفرزة الزائدة",
        dataIndex: "overSortWeight",
      },
      {
        title: " نسبة الفرزة المسموح بها  ",
        dataIndex: "sortRatio",
      },
      {
        title: " نسبة الفرزة الفعلية",
        dataIndex: "actualSortRatio",
      },
      {
        title: "   دائن",
        dataIndex: "creditor",
      },
      {
        title: "   ملاحظات",
        dataIndex: "notes",
      },
  ];

  const showAccountTableColumns = [
    {
      title: "التاريخ",
      dataIndex: "date",
    },
    {
      title: " البيان",
      dataIndex: "report",
    },
    {
      title: "رقم التليفون",
      dataIndex: "phone",
    },
    {
      title: "مدين",
      dataIndex: "debtor",
    },
    {
      title: "دائن",
      dataIndex: "creditor",
    },
    {
      title: " رصيد",
      dataIndex: "balance",
    },
  ];
  const mainData = [];
  for (let i = 0; i < 5; i++) {
    mainData.push({
      key: i,
     
      name: ``,
      balance: "",
      bills: (
        <Button
          style={{
            borderRadius: "15px",
            color: "white",
            fontSize: "12px",
            backgroundColor: "#2A2727",
          }}
          onClick={() => {
            setShowMainTable(false);
            setShowAccountTable(false);
            setShowBillsTable(true);
          }}
        >
          عرض
        </Button>
      ),
      account: (
        <Button
          style={{
            borderRadius: "15px",
            color: "white",
            fontSize: "12px",
            backgroundColor: "#2A2727",
          }}
          onClick={() => {
            setShowMainTable(false);
            setShowAccountTable(true);
            setShowBillsTable(false);
          }}
        >
          كشف حساب
        </Button>
      ),
    });
  }

  const showTableData = [];
  for (let i = 0; i < 5; i++) {
    showTableData.push({
      key: i,
      billNum: "",
      itemName: "",
      packageNum: ``,
      itemNum: "",
      quantity: "",
      price: "",
      discount: "",
      total:""
    });
  }

  const showAccountTableData = [];
  for (let i = 0; i < 5; i++) {
    showAccountTableData.push({
      key: i,
      date: "",
      report: "",
      phone: ``,
      debtor: "",
      creditor: "",
      balance: "",
     
    });
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div style={{display: "flex"}}> */}
        <HeaderComponent title="حساب الموردين " />
        {/* </div> */}
        <div
          style={{
            display: "flex",
            width: "80%",
            margin: "3em auto",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          { !showAccountTable&&!showBillsTable?
          <div
            className={styles.searchWrapper}
            style={{
              width: "45%",
              borderRadius: "15px",
              boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.20)",
              textAlign: "center",
              position: "relative",
              display: "flex",
            }}
          >
            <div style={{ width: "20%" }}>
              <BiSearch
                style={{
                  fontSize: "20px",
                  position: "absolute",
                  top: "10px",
                  right: "20px",
                  opacity: "0.6",
                }}
              />
            </div>
            <input
              className={styles.inputSearch}
              type="search"
              placeholder="إبحث عن اسم المورد"
              style={{
                width: "80%",
                padding: "0.8em",
                border: "none",
                borderTopLeftRadius: "15px",
                borderBottomLeftRadius: "15px",
              }}
            />
          </div> :null
}

          <div
            style={{
              width: "50%",
              border: "1px solid gray",
              borderRadius: "15px",
              position: "relative",
              marginRight: showAccountTable||showBillsTable?"50%":"0px"

            }}
          >
            <p
              style={{
                position: "absolute",
                top: "-32px",
                right: "15px",
                padding: "0.5em",
                backgroundColor: "#fcfcfc",
              }}
            >
              اختر التاريخ
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0.8em 0.5em",
              }}
            >
              <div
                style={{
                  margin: "2em auto 0em",
                  width: "40%",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    top: "-32px",
                    right: "15px",
                    padding: "0.5em",
                    backgroundColor: "#fcfcfc",
                    zIndex: "999",
                    height: "20px",
                  }}
                >
                  من{" "}
                </p>
                <DatePicker
                  style={{
                    padding: "0.5em",
                    width: "100%",
                    borderColor: "gray",
                  }}
                  dateRender={(current) => {
                    const style = {};
                    if (current.date() === 1) {
                      style.border = "1px solid #1890ff";
                      style.borderRadius = "50%";
                    }
                    return (
                      <div className="ant-picker-cell-inner" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                />
              </div>
              <div
                style={{
                  margin: "2em auto 0em",
                  width: "40%",
                  position: "relative",
                }}
              >
                <p
                  style={{
                    position: "absolute",
                    top: "-32px",
                    right: "15px",
                    padding: "0.5em",
                    backgroundColor: "#fcfcfc",
                    zIndex: "999",
                    height: "20px",
                  }}
                >
                  إلى{" "}
                </p>
                <DatePicker
                  style={{
                    padding: "0.5em",
                    width: "100%",
                    borderColor: "gray",
                  }}
                  dateRender={(current) => {
                    const style = {};
                    if (current.date() === 1) {
                      style.border = "1px solid #1890ff";
                      style.borderRadius = "50%";
                    }
                    return (
                      <div className="ant-picker-cell-inner" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                />
              </div>
            </div>
          </div>
          {/* <button style={{width: "15%",height: "30px" ,padding:"0.5em 0em",border:"none",
           borderRadius:"15px",color: "white",backgroundColor:"#2A2727",display:"flex",
           alignItems:"center",justifyContent:"center"}}><FiPlusCircle style={{marginLeft: "0.5em"}}/>إضافة عميل</button> */}
        </div>
        {/* <Table
         columns={columns}
         dataSource={data}
          style={{width: "80%"}}
          pagination={false}

          /> */}
        <div className="tableDiv" style={{ width: "80%" }}>

        {
          showAccountTable?(<>
                       
           <div style={{width:"60%",margin:"2em auto",border:"1px solid",padding:"1em",position:"relative",border:"none",backgroundColor:"white",boxShadow:"1px 3px 10px 0px rgb(0 0 0 / 30%)"}}>
              <p style={{width:"25%",backgroundColor:"black",color:"white",borderRadius:"15px",position:"absolute",top:"-34px",right:"37.5%",padding:"0.5em",textAlign:"center",fontSize:"16px"}}>كشف حساب</p>
              <div style={{padding:"0.5em",fontSize:"16px"}}>{`اسم المورد / شركة الحمد`}</div>
              <div style={{marginTop:"1em",display:"flex",justifyContent:"space-between"}}>
                  <div style={{padding:"0.5em",fontSize:"16px"}}>
                  {`كود المورد /  1234`}
                  </div>
                  <div style={{padding:"0.5em",fontSize:"16px"}}>
                  {`رصيد سابق /  100000`}
                  </div>
              </div>
           </div>

          </>):null
        }

          {showMainTable ? (
            <Table
              bordered
              scroll={true}
             // rowSelection={rowSelection}
              columns={columns}
              dataSource={mainData}
             
            />
          ) : null}

          {showBillsTable ? (
            <>
              <Table
                // title={() => {
                //   return (
                //     <>
                //       <p>بيان الفاتورة</p>
                //     </>
                //   );
                // }}

                bordered
                scroll={{ x: 800 }}
               
                columns={showTableColumns}
                dataSource={showTableData}
                
              />
            </>
          ) : null}

          {showAccountTable ? (
            <>
              <Table
                
                bordered
                scroll={{ x: 700 }}
                rowSelection={rowSelection}
                columns={showAccountTableColumns}
                dataSource={showAccountTableData}
                summary={(pageData) => {
                  let totalBorrow = 0;
                  let totalRepayment = 0;

                  pageData.forEach(({ borrow, repayment }) => {
                    totalBorrow += borrow;
                    totalRepayment += repayment;
                  });

                  return (
                    <>
                      <Table.Summary.Row>
                        <Table.Summary.Cell colSpan={4}>
                          الإجمالى
                        </Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Text></Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Text></Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell>
                          <Text></Text>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                    </>
                  );
                }}
              />
            </>
          ) : null}
        </div>

        <div
          style={{
            width: "80%",
            margin: "2em auto",
            display: "flex",
            justifyContent: "end",
          }}
        >
          {!showMainTable ? (
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "15px",
                color: "white",
                width: "11%",
                backgroundColor: "#2A2727",
                fontSize: "16px",
              }}
              onClick={() => {
                setShowMainTable(true);
                setShowBillsTable(false);
                setShowAccountTable(false);
              }}
            >
              عودة
              <FaArrowAltCircleLeft style={{ marginRight: "0.5em" }} />
            </Button>
          ) : null}
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              color: "white",
              width: "11%",
              backgroundColor: "#2A2727",
              fontSize: "16px",
              marginRight: "0.5em",
            }}
          >
            طباعة
            <AiFillPrinter style={{ marginRight: "0.5em" }} />
          </Button>
        </div>
      </div>

      <Modal
        title=" تعديل بيانات العميل"
        closable={false}
        footer={
          <>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button
                style={{
                  width: "6em",
                  marginLeft: "0.5em",
                  padding: "0.5em 0em",
                  border: "none",
                  borderRadius: "15px",
                  color: "white",
                  backgroundColor: "#2A2727",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GiCancel style={{ marginLeft: "0.25em" }} /> حفظ{" "}
              </Button>
              <Button
                style={{
                  width: "6em",
                  marginLeft: "0.5em",
                  padding: "0.5em 0em",
                  border: "none",
                  borderRadius: "15px",
                  color: "white",
                  backgroundColor: "#2A2727",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <FiSave style={{ marginLeft: "0.25em" }} />
                إلغاء{" "}
              </Button>
            </div>
          </>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Row gutter={30}>
              <Col
                xs={24}
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  label="اسم المخزن"
                  id="outlined-size-small"
                  style={{ width: "90%" }}
                  size="small"
                />
              </Col>
              <Col
                xs={24}
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  label="عنوان المخزن"
                  id="outlined-size-small"
                  style={{ width: "90%" }}
                  size="small"
                />
              </Col>
            </Row>
            <Row gutter={30} style={{ marginTop: "4em" }}>
              <Col
                xs={24}
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  label="كود المخزن"
                  id="outlined-size-small"
                  style={{ width: "90%" }}
                  size="small"
                />
              </Col>
              <Col
                xs={24}
                md={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <TextField
                  label="نوع المخزن"
                  id="outlined-size-small"
                  style={{ width: "90%" }}
                  size="small"
                />
              </Col>
            </Row>
          </ThemeProvider>
        </CacheProvider>
      </Modal>
    </>
  );
};
