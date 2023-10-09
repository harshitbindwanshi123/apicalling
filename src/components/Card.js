import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Card = () => {
  const[data,setData]=useState([])
  const [allData,setAllData]=useState([]);
  
  useEffect(() => {
  getData()
  }, []);

  async function getData(){
    const response=await axios.get('https://fakestoreapi.com/products')
    console.log(response.data)
    setData(response.data)    
    setAllData(response.data)
  }
 const filterIt =(value)=>
 {
  if(value==="All")
  {
    setData(allData); 
    return;
  }
const localData=allData.filter((item)=>item.category===value);
setData(localData);
  
} 

  return (
    <div>
       <div className="buttons">
    <button className='button' onClick={(e)=>filterIt("All")} >All</button>
      <button className='button' onClick={(e)=>filterIt("men's clothing")}>men's clothing</button>
      <button className='button' onClick={(e)=>filterIt("jewelery")}>jewelery</button>
      <button className='button' onClick={(e)=>filterIt("electronics")}>electronics</button>
      <button className='button' onClick={(e)=>filterIt("women's clothing")}>women's clothing</button>
    </div>
     <div className="body">
{
   data.map((item)=>
    
    <Link to={`/cardDetails/${item.id}`}>
    <div className="main" >
      <div className="image"><img className='photo' src={item.image} alt="" /></div>
      <div className="discription" ><span>Description:</span>{item.description}</div>
      <div className="price"><span>Price:</span>{item.price}</div>
      <div className="rating"><span>Rating:</span>{item.rating.rate}</div>
      <div className="category"><span>category:</span>{item.category}</div>
    </div>
    </Link>
    )}
    </div>
    
    </div>
  )
}

export default Card