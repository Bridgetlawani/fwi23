import React from 'react'
import './Elements.css'
import PC from '../assets/images/image-retro-pcs.jpg'
import laptop from '../assets/images/image-top-laptops.jpg'
import game from '../assets/images/image-gaming-growth.jpg'

const Elements = () => {
  return (
    <div className='big-div'>
      <div className='first-div'>
        <section className='image-div'>
          <img src={PC} className ='image' />
        </section>
        <section className='text-div'>
          <h3>01</h3>
          <h4>Reviving Retro PCs</h4>
          <p>What happens 
            when old PCs are given 
            modern upgrades?</p>
        </section>

      </div>
      <div className='first-div'>
        <section className='image-div'>
          <img src={laptop} className = 'image' />
        </section>
        <section className='text-div'>
        <h3>
          02
        </h3>
        <h4>Top 10 Laptops of 2022</h4>
        <p>Our best picks for varioys 
          needs and budgets.</p>

        </section>
        
      </div>
      <div className='first-div'>
        <section className='image-div'>
          <img src={game} className='image'/>
        </section>
        <section className='text-div'>
        <h3>03</h3>
        <h4>The Growth of Gaming</h4>
        <p>How the pandemic has sparked fresh opportunities.</p>
        </section>

      </div>
    </div>
  )
}

export default Elements