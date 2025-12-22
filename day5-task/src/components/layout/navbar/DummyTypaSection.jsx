import React from 'react'
import DesignersDiv from '../../ui/info div/DesignersDiv'
import ClientsDiv from '../../ui/info div/ClientsDiv'
import MasterPieces from '../../ui/info div/MasterPieces'
import EventsDiv from '../../ui/info div/EventsDiv'

const DummyTypaSection = () => {
  return (
    <div className=' bg-black flex justify-between px-20 py-8'>
      <DesignersDiv />
      <ClientsDiv />
      <MasterPieces />
      <EventsDiv />
    </div>
  )
}

export default DummyTypaSection
