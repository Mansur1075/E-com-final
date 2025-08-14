import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import React from 'react'
const Apidata = createContext();

const ContextApi = ({children}) => {
    let [info, setInfo]= useState([]);
    let [loading, setLoading]= useState(true)
    let getData = () =>{
        axios.get("https://dummyjson.com/products").then ((response)=>{
        setInfo(response.data.products);
        setLoading(false)
        })
    }   
    useEffect(()=>{
      getData();

    },[])
  return (
   <>
   <Apidata.Provider value={{info ,loading}}>{children}</Apidata.Provider>
   </>
  )
}

export {Apidata, ContextApi}