import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

function Shop() {
  useEffect(()=>{
    fetchItems();
  },[]);
  const [items,setItems]=useState([]);

  const fetchItems=async() => {
  };

  return (
    <div>
      Item
    </div>
  );
}

export default Shop;
