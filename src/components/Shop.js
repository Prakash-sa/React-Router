import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

function Shop() {
  useEffect(()=>{
    fetchItems();
  },[]);
  const [items,setItems]=useState([]);

  const fetchItems=async() => {
    const data1 = await fetch('https://fortnite-api.theapinetwork.com/store/get');
    const items=await data1.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <div>
      {items.map(item=>(
        <div>
        <h1 key={item.itemId}>
        <Link to ={`/shop/${item.itemId}`}>  {item.item.name} </Link></h1>
        <img src={item.item.images.icon} alt=""/>
      </div>
      ))
}
    </div>
  );
}

export default Shop;
