import Style from './Sale.module.css'
import  './Table.css'
import "./Sale.module.css";
import { AiFillPrinter,AiOutlinePlusCircle} from 'react-icons/ai';
import {FaRegCopy,FaCopy} from 'react-icons/fa';
import {RiFileList2Fill} from 'react-icons/ri';
import { HeaderComponent } from '../../../components/Header/Header'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Popconfirm, Table,Typography,message } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import CancelSharp from "@mui/icons-material/CancelSharp";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {Search} from '../../../components/Search/Search'
import dayjs from 'dayjs';

const { Text } = Typography;
const date=dayjs().format('DD/MM/YYYY');
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
        <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
        >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

export const Sale =()=>  {
  const [dataSourceCopy, setdataSourceCopy] = useState([
    {
      key: 1,
      code:'1234',
      name: 'طماطم',
    },
    {
      key: 2,
      code:'1235',
      name: 'بطاتس',
    },
    {
      key: 3,
      code:'1236',
      name: 'كوسة',
    },
    {
      key: 4,
      code:'1237',
      name: 'كرمب',
    },
    {
      key: 5,
      code:'1238',
      name: 'خيار',
    },
    {
      key: 6,
      code:'1239',
      name: 'جزر',
    },
    {
      key: 7,
      code:'1240',
      name: 'باذنجان',
    },
    {
      key: 8,
      code:'1241',
      name: 'طماطم',
    },
  ]);
  const [dataSource, setDataSource] = useState([
    {
      key: 1,
      code:null,
      name: null,
      store: null,
      num_pallets: null,
      num_packages:null,
      quantity:null,
      price:null,
      total:null
    },
  ]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const items =[
        {
            title:'رقم الفاتورة / 20',
            key:'1'
        },
        {
            title:' كود العميل /E254052',
            key:'2'
        }, {
            title:
            (<div>
               <span>اسم العميل/ </span>
              <input type="text" style={{
                fontSize:"18px",
                fontWeight:"500",
              }} />
            </div>
            )   ,
            key:'3'
        }, {
            title:`تاريخ الفاتورة/ ${date}`,
            key:'4'
        },
    ]
    const calculate =[
      {
        title:
        (  <div style={{
          display:'flex',
          width:'100%'
        }}>
          <span>اجمالي الفاتورة/</span>
          <Input style={{
            width:'50%',
            marginRight:'12px',
                fontSize:"16px"
              }}  type="text"/>
          </div>),
        key:'1'
      },
      {
        title:
        (  <div style={{
          display:'flex',
          width:'100%'
        }}>
          <span> الخصم/</span>
          <Input style={{
            width:'50%',
            marginRight:'12px',
                fontSize:"16px"
              }} type="text"/>
          </div>),
        key:'2'
      },  {
        title:
        (  <div style={{
          display:'flex',
          width:'100%'
        }}>
          <span> المصروف/</span>
          <Input style={{
            width:'50%',
            marginRight:'12px',
                fontSize:"16px"
              }} type="text"/>
          </div>),
        key:'3'
      },  {
        title:
        (  <div style={{
          display:'flex',
          width:'100%'
        }}>
          <span> سداد نقدي/</span>
          <Input style={{
            width:'50%',
            marginRight:'12px',
                fontSize:"16px"
              }} type="text"/>
          </div>),
        key:'4'
      },  {
        title:
        (  <div style={{
          display:'flex',
          width:'100%'
        }}>
          <span>اجل الفاتورة/</span>
          <Input style={{
            width:'50%',
            marginRight:'12px',
                fontSize:"16px"
              }} type="text"/>
          </div>),
        key:'5'
      },  {
        title:
        (  <div style={{
          display:'flex',
          width:'100%'
        }}>
          <span>صافي الفاتورة/</span>
          <Input style={{
            width:'50%',
            marginRight:'12px',
                fontSize:"16px"
              }} type="text"/>
          </div>),
        key:'6'
      }
      
    ]

      const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: 'كود الصنف',
      dataIndex: 'code',
      width: '10%',
      editable: true,
    },
    {
      title: 'اسم الصنف',
      dataIndex: 'name',
      width: '15%',
    },
    {
      title: 'المخزن المخصص',
      dataIndex: 'store',
      width: '15%',
    },
    {
      title: 'عدد البلتات',
      dataIndex: 'num_pallets',
      width: '15%',
      editable: true,
    }, 
    {
      title: 'عدد العبوات',
      dataIndex: 'num_packages',
      width: '10%',
      editable: true,
    }, 
    {
      title: 'الكمية بالطن',
      dataIndex: 'quantity',
      width: '10%',
      editable: true,
    },
    {
      title: 'سعر الطن',
      dataIndex: 'price',
      width: '10%',
      editable: true,
    },
    {
      title: 'الاجمالي',
      dataIndex: 'total',
      width: '10%',
      
    },
    {
      title: 'حذف',
      dataIndex: 'operation',
      width: '5%',
      render: (_, record) =>
            dataSource.length >= 1 ? (
              <Popconfirm
                title="هل تريد حذف هذا الصنف ؟"
                okText="نعم"
                okType="primary"
                cancelText="لا"
                onConfirm={() => handleDelete(record.key)}
              >
                {/* <a>Delete</a> */}
                <CancelSharp
                  style={{
                    color: "#B81414",
                    fontSize: "26px",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              </Popconfirm>
            ) : null,
      
    },
    // {
    //   title: 'operation',
    //   dataIndex: 'operation',
    //   render: (_, record) =>
    //     dataSource.length >= 1 ? (
    //       <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
    //         <a>Delete</a>
    //       </Popconfirm>
    //     ) : null,
    // },
  ];
  // const [messageApi, contextHolder] = message.useMessage();
  const copyCode = () => {
    message.success('تم نسخ الكود بنجاح');
  };
  const defaultDialogColumns = [
    {
      title: 'كود الصنف',
      dataIndex: 'code',
      width: '10%',
      editable: true,
    },
    {
      title: 'اسم الصنف',
      dataIndex: 'name',
      width: '15%',
    },
    {
      title: 'نسخ',
      dataIndex: 'operation',
      width: '5%',
      render: (_, record) =>
            (
            <CopyToClipboard text={record.code} onCopy={() => copyCode()}>

            <FaCopy
             
              style={{
                color: "#2A2727 ",
                fontSize: "22px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
              }}
            />
          </CopyToClipboard>
            ) 
      
    },
    // {
    //   title: 'operation',
    //   dataIndex: 'operation',
    //   render: (_, record) =>
    //     dataSource.length >= 1 ? (
    //       <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
    //         <a>Delete</a>
    //       </Popconfirm>
    //     ) : null,
    // },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      code:``,
      name: ``,
      store: '',
      num_pallets: '',
      num_packages:'',
      quantity:'',
      price:'',
      total:''
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
 
    return (
     <>
       <HeaderComponent title="فاتورة بيع"/>
     
        <div className={Style.container}>
            <div className='ref' style={{display:'flex'}}>
            <RiFileList2Fill onClick={handleClickOpen} style={{
            fontSize:34,
            cursor: 'pointer'
          }}/>
          <span style={{ fontSize:18,color:'#000',marginRight:10 ,transition: 'display ease 3s'}} className='refrance' >فهرس الاكواد</span>
            </div>
           <div className={Style.sale}>
            <div className={Style.bill}>
                بيان الفاتورة
            </div>
            {items.map((item)=>(

                <h1 key={item.key}>{item.title}</h1>
            ))}
           </div>
           <div style={{
            height:"auto",
            marginTop:40,
            marginBottom:30,
           }}>
            <Table
                
                components={components}
                rowClassName={() => 'editable-row'}
                bordered={true}
                dataSource={dataSource}
                columns={columns}
                size='middle'
                locale={{ emptyText: "لا توجد نتائج" }}
                pagination={{
                  position: ['bottomRight'],
                  pageSize:4,
                }}
                summary={(pageData) => {
                  console.log(pageData);
                  let totalBorrow = 0;
                  let totalRepayment = 0;
                  pageData.forEach(({ borrow, repayment }) => {
                    console.log(borrow);
                    console.log(repayment);
                    totalBorrow += borrow;
                    totalRepayment += repayment;
                  });
            
                   
                    return(
                      <>
                     
                          <Table.Summary.Row>
                          <Table.Summary.Cell index={0} colSpan={3} style={{
                            fontSize: "20px",
                            
                          }}>الاجمالي</Table.Summary.Cell>
                          <Table.Summary.Cell index={1}>
                            <Text></Text>
                          </Table.Summary.Cell>
                          <Table.Summary.Cell index={2}>
                            <Text></Text>
                          </Table.Summary.Cell>
                          <Table.Summary.Cell index={3}>
                            <Text></Text>
                          </Table.Summary.Cell>
                          <Table.Summary.Cell index={4}>
                            <Text></Text>
                          </Table.Summary.Cell>
                          <Table.Summary.Cell index={5}>
                            <Text></Text>
                          </Table.Summary.Cell>
                          <Table.Summary.Cell index={6}>
                            <Text></Text>
                          </Table.Summary.Cell>
                        </Table.Summary.Row>
                   
                  
                 
                    </>
                    )
       
                   
      
                  
                }}
            />
            </div>
           <div style={{
            position: 'relative',
          
          }}>
           <Button
                onClick={handleAdd}
                type="button"
                style={{
                marginBottom: 16,
                float:'left',
                left: 12,
                background:"#2A2727",
                color:"white",
                borderRadius:"12px",
                position: 'flex'
               
                }}
            >
                اضافة صف
            </Button>
           </div>
        <div style={{
          position:'relative',      
        }}>
        <div className={Style.saleCalc}>
            <div className={Style.bill}>
                حساب الفاتورة
            </div>
            {calculate.map((item)=>(

               <h1 key={item.key}>{item.title}</h1>
            ))}
           </div>
            <div style={{
              // position: 'absolute',
              display: 'grid',
              left: 0,
              width:'fit-content',
              float: 'left',
              gridTemplateColumns:'auto auto ',
              marginTop:'-40px',
              marginRight:"40px",
              marginLeft:"-30px",
            }}>
            <Button
              
              type="button"
              style={{
              marginBottom: 16,
              float:'left',
              left: 12,
              background:"#2A2727",
              color:"white",
              borderRadius:"12px",
              display: 'flex',
              marginRight:20
             
              }}
          >
           <span> طباعة </span><AiFillPrinter style={{
              marginRight:5,
              fontSize:20
            }}/>          
          </Button>
          <Button
              
              type="button"
              style={{
              marginBottom: 16,
              float:'left',
              left: 12,
              background:"#2A2727",
              color:"white",
              borderRadius:"12px",
              display: 'flex',
              marginRight:20
             
              }}
              >
            <AiOutlinePlusCircle style={{
              marginLeft:3,
              fontSize:20
            }}/>
            اضافة 
          </Button>
            </div>
        </div>
        </div>
        <div>
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
          
            "& .MuiDialog-paper": {
              width: "100vw !important",
              maxWidth: "auto !important",
              borderRadius: "12px",

            },
            zIndex: "2 !important"
        }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"  style={{     
            height: '57px',
            fontWeight: 600,
            textAlign: 'right',
            display: 'flex',
            background: 'rgb(48 48 48)',
            alignItems: 'center',
            color: 'white',
            marginBottom: '10px',
    }}>        
           
              <RiFileList2Fill onClick={handleClickOpen} style={{
                  fontSize:30,
                  cursor: 'pointer'
                }}/>
              <p style={{ marginRight: "1em" }}>ابحث في الاصناف</p>
         
          </DialogTitle>
          <DialogContent>
            {/* <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running.
            </DialogContentText> */}
             <Search placeholder='ابحث عن الصنف'/>
            <Table
                className='tableCopy'
                components={components}
                rowClassName={() => 'editable-row'}
                bordered={true}
                dataSource={dataSourceCopy}
                columns={defaultDialogColumns}
                size='middle'
                locale={{ emptyText: "لا توجد نتائج" }}
                pagination={{
                  position: ['bottomRight'],
                  pageSize:4,
                }}
                />

          </DialogContent>
          <DialogActions>
     
          </DialogActions>
        </Dialog>
        </div>
    
    
     </>
    )

}
