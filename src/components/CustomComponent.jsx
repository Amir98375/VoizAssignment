import React, { useState } from 'react'
import './Custom.css'
export const Select = () => {
    const [isvisible,setisvisible]=useState(true)
    const [newdata,setnewData]=useState([])
    const [data,setdata]=useState([{
        country:"india",

        capital:"delhi"
    },
{
    country:"pakistan",
    capital:"Islamabad"
},
{
    country:"bangladesh",
    capital:"Dhaka"
}
])
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
console.log(newdata)

const [selectIndex,setselectIndex]=useState(null)
  return (
    <div>
    <div className='customSelect'>
    <div className='showlist'>
   {newdata}
    </div>
    <div className='select-item'>
        {data.map((el)=>{
            return(
                <div className='checkboxshow'>
                       <input  type="checkbox" className='checkbox'  onClick={()=>handleAdd(el.country)}/>
                       {el.country}
                 
                     
              
                </div>
            )
        })}
    </div>
    </div>
    </div>
  )
}
