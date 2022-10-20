import React from 'react'
import "./DiscoversellLand.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




function DiscoversellLand(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <div className='col-sm-12 pl-1'>
        <div className='col-sm-12 bg_color1 text-center pt-5 pb-5'>
        <Carousel responsive={responsive}
         infinite={true}
        //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
         autoPlaySpeed={1000}>
        <div className='col-sm-12'>
            <img className='img-fluid' src='../images/card2.png' />
            </div>
            <div className='col-sm-12'>
            <img className='img-fluid' src='../images/card2.png' />
            </div>
            <div className='col-sm-12'>
            <img className='img-fluid' src='../images/card2.png' />
            </div>
            <div className='col-sm-12'>
            <img className='img-fluid' src='../images/card2.png' />
            </div>
        </Carousel>
        </div>
    </div>
  )
}

export default DiscoversellLand