import React from 'react'
import './Info.css'
import web from '../assets/images/image-web-3-desktop.jpg'
// import mobile from '../assets/images/image-web-3-mobile.jpg'

const Info = () => {
  return (
    <div className='info-wrap'>
      <div big-wrap>
        <img src={web} alt='web' className='image'/>
        <div className='semi-wrap'>
          <div>
          <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div>
            <p>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of people.
               But is it really fulfilling it's promise?
            </p>

            <button>READ MORE</button>
          </div>
        </div>

      </div>
      <div className='small-wrap'>
        <section>
         <h2>New</h2>
            
        </section>
        <section className='section'>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </section>
        <hr/>
        <section className='section'>
          <h3>The Downsides of AI Artistry</h3>
          <p>What are the possible adverse effects of on-demand AI image generation?</p>
        </section>
        <hr/>
        <section className='section'>
          <h3>Is VC Funding Drying UP</h3>
          <p>Private funding by VC firms is down by 50% YOY. We take a look at what that means</p>
        </section>
      </div>

    </div>
  )
}

export default Info