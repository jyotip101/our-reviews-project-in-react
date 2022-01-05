import React, { useState } from 'react'
import TourCard from './TourCard'

const ToursList = ({ data, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <div className='content'>
        {data.map((item) => {
          return <TourCard key={item.id} removeTour={removeTour} {...item} />
        })}
      </div>
    </>
  )
}

export default ToursList
