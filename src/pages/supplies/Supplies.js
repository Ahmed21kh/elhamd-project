import styles from './Supplies.module.css'
import { HeaderComponent } from "../../components/Header/Header"
import {BiSearch,BiDetail} from "react-icons/bi"
import {ArrowDownOutlined} from "@ant-design/icons"
import { Input, Space,Table } from 'antd';

const { Search } = Input;
export const Supplies = ()=>{
    const { Column, ColumnGroup } = Table;
    // const columns = [
    //     {
    //       title: 'تاريخ الدخول',
    //       dataIndex: 'date',
    //     },
    //     {
    //       title: 'رقم الكارتة',
    //       dataIndex: 'num',
    //     },
    //     {
    //       title: 'اسم المورد',
    //       dataIndex: 'name',
    //     },
    //     {
    //         title: 'اسم الصنف',
    //         dataIndex: 'item',
    //       },
    //       {
    //         title: 'اجراءات ',
    //         dataIndex: 'procedures',
    //       },
    //   ];
      const data = [
        {
          key: '1',
          date: '11/01/2022',
          suppliesCode: 56563220,
          supplierCode: " E254052",
          supplierName: "شركة الحرمين",
          itemName: "طماطم",
          quantity: "12طن",
          
        },
        {
          key: '2',
          date: '11/01/2022',
          suppliesCode: 56563220,
          supplierCode: " E254052",
          supplierName: "شركة الحرمين",
          itemName: "طماطم",
          quantity: "12طن",
          
        },
        {
          key: '3',
          date: '11/01/2022',
          suppliesCode: 56563220,
          supplierCode: " E254052",
          supplierName: "شركة الحرمين",
          itemName: "طماطم",
          quantity: "12طن",
          
        },
      ];

    return(
        <>
        <div style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems:"center" }}>
         <HeaderComponent  title=" التوريدات"  width="100%"/>

          <div
          className={styles.searchWrapper}
          style={{width: "40%", margin: "3em auto", borderRadius: "15px"
          ,boxShadow:"5px 5px 10px 2px rgba(0,0,0,0.20)",textAlign:"center",position:"relative",display:'flex'}}>
       <div style={{width: "20%"}}> 
       <BiSearch style={{ fontSize:"20px",position:"absolute",top: "10px",right:"20px",opacity: "0.6" }}/>
       </div> 
              <input
              className={styles.inputSearch}
              type="search"  
              placeholder='إبحث عن اسم المورد'
                  style={{width:"80%",padding:"0.8em",border:"none",
                  borderTopLeftRadius:"15px",
                  borderBottomLeftRadius:"15px"
                 }}/>
                 {/* <Search
      placeholder="input search text"
     // onSearch={onSearch}
      style={{
        width: "100%",
      }}
    /> */}
         </div>

         {/* <Table 
         columns={columns} 
         dataSource={data}
          style={{width: "80%"}} 
          pagination={false}
          
          /> */}

<Table 
dataSource={data}
pagination={false}
className={styles.tabl}
style={{width: "80%",marginTop: "2em",boxShadow: "1px 3px 10px 0px rgb(0 0 0 / 30%)"}} 
scroll={{x:700}}
>
   
      <Column title='تاريخ التوريد' dataIndex="date" key="date" className={styles.coll}/>
      <Column className={styles.coll} title='كود التوريد' dataIndex="suppliesCode" key="suppliesCode" />
    <Column className={styles.coll} title='كود المورد' dataIndex="supplierCode" key="supplierCode" />
    <Column className={styles.coll} title='اسم المورد' dataIndex="supplierName" key="supplierName" />
    <Column className={styles.coll} title='اسم الصنف' dataIndex="itemName" key="itemName" />
    <Column className={styles.coll} title=' الكمية' dataIndex="quantity" key="quantity" />
    {/* <Column
      title="Tags"
      dataIndex="tags"
      key="tags"
      render={(tags) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    /> */}
    <Column
      title="اجراءات"
      key="procedures"
      render={(_, record) => (
        <Space size="middle">
          <button style={{width: "110px",height: "30px" ,padding:"0.5em 0em",border:"none",
           borderRadius:"15px",color: "white",backgroundColor:"#2A2727",display:"flex",
           alignItems:"center",justifyContent:"center"}}><ArrowDownOutlined  style={{marginLeft: "0.5em"}}/>أمر تشغيل</button>
          <button style={{width: "110px",height: "30px" ,padding:"0.5em 0em",border:"1px solid gray",
           borderRadius:"15px",display:"flex",
           alignItems:"center",justifyContent:"center"}}><BiDetail style={{marginLeft: "0.5em"}}/>إضافة عميل</button>
        </Space>
      )}
    />
  </Table>
        </div>
        </>
    )
}