import styles from './OPCommands.module.css'
import { HeaderComponent } from "../../components/Header/Header"
import {BiSearch} from "react-icons/bi"
import { Input, Space,Table } from 'antd';

const { Search } = Input;
export const OpCommands = ()=>{
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
          num: 1234,
          name: "شركة الحرمين",
          item: "طماطم",
          
        },
        {
          key: '2',
          date: '11/01/2022',
          num: 1234,
          name: "شركة الحرمين",
          item: "طماطم",
          
        },
        {
          key: '3',
          date: '11/01/2022',
          num: 1234,
          name: "شركة الحرمين",
          item: "طماطم",
          
        },
      ];

    return(
        <>
        <div style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems:"center" }}>
         <HeaderComponent  title="أوامر تشغيل"  width="100%"/>

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
              placeholder='إبحث عن رقم الكارتة'
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
   
      <Column title='تاريخ الدخول' dataIndex="date" key="date" className={styles.coll}/>
      
    <Column className={styles.coll} title='رقم الكارتة' dataIndex="num" key="num" />
    <Column className={styles.coll} title='اسم المورد' dataIndex="name" key="name" />
    <Column className={styles.coll} title='اسم الصنف' dataIndex="name" key="item" />
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
          <button style={{width:"100px",borderRadius: "15px",
          backgroundColor: "green",color:"white",border:"none"}}>انهاء {record.lastName}</button>
          <button style={{width:"100px",borderRadius: "15px",border:"none"}}>تفاصيل</button>
        </Space>
      )}
    />
  </Table>
        </div>
        </>
    )
}