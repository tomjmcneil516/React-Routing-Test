import './App.css';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function ItemDetail( {match} ) {

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }

    useEffect(() => {
        fetchItem()
    },[])

    return (
      <div>
        <h1>{item.description}</h1>
        <img src={item.image} alt="Clothing Image" />
      </div>
    );
  }

  export default ItemDetail