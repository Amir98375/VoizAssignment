import React, { useEffect, useState } from 'react'
import Select from 'multiselect-react-dropdown'
import axios from 'axios'
import './SelectComponent.css'

export const SelectComponent = () => {
  const [options,setoptions]=useState([])
  const [data,setdata]=useState([])

  useEffect(()=>{
   const getCountry=async()=>{
     let countrylist=[]
        let res=await fetch(`https://apnastore123.herokuapp.com/country`)
        let resdata= await res.json()
        for(let i=0;i<resdata.length;i++){
          countrylist.push(resdata[i].name)
        }
        console.log(countrylist)
        setoptions(countrylist)
   }
   getCountry()
  
  },[])
  return (
    <div className='bodytag'>
     <div className='container'>
     <Select 
      placeholder='search country name'
       select={"All"}
      isObject={false} options={options} 
      onSearch={true}
      color={"white"}
      backgroundColor={"grey"}
      showCheckbox/>
     </div>
        
   
    </div>
  )
}
