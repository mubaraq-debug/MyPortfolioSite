import React from 'react'

interface BoxContainerProps {
    image: any,
    header: string,
    text: string,
}

const BoxContainer: React.FC<BoxContainerProps> = ({image, header, text}) => {
  return (
    <div className='flex flex-col items-start gap-5 w-fit h-[300px] md:h-[400px] cursor-default hover:-translate-y-2 border border-1 bg-[#eff2f5] rounded-lg shadow-xl p-8 hover:bg-[#333] hover:text-white'>
        <img src={image} alt="image-trf" className='w-[35px] md:w-[60px] h-[35px] md:h-[50px]' />
        <h1 className='capitalize font-medium text-xl md:text-3xl'>{header}</h1>
        <p className='font-light text-sm md:text-base'>{text}</p>
    </div>
  )
}

export default BoxContainer