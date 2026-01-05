import React from 'react'
import { useParams } from 'react-router-dom'

const KuchBhiNahi = () => {
  const params=useParams()
  console.log(params);
  return (
    <div className='underline text-3xl flex items-center justify-center h-full mt-40'> 
      <h1>Kuch Bhi Page, jiski dynamically passed param ya jo bhi bolte woh hai "{params.bgn}"</h1>
    </div>
  )
}

export default KuchBhiNahi
