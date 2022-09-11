import React, { useState } from 'react'
import './Custom.css'
import {IoIosRemove} from 'react-icons/io'
import axios from 'axios'
import { useEffect } from 'react'
import { Box, Input } from '@chakra-ui/react'
export const Select = () => {
    const [isvisible,setisvisible]=useState(true)
    const [newdata,setnewData]=useState([])
    const [final,setfinal]=useState([])
    const [inputdata,setinput]=useState('')
    const [data,setdata]=useState([])
console.log(inputdata)
const getData=(search)=>{
    axios.get(`https://apnastore123.herokuapp.com/country`,{
        params:{
            q:search
        }
    })
    .then((res)=>setdata(res.data))
}
useEffect(()=>{
getData(inputdata)
},[inputdata])



const handleAdd=(name)=>{
     let duplicate=newdata.includes(name)
    console.log(duplicate)
       if(!duplicate){
        setnewData([...newdata,name])
       } else{
        function arrayRemove(arr, value) { 
    
            return arr.filter(function(ele){ 
                return ele != value; 
            });
        }
        
        var result = arrayRemove(newdata, name)
        setnewData(result)
        
       }
       
}


const [selectIndex,setselectIndex]=useState(null)

  return (
    <div>
    <div className='customSelect'>
        
    <Box border={"1px solid grey"} className='showlist'
      placeholder='enter to searc'>
      
    {newdata?.map((el)=>{
        return(
           
            <span className='span' >{el} <sup style={{backgroundColor:'whitesmoke'}}>x</sup>
            
            </span>
        
        )
    })}
     <Input width={"30%"} border={"none"} display={"hidden"}  placeholder={"search here"}
     onChange={(e)=>setinput(e.target.value)}/>
    </Box>
    <div className='select-item'>
        {data.map((el)=>{
            return(
                <div className='checkboxshow'>
                       <input  type="checkbox" className='checkbox'  onClick={()=>handleAdd(el.name)}/>
                       {el.name}
                 
                     
              
                </div>
            )
        })}
    </div>
    </div>
    </div>
  )
}
