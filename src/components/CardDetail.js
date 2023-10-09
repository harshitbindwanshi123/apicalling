import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CardDetail = () => {
   const param=useParams()
    console.log(param.id)
    const[data,setData]=useState({})

    async function getData(){
      const response=await axios.get(`https://fakestoreapi.com/products/${param.id}`)
      console.log(response.data)
      setData(response.data)    
     
    }

    useEffect(()=>
    {
      getData();
    },[])
   
  return (
    <div><img src={data.image} alt="" />
    <div>{data.description}</div>
    
    </div>
  )
}

export default CardDetail