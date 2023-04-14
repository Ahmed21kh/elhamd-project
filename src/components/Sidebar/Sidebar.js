import style from './Sidebar.module.css';
import {HomeFilled ,ArrowDownOutlined,FileAddFilled} from '@ant-design/icons';
import { Image, Layout, Menu } from 'antd';
import React ,{useState} from 'react';
import logo from '../../assets/Group 935.png';
import GroupIcon from '@mui/icons-material/Group'
import { BsFillCalculatorFill ,BsFillSafeFill} from 'react-icons/bs';
import { GiEnergyTank} from 'react-icons/gi';
import { MdBusinessCenter} from 'react-icons/md';
import { FaChartPie} from 'react-icons/fa';
import { useNavigate,useHref } from "react-router-dom";
import { replace } from 'stylis';

const { Sider } = Layout;
function getItem(label, key, icon, children , path) {
  return {
    key,
    icon,
    children,
    label,
    path
    
  };
}
 const items = [
  getItem('الرئيسية', '/home', <HomeFilled />),
  getItem('اوامر التشغيل', '/op-commands', <ArrowDownOutlined />),
  getItem('مشتريات و مبيعات', 'sub1', <MdBusinessCenter />, [
    getItem('فاتورة بيع','/sale-bill'),
    getItem('فاتورة شراء', '/purchase-bill'),
    getItem('فاتورة تشغيل للغير', '/runtoOther-bill'),
    getItem('مشتريات الخام', '/row-purchases'),
  ]),
  getItem('تكويد واضافة', 'sub2', <FileAddFilled />, 
  [getItem('اضافة صنف', '/add-item'), 
  getItem('اضافة مخزن', '/add-store'),
  getItem('اضافة امر تشغيل', 'add-op-command'),
]),
  getItem('العملاء', 'sub3', <GroupIcon />,
  [getItem('قائمة العملاء', '/clients-list'), 

  ]),
  getItem('الموردين', 'sub4', <GroupIcon />,[
    getItem('قائمة الموردين', '/supplieres-list'),
    getItem('التوريدات', '/supplies'),
  ]),
  getItem('الحسابات', 'sub5', <BsFillCalculatorFill />,[
    getItem('حساب العملاء', '/clients-accounting'),
    getItem('حساب الموردين', '/supplieres-accounting'),
    getItem('حساب المبيعات', '/sales-accounting'),

    getItem('حساب المشتريات', '/purchases-accounting'),
  
    getItem('حساب المرتبات', '/salaries-counting'),
    getItem('حساب الضرائب', '18'),
    getItem('حساب المخازن', '/stores-counting'),
  ]),
  getItem('المخازن', 'sub6', <GiEnergyTank />,[
    getItem('مخزن المشتريات', '20'),
    getItem('مخزن المستلزمات', '21'),
    getItem('مخزن منتج تام', '22'),
  ]),
  getItem('خزنة', 'sub7', <BsFillSafeFill />,[
    getItem('سند صرف يومي', '/daily-voucherReceipt'),
    getItem('سند قبض يومي', '/daily-catchReceipt'),
  ]),
  getItem('تقارير', '25', <FaChartPie />),
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7'];
export const Sidebar=()=> {
 console.log(items);
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState([]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const location = useHref()
  const Navigations = (key) => {
    console.log(key);
    // const pathName=items.find(i=>i.key===key.key);
    // console.log(pathName);
     navigate(key , {replace: true});

  }
  return (
    <>

        <Sider
         className={style.sidebar}
         style={{
          overflow: 'auto',
          right: 0,
          top: 0,
          bottom: 0,
        }}
          breakpoint="lg"
          collapsedWidth="100"
          width={235}
          onBreakpoint={(broken) => {
            console.log(broken);
          } }
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          } }
        >
          <div className="logo" >
            <Image src={logo} preview={false} alt="logo" />
          </div>

          <Menu
            style={{marginTop: '100px'}}
            theme="dark"
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            defaultSelectedKeys={location}
            items={items} 
            onClick={({key})=>navigate(key)}
            />
           
        </Sider>
        
    
   
    </>
    )
}
