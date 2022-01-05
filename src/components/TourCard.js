import React, { useState } from 'react'

const TourCard = ({ author, height, download_url, id, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <article className='tour-card'>
        <img src={download_url} alt={author} />
        <h1>
          {author} <span>${height}.00</span>
        </h1>
        <p>
          {readMore
            ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis aperiam culpa delectus excepturi minus laborum quas nostrum saepe non vero dolorum alias neque laboriosam pariatur, laudantium expedita tempora, quos repellendus nesciunt qui molestiae sed eaque reprehenderit! Autem.'
            : `${'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis aperiam culpa delectus excepturi minus laborum quas nostrum saepe non vero dolorum alias neque laboriosam pariatur, laudantium expedita tempora, quos repellendus nesciunt qui molestiae sed eaque reprehenderit! Autem.'.substring(
                0,
                100
              )}...`}

          <button onClick={() => setReadMore(!readMore)} className='ream-more'>
            {readMore ? 'read less' : 'read more'}
          </button>
        </p>

        <button onClick={() => removeTour(id)} className='btn'>
          Not Intersted
        </button>
      </article>
    </>
  )
}

export default TourCard
