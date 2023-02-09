import React from "react"
import { Map, Marker } from "pigeon-maps"

export default function GMap({position}) {
  return (
    <Map mouseEvents={false} height={200} defaultCenter={[position.lat, position.lng]} defaultZoom={11}>
      <Marker width={50} anchor={[position.lat, position.lng]} />
    </Map>
  )
}