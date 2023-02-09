import React from 'react'
import EQListItem from './EQListItem'
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function EQList() {

  const API_URL = "https://api.orhanaydogdu.com.tr/deprem/live.php?limit=10";
  const [loading,setLoading] = useState(true);
  const [eqList,setEQList] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(API_URL);
      setEQList(data.data.result)
      setLoading(false);
    };
    getData()
  },[])


  if(loading){
    return <div>loading..</div>
  }

  if(!loading){
    return (
      <section className='flex gap-2 flex-wrap'>
        {eqList.map((eq,index) => {
          return (
            <EQListItem key={index} eqObj={eq} />
          )
        })}

      </section>
    )
  }

}
