
import HighQualityCard from '../../ui/cards/HighQualityCard'
import Image2Card from '../../ui/cards/Image2Card'
import EcoCard from '../../ui/cards/EcoCard'

const Grid2 = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-6 p-10  '>
      <HighQualityCard/>
      <Image2Card/>
      <EcoCard/>
      
      
    </div>
  )
}

export default Grid2
