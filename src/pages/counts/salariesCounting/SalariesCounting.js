import React, { useState } from "react";
import { Button, Modal } from "antd";
import styles from "./SalariesCounting.module.css";
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
export const SalariesCounting = () => {
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
      title: "كود الموظف",
      dataIndex: "date",
    },
    {
      title: "اسم الموظف",
      dataIndex: "code",
    },
    {
      title: " الوظيفة",
      dataIndex: "name",
    },
    {
      title: "الراتب الأساسى",
      dataIndex: "balance",
    },
    {
      title: "المكافئات",
      dataIndex: "bills",
    },
    {
      title: "إجمالى الراتب",
      dataIndex: "account",
    },
    {
        title: " الإقطاعات",
        children : [
            {
                title: 'تأمين صحى',
                dataIndex: 'age',
                key: 'age',
                width: 150,
                
              },
              {
                title: ' ضريبة',
                dataIndex: 'age',
                key: 'age',
                width: 150,
                
              },
              {
                title: ' جزاءات',
                dataIndex: 'age',
                key: 'age',
                width: 150,
                
              },
              {
                title: ' سلف',
                dataIndex: 'age',
                key: 'age',
                width: 150,
                
              },
        ]

        
      },
      {
        title: "صافى الراتب",
        dataIndex: "netSalary"
      }
  ];

  const mainData = [];
  for (let i = 0; i < 5; i++) {
    mainData.push({
      key: i,
      date: "",
      code: "",
      name: ``,
      balance: "",
      bills: "" 
      ,
      account: "",
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
        <HeaderComponent title="حساب المرتبات " />
        {/* </div> */}
        <div
          style={{
            display: "flex",
            width: "95%",
            margin: "3em auto",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!showAccountTable ? (
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
                placeholder="إبحث عن اسم الموظف"
                style={{
                  width: "80%",
                  padding: "0.8em",
                  border: "none",
                  borderTopLeftRadius: "15px",
                  borderBottomLeftRadius: "15px",
                }}
              />
            </div>
          ) : null}

          <div
            style={{
              width: "40%",
              border: "1px solid gray",
              borderRadius: "15px",
              position: "relative",
              //  marginRight: showAccountTable?"50%":"0px"
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
        <div className="tableDiv" style={{ width: "95%" }}>
          <Table
            bordered
            scroll={{x: 900}}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={mainData}
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
                    <Table.Summary.Cell>
                      <Text></Text>
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
                    <Table.Summary.Cell>
                      <Text></Text>
                    </Table.Summary.Cell>
                    
                  </Table.Summary.Row>
                </>
              );
            }}
          />
        </div>

        <div
          style={{
            width: "80%",
            margin: "2em auto",
            display: "flex",
            justifyContent: "end",
          }}
        >
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
    </>
  );
};
