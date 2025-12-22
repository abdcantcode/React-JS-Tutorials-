import React from 'react'
import BlogButton from '../buttons/BlogButton'
import CardButton from '../buttons/CardButton'
import CollabsButton from '../buttons/CollabsButton'
import DesignersButton from '../buttons/DesignersButton'
import EventsButton from '../buttons/EventsButton'
import GetInTouchButton from '../buttons/GetInTouchButton'

const RightNav = () => {
  return (
    <div className='flex gap-x-1 p-2'>
      <DesignersButton />
      <CollabsButton />
      <EventsButton />
      <BlogButton />
      <CardButton />
      <GetInTouchButton />
    </div>
  )
}

export default RightNav
