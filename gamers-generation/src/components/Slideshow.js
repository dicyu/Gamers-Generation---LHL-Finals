import React, { useState } from 'react'
import { SlideData } from './SlideData';

function SlideShow () {

  const ImageSlide = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length
  }
  return (
    <div className='slideshow'>
      <div className='slider'>
        <div className='sliding'>

        </div>
      </div>
    </div>
  )
}

export default SlideShow;