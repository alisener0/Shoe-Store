import React, { useEffect } from 'react'
import { colors, numbers } from '../../utils/constants'
import { useSearchParams } from 'react-router-dom'
import { FilterProps } from './size'

const Color = ({selected, setSelected}:FilterProps) => {
  const [params, setParams] = useSearchParams()
  
  //state her değiştiğinde url deki parametreleri güncelle
  useEffect(() => {
    if (selected.length > 0) {
      //seçili elemanları url e ekle (, koy)
      //! join diziyi metne cevirir split metni diziye
        params.set  ("color", selected.join(","))
    } else {
      //seçili eleman yoksa urlden çıkar
      params.delete("color")
    }
//!url i güncelle
setParams(params)

  }, [selected] )
  
  
  //üzerine tıklanan seçeneği state de yoksa ekle varsa kaldır
const toogle = (num:string) => {
  const found = selected.includes(num)

  if (!found) {
    setSelected([...selected, num]);
  } else {
    setSelected(selected.filter((i) => i !== num ))
  }

}


  return (
    <div className='lg:mt-5'>
      <h2 className='mb-4 font-semibold'>Renk</h2>
    
    
      <div className='grid grid-cols-5 gap-4'>
        {colors.map((color) => {

          //numara seçili mi ?
          const found = selected.includes(color.id)

          return (
          <p 
          onClick={()  => toogle(color.id) }
          style={{background: color.code}}
          className={`py-2 px-4 lg:px-0 text-center 
      rounded-md cursor-pointer transition 
      hover:bg-zinc-400 bg-white text-transparent 
      select-none ${
        found ? "ring-[4px]" : ""  
      }`}
      >
        .
        </p>
    )
        } )}
      </div>
    </div>
  )
}

export default Color