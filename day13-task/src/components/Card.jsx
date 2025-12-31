import React from 'react'

const Card = () => {
  return (
    <div className='card'>
      <div className='card-cont'>
        <img src="https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/images/products/moisturizer.jpg" alt="" />
      </div>
      <h1>Hydrating Facial Moisturizer</h1>
      <div className='categories'>
          <div className='capsule'><p>moisturizer</p></div>
          <div className='capsule'><p>hydration</p></div>
          <div className='capsule'><p>skincare</p></div>
          <div className='capsule'><p>beauty</p></div>
      </div>
      <p>This Hydrating Facial Moisturizer is expertly formulated to deeply nourish and hydrate your skin, providing lasting moisture and a smooth, radiant complexion. Ideal for daily use.</p>
      <div className='bottom'>
        <div> <h3>$120</h3></div>
       <div><button>Add to Cart</button></div>
        
      </div>
    </div>


  )
}

export default Card
