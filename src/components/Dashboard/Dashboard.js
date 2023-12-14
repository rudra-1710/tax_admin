import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import "./Dashboard.css"
function Dashboard() {
  const columns = [
      {
        name:'Serialnumber',
        selector:row =>row.Serialnumber
      },
      {
        name:'Name',
        selector:row =>row.Name
      },
      {
        name:'Assignment',
        selector:row =>row.Assignment
      },
      {
        name:'Status',
        selector:row =>row.Status
      }
      
  ];
  const data = [
    {
      id :1,
      Name :'vijay',
      Assignment: 'done',
      Status :'inctive',
      Serialnumber:'1'
      

    },
    {
      id :5,
      Name :'vijay',
      Assignment: 'done',
      Status :'inctive',
      Serialnumber:'2'
      

    },
    {
      id :4,
      Name :'Rudra',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'3'
      

    },
    {
      id :3,
      Name :'vani',
      Assignment: 'done',
      Status :'inctive',
      Serialnumber:'4'
  

    },
    {
      id :2,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'5'
    

    },
    {
      id :6,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'6'
  

    },
    {
      id :7,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'7'
  

    },
    {
      id :8,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'8'
  

    },
    {
      id :9,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'9'
  

    },
    {
      id :10,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'10'
  

    },
    {
      id :11,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'11'
  

    },
    {
      id :13,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'12'
  

    },
    {
      id :12,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'13'
  

    },
    {
      id :14,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'14'
  

    },
    {
      id :15,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'3'
  

    },
    {
      id :16,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'15'
  

    },
    {
      id :17,
      Name :'siddhu',
      Assignment: 'done',
      Status :'active',
      Serialnumber:'16'
  

    },
    
  ]
  const [serchdata, setSerchdata] = useState(data);
  function handleFilter (event) {
    const newData= data.filter(row=>{
      return row.Name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setSerchdata([...newData])
  }
  return (
    <div className='container'>
      <div className='text-end'>
        <input type='text' placeholder='Search By Name ' onChange={handleFilter}  />
      <input type='date'/>
      </div>
      
      <DataTable 
      columns ={columns}
      data ={serchdata} 
      selectableRows
      fixedHeader
      pagination>
      </DataTable>

    </div>
  )
}

export default Dashboard