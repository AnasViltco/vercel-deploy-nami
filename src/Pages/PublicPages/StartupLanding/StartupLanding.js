import React from 'react'
import "./StartupLanding.scss"

function StartupLanding() {
  return (
    <div className='col-sm-12 backgeound_start'>
        <div className='container'>
        <div className='col-sm-12 text-center pt-5'>
            <h1 className='heading_startup'><b>
            The world’s number one startup <br/> acquisition marketplace</b></h1>
        </div>
        <div className='col-sm-12 text-center pt-5'>
           <img src='../images/line.png' className='img-fluid' />
        </div>
        <div className='col-sm-12 text-center pt-5'>
          <div className='row'>
            <div className='col-sm-4 text-center'>
                <h5><b>Sellers</b></h5>
                <p>
                List your startup for free <br/> and get eyes on it instantly.
                </p>
            </div>
            <div className='col-sm-4 text-center pt-3'>
                <h4><b>Platform</b></h4>
                <p>
                We connect buyers and sellers, starting the right  conversations that lead to an acquisition.
                </p>
            </div>
            <div className='col-sm-4 text-center'>
                <h5><b>Buyers</b></h5>
                <p>
                Find your ideal startup and <br/> evaluate  key metrics before<br/> making an offer.
                </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default StartupLanding