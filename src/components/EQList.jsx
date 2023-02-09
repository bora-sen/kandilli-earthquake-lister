import React, { useContext } from 'react'
import Reveal from 'react-reveal/Fade';
import { MainContext } from '../context/MainContext'
import EQListItem from './EQListItem'
import Loading from './Loading'

export default function EQList() {
  const {eqList} = useContext(MainContext);
  const {loading} = useContext(MainContext);


  if(loading){
    return <Loading />
  }

  if(!loading){
    return (
      <Reveal>
      <section className='flex gap-2 flex-wrap justify-center mt-2'>
        {eqList.map((eq,index) => {
          return (
            <EQListItem key={index} eqObj={eq} />
          )
        })}
      </section>
      </Reveal>
    )
  }

}
