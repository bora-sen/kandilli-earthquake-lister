import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

function Options() {

  const cont = useContext(MainContext);





  function handleClick(e){
    e.preventDefault()
    console.log("clicked")
    cont.refreshEQData();
  }
  //const [refreshEQData] = useContext(MainContext);
  //console.log(refreshEQData);
  return (
    <div className='flex justify-end mt-2'>
        <button className='bg-primary-dark text-white p-2 rounded-md' onClick={e => {handleClick(e)}}>Yenile</button>
    </div>
  )
}

export default Options