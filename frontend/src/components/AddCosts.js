/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect} from 'react';
import Cards from './Card';
import { useDispatch, useSelector } from 'react-redux';


function AddCosts() {
  const dispatch = useDispatch();
  const  caterories =  useSelector((state) => state.caterories)
  useEffect(()=>{
    fetch('http://localhost:4000/listOfCategories', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })
    .then(res=>res.json())
    .then(data=>dispatch({type:'SAVE_COST_CATEGORIES',payload:data}))
    
  },[])
 return(
   <>
    <div className='flex'>
{caterories && caterories.map((name,i)=> <Cards key={i} name={name} />)}
  </div >  
    </>
  );
  
}

export default AddCosts;
