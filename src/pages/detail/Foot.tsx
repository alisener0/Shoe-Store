import xss from 'xss'
import { DetailProps } from './Head'

const Foot = ({data}: DetailProps) => {
    console.log(data)
  return (
    <div>
    <div className='flex flex-col gap-2 text-white'>
        <div className='flex gap-2'>
        <button className='bg-black flex-1 p-4 rounded-lg'> 
            Sepete Ekle
            </button>
        
        <button className='bg-black p-4 rounded-lg'>
            <img src="/heart.svg"  />
        </button>
    </div>
    
    <button className='bg-mavi p-4 rounded-lg'>
        Hemen Satın Al
        </button>
    </div>
    
    <div>
        <h2 className='font-semibold mt-8 mb-2 text-[24px] text-gray-dark'>
            Bu Ürün Hakkında</h2>

            {/*API DEN Gelen html içeriğini react ta ekrana basmak
            için "dangerouslySetInnerHTML" propunu kullanrz 
            xss ile html içindeki zarrlı olablcek scriptleri bozarak tehlikeyi atlatrz
            */}

        <p className='font-open text-[20px] text-gray-dark' 
        dangerouslySetInnerHTML={{__html: xss(data.description)}}></p>
    </div>
    </div>
  )
}

export default Foot