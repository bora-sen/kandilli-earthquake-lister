import React from 'react'
import GMap from './GMap'




function EQListItem({eqObj}) {
    return (
      <div className='w-[18rem] h-[20rem] bg-red-200 flex flex-col p-2'>
          <div>
              <GMap position={eqObj} />
          </div>
          <div className='flex flex-col items-end'>
              <span>{eqObj.title}</span>
              <span>{eqObj.date_stamp}</span>
              <span>{eqObj.mag}</span>
  
          </div>
      </div>
    )

}

export default EQListItem