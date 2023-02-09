import React from 'react'
import GMap from './GMap'


function EQListItem({eqObj}) {
    console.log(eqObj)
    return (
      <div className='w-full sm:w-[19rem] md:w-[23rem] lg:w-[21rem] xl:w-[23.6rem] h-[20rem] bg-primary-dark text-primary-light flex flex-col p-2 rounded-sm'>
          <div>
              <GMap position={eqObj} />
          </div>
          <div className='flex flex-col items-start'>
              <span>Konum : {eqObj.title}</span>
              <span>Zaman : {eqObj.date}</span>
              <span>Büyüklük : {eqObj.mag}</span>
          </div>

      </div>
    )

}

export default EQListItem