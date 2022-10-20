import React from 'react'
import TestimonailsScroll from './TestimonailsScroll/TestimonailsScroll'
import "./Testimonials.scss"

function Testimonials() {
  return (
    <div className='col-sm-12 pt-5 pb-5 background_testimonials'>
        <div className='container pt-5 pb-5'>
            <div className='col-sm-12 text-center'>
                <h1 className='text_color_blue'><b>
                What do founders and <br/> buyers say about <br/> MicroAcquire?
                </b></h1>
            </div>
            <div className='col-sm-12 text-center'>
               <TestimonailsScroll />
            </div>
        </div>
    </div>
  )
}

export default Testimonials