import React, { useEffect, useState } from 'react'

import Loading from './Loading'
import TourList from './TourList'

const url = 'https://picsum.photos/v2/list?page=4&limit=5'

const Tours = () => {
  const [isLoading, setisLoading] = useState(true)
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch(url)
      const tourData = await response.json()
      console.log(tourData)
      setData(tourData)
      setisLoading(false)
    } catch (error) {
      setisLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  if (data.length === 0) {
    return (
      <>
        <h1>no tour Lift</h1>

        <button onClick={getData} className='btn refresh'>
          refresh
        </button>
      </>
    )
  }

  const removeTour = (id) => {
    const newToue = data.filter((tour) => tour.id !== id)

    setData(newToue)
  }
  return (
    <>
      <div className='container'>
        <h1>Tour Cards</h1>

        <TourList data={data} removeTour={removeTour} />
        <br />
        <br />
        <br />
        <footer>
          created by -
          <a href='https://github.com/jyotip101/tour-cards-in-reactjs'>
            Jyoti_p
          </a>
        </footer>
      </div>
    </>
  )
}
export default Tours
